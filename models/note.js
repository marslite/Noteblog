const mongoose = require('mongoose');

const notedSchema = mongoose.Schema({
    username: String,
    userId: {type: mongoose.Schema.Types.ObjectId}

})


const noteSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photoUrl: String,
    noteTxt: String,
    noted: [notedSchema]
},{
    timestamps: true,
  }
)


module.exports = mongoose.model('Note', noteSchema);