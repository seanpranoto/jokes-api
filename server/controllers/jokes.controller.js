const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json({ jokes: jokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.findAJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createAJoke = (req, res) => {
    Joke.create(req.body)
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateAJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true})
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};