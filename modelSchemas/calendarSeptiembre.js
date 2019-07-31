const mongoose = require('mongoose');

const septiembreCalendar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dia: Number,
    actividad: String
});

module.exports = mongoose.model('CalendarSeptiembre', septiembreCalendar);