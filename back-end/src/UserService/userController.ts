import { Request, Response } from 'express';
import UserRepository from './userRepository';
import express from 'express';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserRepository.getAllUsers();
    res.json(users);
  } catch (error: any) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

// get user by name
export const getUserByName = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.params;
  try {
    const user = await UserRepository.getUserByName(name);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error: any) {
    console.error('Error fetching user by name:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await UserRepository.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error: any) {
    console.error('Error fetching user by id:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {

  // if id is in boday, send it to update
  if (req.body._id) {
    req.params.id = req.body._id;
    updateUser(req, res);
    return;
  }

  try {
    const { name, sector_names } = req.body;
    if (!name || !sector_names) {
      res.status(400).json({ error: 'Name and sector_id are required.' });
      return;
    }
    const newUser = { name, sector_names };
    const addedUser = await UserRepository.addUser(newUser);
    res.json(addedUser);

  } catch (error: any) {
    console.error('Error creating user:', error.message);
    res.status(500).send('Internal Server Error');
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, sector_names } = req.body;
  try {


    const newUser = { name, sector_names };
    const updatedUser = await UserRepository.updateUser(id, newUser);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error: any) {
    console.error('Error updating user:', error.message);
    res.status(500).send('Internal Server Error');
  }
};



export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const deletedUser = await UserRepository.getUserById(id);
    UserRepository.deleteUser(id);
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error: any) {
    console.error('Error deleting user:', error.message);
    res.status(500).send('Internal Server Error');
  }
};
