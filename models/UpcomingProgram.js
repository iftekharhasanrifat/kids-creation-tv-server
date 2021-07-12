const mongoose = require('mongoose');

const UpcomingProgramSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    photo : {
        type: String,
        required: true,
    }
},{timestamps:true})

module.exports = mongoose.model("UpcomingProgram",UpcomingProgramSchema);