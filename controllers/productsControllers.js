const path = require('path')

const controller = {
    product:(req, res)=>{
        let idProduct = req.params.id
        res.send(`producto con id ${idProduct}`)
    }
}

module.exports = controller;