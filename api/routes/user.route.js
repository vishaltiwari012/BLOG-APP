import express from 'express';
import { signout, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get("/test", test);
router.post('/signout', verifyToken, signout);
router.put('/update/:userId', verifyToken, updateUser);

export default router;