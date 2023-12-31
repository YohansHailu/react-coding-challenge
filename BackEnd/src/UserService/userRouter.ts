import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser, getUserByName } from './userController';
const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.get('/users/name/:name', getUserByName)
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


export default router;
