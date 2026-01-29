const express = require('express');
const { dashBordpage, loginPage, loginUser, logOutUser, myProfile, changePasswordPage, changePassword } = require('../controller/auth.controller');
const passport = require('passport');
const routes = express.Router();

routes.get("/", loginPage);

routes.post("/login", passport.authenticate('local', { failureRedirect: '/' }), loginUser);

routes.get('/dashboard',passport.checkAuthicate, dashBordpage);
routes.get("/logOut",passport.checkAuthicate, logOutUser);
routes.get("/viewprofile",passport.checkAuthicate, myProfile);

routes.get("/change-password",passport.checkAuthicate, changePasswordPage);
routes.post("/change-password",passport.checkAuthicate, changePassword);


routes.use("/blog",passport.checkAuthicate, require("./blog.routes"));
routes.use("/admin",passport.checkAuthicate, require("./admin.routes"));
module.exports = routes;







