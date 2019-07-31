const mongoose = require('mongoose');

const mayoCalendar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dia: Number,
    actividad: String
});

module.exports = mongoose.model('CalendarMayo', mayoCalendar);