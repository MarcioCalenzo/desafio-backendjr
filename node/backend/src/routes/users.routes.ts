import { Router } from "express";
import {
  deleteUserController,
  updateUserController,
  userCreateController,
  userListController,
} from "../controllers/users.controller";
import verifyActiveUser from "../middlewares/verifyActiveUser.middleware";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import verifyIdUpdateAuthAdm from "../middlewares/verifyIdUpdateUser.middleware";
import verifyUpdateAuthAdm from "../middlewares/verifyUpdateAuthAdm.middleware";
import verifyUpdateUser from "../middlewares/verifyUpdateUser.middlewares";
import { userUpdateSchema } from "../schemas/users.schema";
import validateUserMiddleware from "../middlewares/validateUser.middlewares";
import verifyUserIdOrAdmin from "../middlewares/verifyUserIdOrAdmin.middlewares";

const userRoutes = Router();

userRoutes.post("", validateUserMiddleware, userCreateController);
userRoutes.get("", verifyAuthUser, userListController);
userRoutes.delete(
  "/:id",
  verifyAuthUser,
  verifyUserIdOrAdmin,
  deleteUserController
);
userRoutes.patch(
  "/:id",
  verifyUpdateUser(userUpdateSchema),
  verifyAuthUser,
  verifyUpdateAuthAdm,
  verifyActiveUser,
  verifyIdUpdateAuthAdm,
  verifyUserIdOrAdmin,
  updateUserController
);

export default userRoutes;
