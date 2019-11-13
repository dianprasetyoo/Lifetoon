const models = require('../models')
const comics = models.comics
const favorite = models.favorites

//get semua Comics
exports.getComics = (req, res) => {
    comics.findAll().then(item=>res.send(item));
}

//get slideshow
exports.getSlide = (req, res) => {
    comics.findAll({limit : 5}).then(item=>res.send(item));
}

//get all Comics with id
exports.getAllComics = (req, res) => {
    comics.findAll({
        include: [{
            model: favorite,
            as: 'favorite',
            }],
    }).then(item=>res.send(item));
}

 //Create Comics
 exports.storeComics = (req, res) => {
    const {title, genre, image} = req.body;
    comics.create({
        title,
        genre,
        image
    }).then(result => res.send(result));
}


//Update Comic
exports.updateComics = (req, res) => {
    const {title, genre, image} = req.body
    comics.update({
        title,
        genre,
        image
    },
    {
        where:{id: req.params.id_comics},
    }).then(res.send(req.body))
}

//Delete Comic
exports.deleteComics = (req, res) => {
    comics.destroy({
        where:{id: req.params.id_comics},
    })
    .then(res.send({
        message: "Success"
    }))
}

//Get Creation
exports.getCreation = (req, res) => {
    comics.findAll({
        where:{createdBy: req.params.id_user},
    }).then(item=>res.send(item))
}