const models = require('../models')
const episodes = models.episodes

//get semua Episodes
exports.getEpisodes = (req, res) => {
    episodes.findAll({
        where: {comics_id: req.params.comics_id}
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