const jwt = require('jsonwebtoken')
const models = require('../models')
const user = models.users

exports.login = (req, res) =>{
    const email = req.body.email
    const password = req.body.password


    user.findOne({where: {email, password}}).then(user=>{

        if(user){
            const token = "Bearer " + jwt.sign({ userId: user.id}, 'my-secret-key')
            res.send({
                name:user.name,
                id:user.id,
                email,
                token
            })
        }else{
            res.send({
                error:true,
                message: "Email yang anda masukkan salah!"
            })
        }
    })
 }

 exports.register = ( req, res ) => {
    const token = jwt.sign({ email: req.body.email}, 'my-secret-key')
    const email = req.body.email
    const name = req.body.name

    user.findOrCreate({
        where: {email: req.body.email},
        defaults:{
            password: req.body.password,
            name: name
        }
    }).then( ([user, created]) => {
        if(created) {
            res.send({
                message: 'success',
                email,
                name,
                token
            })
        }else{
            res.send({
                message: "Email yang anda masukkan sudah digunakan"
            })
        }
    })

}


//get semua user
exports.getUser = (req, res) => {
    user.findAll().then(item=>res.send(item));
}