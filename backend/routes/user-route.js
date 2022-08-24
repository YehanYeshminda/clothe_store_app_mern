import express from 'express';
import {
	getAllUsers,
	signUpUser,
	userLogin,
} from '../controllers/user-controller';

const router = express.Router();

// this below will contain a controller function
router.get('/', getAllUsers);

router.post('/signup', signUpUser);

router.post('/login', userLogin);
export default router;
