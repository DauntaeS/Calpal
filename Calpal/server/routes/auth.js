import express from "express";

const router = express.Router();

// Import controllers with .js extension
import {
  signup,
  signin,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.js"; // Add .js extension here

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from the API",
  });
});

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
