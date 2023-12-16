const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRoutes = require("./tags.routes");


const routes = Router();
routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRoutes);

module.exports = routes;