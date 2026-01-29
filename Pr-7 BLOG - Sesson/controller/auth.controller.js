const Admin = require("../model/admin.model");
const bcrypt = require("bcrypt");

/* ================= LOGIN PAGE ================= */
exports.loginPage = async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            return res.redirect("/dashboard");
        }
        return res.render("login");
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
};

/* ================= LOGIN SUCCESS ================= */
exports.loginUser = async (req, res) => {
    try {
        return res.redirect("/dashboard");
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
};

/* ================= DASHBOARD ================= */
exports.dashBordpage = async (req, res) => {
    try {
        return res.render("dashBoard", {
            user: req.user
        });
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
};

/* ================= LOGOUT ================= */
exports.logOutUser = async (req, res) => {
    try {
        req.logout(() => {
            req.session.destroy(() => {
                return res.redirect("/");
            });
        });
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
};

/* ================= MY PROFILE ================= */
exports.myProfile = async (req, res) => {
    try {
        return res.render("myProfile", {
            user: req.user
        });
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
};

/* ================= CHANGE PASSWORD PAGE ================= */
exports.changePasswordPage = async (req, res) => {
    try {
        return res.render("changePassword", {
            user: req.user
        });
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
};

/* ================= CHANGE PASSWORD LOGIC ================= */
exports.changePassword = async (req, res) => {
    try {
        const { oldPass, newPass, cPass } = req.body;
        const user = req.user;

        // old password check
        const matchPass = await bcrypt.compare(oldPass, user.password);
        if (!matchPass) {
            console.log("Old password incorrect");
            return res.redirect("/change-password");
        }

        // confirm password check
        if (newPass !== cPass) {
            console.log("New & Confirm password not match");
            return res.redirect("/change-password");
        }

        // update password
        const hashPassword = await bcrypt.hash(newPass, 10);
        await Admin.findByIdAndUpdate(user._id, {
            password: hashPassword
        });

        // logout after password change
        req.logout(() => {
            req.session.destroy(() => {
                return res.redirect("/");
            });
        });

    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
};
