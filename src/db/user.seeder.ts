import UserModel from "../models/user.model";
import { UserCreateInterface } from "src/interfaces/user.interface";
import bcrypt from "bcryptjs";
import express from 'express';
import Loaders from "../loader";
import config from '../config';


const userSeed = async () => {
  try {
    const app = express();
    const loader = new Loaders(app);
    loader.setupMySQLPool();
    const userModel = new UserModel;
    const userData: UserCreateInterface = {
      username: "admin",
      password: String(await bcrypt.hash("admin", 10)),
      status: 1,
    };
    const data = await userModel.userSeed(userData);
    console.log(data, "\n", "User seeded succesfully");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

userSeed();