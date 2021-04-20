import { Router } from "express";
import SessionController from "./app/controllers/SessionController";
import UserController from "./app/controllers/UserController";
import DriverController from "./app/controllers/DriverController";
import authMiddleware from "./app/middlewares/auth";
import adminMiddleware from "./app/middlewares/admin";

const routes = new Router();

routes.get("/", (req, res) => res.json({ message: "Its ok..." }));
routes.post("/session", SessionController.session);
routes.post("/users", UserController.store);

// ROTAS COM AUTENDICAÇÃO
routes.use(authMiddleware);
routes.get("/users", adminMiddleware, UserController.index);
routes.get("/user/:id_user", adminMiddleware, UserController.details);
routes.delete("/user/:id_user", adminMiddleware, UserController.delete);
routes.get("/profiler", adminMiddleware, UserController.profiler);
routes.put("/users", UserController.update);

routes.post("/drivers", DriverController.store);
routes.get("/drivers", adminMiddleware, DriverController.index);
routes.get("/drivers/:id_driver", adminMiddleware, DriverController.details);
routes.delete("/drivers/:id_driver", adminMiddleware, DriverController.delete);

export default routes;
