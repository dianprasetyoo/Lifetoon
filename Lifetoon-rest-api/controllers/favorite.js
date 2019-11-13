const models = require('../models')
const favorite = models.favorites
const comic = models.comics

//get Favorite
exports.getFavorites = (req, res) => {
    favorite.findAll({
        include: [{
            model: comic,
            as: 'comicsID',
            }],
        where:{user_id: req.params.id_users}
    }).then(item=>res.send(item));
}

 //Create Favorites
 exports.storeFavorites = (req, res) => {
    const {isFavorite} = req.body;
    favorite.create({
        isFavorite,
        user_id: req.params.id_users,
        comics_id: req.params.id_comics
    }).then(result => res.send(result));
}

//Delete Favorites
exports.deleteFavorites = (req, res) => {
    favorite.destroy({
        where:{id: req.params.id_favorites},
    })
    .then(res.send({
        message: "Success"
    }))
}