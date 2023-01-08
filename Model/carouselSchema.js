const mongoose = require('mongoose');



const carouselSchema = mongoose.Schema({

    imageURL: {type:String},
    userEmail: {type: String},
    hotelname : {type: String}

}) 


const carouselModel = mongoose.model('carouselData',carouselSchema);

module.exports = carouselModel;