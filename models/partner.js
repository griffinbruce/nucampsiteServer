const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//set expected document structure
const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    }
    //set mongoose to implement createdAt and updatedAt timestamps
}, {
    timestamps: true
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;