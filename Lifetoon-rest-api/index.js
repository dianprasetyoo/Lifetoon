const express = require('express');
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express();
const port = 5000

//controllers
const authController = require('./controllers/auth')
const comicController = require('./controllers/comic')
const favoriteController = require('./controllers/favorite')
const episodeController = require('./controllers/episode')
const detailEpisodeController = require('./controllers/detailEpisode')


//middlewares
const {authenticated} = require('./middleware');


app.use(bodyParser.json())

//UPLOAD
// const path = require('path')
// app.use('/public', express.static(path.join(__dirname, 'public')))
// const {upload} = require('./upload')




app.group("/api/v3", (router) => {

    //AUTH
    //login
    router.post('/login', authController.login)
    //register
    router.post('/register', authController.register)
    //Get semua user
    router.get('/user', authController.getUser)

    //Comic
    //Get All Comic
    router.get('/comics', comicController.getComics)
     //Get slide
     router.get('/comics/slide', comicController.getSlide)
    //Get all comics with id
    router.get('/allComics/users/:id_user', comicController.getAllComics)
    //Add Comics
    router.post('/comics', comicController.storeComics)
    //Update Comics
    router.patch('/comics/:id_comics', comicController.updateComics)
    //Delete Comics
    router.delete('/comics/:id_comics', comicController.deleteComics)

    //Episode
    //Get All Episode
    router.get('/episodes/:comics_id', episodeController.getEpisodes)

    //Detail Episode
    //Get All Detail Episode
    router.get('/detail_episodes/:id_episode', detailEpisodeController.getDetailEpisodes)

    //Favorites
    //Get Favorites
    router.get('/favorites/users/:id_users', favoriteController.getFavorites)
    //Add Favorites
    router.post('/favorites/users/:id_users/comics/:id_comics', favoriteController.storeFavorites)
    //Delete Favorites
    router.delete('/favorites/:id_favorites', favoriteController.deleteFavorites)

    //Creation
    router.get('/creation/users/:id_user', comicController.getCreation)


})

app.listen(port, ()=> console.log(`listen on port ${port}!`))
// app.listen(process.env.PORT || 9876, function(){console.log(`listening on our port!`)})
