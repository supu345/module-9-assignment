const express = require("express");
const adminController = require("../controllers/adminController");
const postController = require("../controllers/postController");
const subadminController = require("../controllers/subAdminController");
const userController = require("../controllers/userController");
const router = express.Router();

// admin routes
router.get("/admin/create", adminController.create);
router.get("/admin/read", adminController.read);
router.get("/admin/delete", adminController.delete);
router.get("/admin/update", adminController.update);

// post routes
router.get("/post/create", postController.create);
router.get("/post/read", postController.read);
router.get("/post/delete", postController.delete);
router.get("/post/update", postController.update);

// subadmin routes
router.get("/subadmin/create", subadminController.create);
router.get("/subadmin/read", subadminController.read);
router.get("/subadmin/delete", subadminController.delete);
router.get("/subadmin/update", subadminController.update);

// user routes
router.get("/user/create", userController.create);
router.get("/user/read", userController.read);
router.get("/user/delete", userController.delete);
router.get("/user/update", userController.update);

module.exports = router;
