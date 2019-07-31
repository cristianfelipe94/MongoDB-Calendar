const mongoose = require('mongoose');

const eneroCalendar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dia: Number,
    actividad: String
});

module.exports = mongoose.model('CalendarEnero', eneroCalendar);