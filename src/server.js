require("express-async-errors");
const migationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const express = require('express');

const routes  = require("./routes");

migationsRun();

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }
    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

// Route Params
// app.get("/messagem/:id/:user", (request, response) => {
//     const { id, user } = request.params;

//     response.send(`
//         id da messagem: ${id}.
//         Para o usuario: ${user}
//     `);
// });

// Query Params
// app.get("/users", (request, response) => {
//     const {page, limit } = request.query;

//     response.send(`Página: ${page}. Mostrar: ${limit}`)
// })

// app.post("/users", (request, response) => {
//     const {name, email, password} = request.body;
//     response.json({name, email, password});
//     response.send(`usúario: ${name}. Email: ${email}. Senha: ${password}`)
// })

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))