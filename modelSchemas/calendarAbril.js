const mongoose = require('mongoose');

const abrilCalendar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dia: Number,
    actividad: String
});

module.exports = mongoose.model('CalendarAbril', abrilCalendar);