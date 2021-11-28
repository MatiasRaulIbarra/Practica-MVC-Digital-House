const path = require('path')

const controller = {
    index:(req, res)=>{
        res.sendFile(path.join(__dirname, '../views/index.html'))
    },
    contacto:(req, res)=>{
        res.sendFile(path.join(__dirname, '../views/contactos.html'))
    },
    products:(req, res)=>{
        res.sendFile(path.join(__dirname, '../views/products.html'))
    }
}

module.exports = controller;