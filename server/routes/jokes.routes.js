const JokeController=require("../controllers/jokes.controller");

module.exports=(app)=>{
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:_id", JokeController.findAJoke);
    app.put("/api/jokes/update/:_id", JokeController.updateAJoke);
    app.post("/api/jokes/new", JokeController.createAJoke);
    app.delete("/api/jokes/delete/:_id", JokeController.deleteAJoke);
};