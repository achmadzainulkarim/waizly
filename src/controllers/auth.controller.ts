import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config';
import UserModel from '../models/user.model';

export default class AuthController  {
  async login(req:Request, res:Response){
    const { username, password } = req.body;
    try {
      // check credentials
      const userModel = new UserModel;
      const user = await userModel.get(username);
      if(!user) throw new Error("Username is not found!");
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) throw new Error("Password does not match!");

      const payload = { id: user.id, username : user.username };

      jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiration }, (error, token) => {
        if (error) throw error;
        return res.json({ token });
      });
    } catch (error:any) {
      console.log(error);
      res.status(500).json({message : error.message});
    }
  }
}
