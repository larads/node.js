const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(request, response, next) {
    console.log("voce passou pelo Middleware");

    if(!request.body.isAdmin) {
        return request.json({ message: "user unauthorized"});
    }
    next();
}


const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;