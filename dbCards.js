// This will outline the structure of the cards inside the database

import mongoose from 'mongoose';


const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
})

export default mongoose.model('cards', cardSchema);