const adminModel = require('../model/admin.model');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')

exports.addAdminPage = async (req, res) => {
    try {
        return res.render("admin/addAdmin");
    } catch (err) {
        console.log(err);
        return res.redirect("/dashBoard");
    }
};

exports.viewAdmin = async (req, res) => {
    try {
        let admins = await adminModel.find();
        return res.render("admin/viewAdmin", { admins });
    } catch (err) {
        console.log(err);
        return res.redirect("/dashBoard");
    }
};

exports.addAdmin = async (req, res) => {
    try {
        let imagePath = "";

        if (req.file) {
            imagePath = "/uploads/" + req.file.filename;
        }

        let hashpassword = await bcrypt.hash(req.body.password, 10);

        await adminModel.create({
            ...req.body,
            password : hashpassword,
            adminImage: imagePath
        });

        req.flash('success', "Add Admin Success ")
        return res.redirect("/admin/add-admin");
    } catch (err) {
        console.log(err);
        return res.redirect("/dashBoard");
    }
};

exports.editAdinPage = async (req, res) => {
    try {
        let admin = await adminModel.findById(req.params.id);
        if (!admin) {
            return res.redirect("/admin/view-admin");
        }
        return res.render("admin/editAdmin", { admin });
    } catch (err) {
        console.log(err);
        return res.redirect("/dashBoard");
    }
};

exports.updateAdmin = async (req, res) => {
    try {
        let admin = await adminModel.findById(req.params.id);
        if (!admin) {
            return res.redirect("/admin/view-admin");
        }

        let imagePath = admin.adminImage;

        if (req.file) {
            if (admin.adminImage) {
                let oldImgPath = path.join(__dirname, "..", admin.adminImage);
                if (fs.existsSync(oldImgPath)) {
                    fs.unlinkSync(oldImgPath);
                }
            }
            imagePath = "/uploads/" + req.file.filename;
        }
        
        await adminModel.findByIdAndUpdate(req.params.id, {
            ...req.body,
            adminImage: imagePath
        });

        return res.redirect("/admin/view-admin");
    } catch (err) {
        console.log(err);
        return res.redirect("/admin/view-admin");
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        let admin = await adminModel.findById(req.params.id);
        if (!admin) {
            return res.redirect("/admin/view-admin");
        }

        if (admin.adminImage) {
            let imgPath = path.join(__dirname, "..", admin.adminImage);
            if (fs.existsSync(imgPath)) {
                fs.unlinkSync(imgPath);
            }
        }

        await adminModel.findByIdAndDelete(req.params.id);
        return res.redirect("/admin/view-admin");
    } catch (err) {
        console.log(err);
        return res.redirect("/dashBoard");
    }
};

exports.viewSingleAdmin = async (req, res) => {
    try {
        const admins = await adminModel.findById(req.params.id);

        if (!admins) {
            return res.redirect("/admin/single-view");
        }

        return res.render("admin/singlecard", { admins });
    } catch (err) {
        console.log(err);
        return res.redirect("/dashBoard");
    }
};