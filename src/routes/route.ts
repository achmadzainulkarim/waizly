import AuthController from '../controllers/auth.controller';
import { Request, Response, Router } from 'express';
import AddressController from '../controllers/address.controller';
import authMiddleware from '../middlewares/auth.middleware';


export const route = (router:Router) => {
  const authCon = new AuthController;
  const addCon = new AddressController;
  
  router.get("/api/health", (req:Request, res:Response) => { res.send("OK") });

  // Auth
  router.post("/api/auth/login", authCon.login);

  // Address
  router.get("/api/address/get", authMiddleware, addCon.get);
  router.get("/api/address/detail/:id", authMiddleware, addCon.detail);
  router.post("/api/address/create", authMiddleware, addCon.create);
  router.post("/api/address/update/:id", authMiddleware, addCon.update);
  router.post("/api/address/delete/:id", authMiddleware, addCon.delete);
};
