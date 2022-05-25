const router = require("express").Router();

// Controllers
const { register,verify ,login} = require("../../app/controllers/api/AuthController");

// Middleware
const { registerValidation } = require("../../app/middlewares/auth");

// Routes
router.post("/register", registerValidation, register);
router.get("/verify/:token", verify);
router.post("/login", login);
router.post("/verify/resend", resendVerification);


module.exports = router;