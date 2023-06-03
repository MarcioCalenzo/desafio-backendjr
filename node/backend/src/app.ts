import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";
import personRoutes from "./routes/persons.routes";
import tokengitRoutes from "./routes/githubtoken.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/persons", personRoutes);
app.use("/tokengit", tokengitRoutes);

export default app;
