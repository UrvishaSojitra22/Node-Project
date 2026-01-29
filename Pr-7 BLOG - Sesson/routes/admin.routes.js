
const express = require('express');
const { addAdminPage, addAdmin, viewAdmin, deleteAdmin, editAdinPage, updateAdmin, viewSingleAdmin } = require('../controller/admin.controller');
const uploadImage = require('../middleware/imageUpload');

const routes = express.Router();

routes.get('/add-admin', addAdminPage);
routes.post('/add-admin', uploadImage.single('adminImage'), addAdmin);

routes.get('/view-admin', viewAdmin);

routes.get('/edit-admin/:id', editAdinPage);
routes.post('/update-admin/:id', uploadImage.single('adminImage'), updateAdmin);

routes.get('/delete-admin/:id', deleteAdmin);
routes.get("/single-view/:id", viewSingleAdmin);



module.exports = routes;