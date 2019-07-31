const mongoose = require('mongoose');

const noviembreCalendar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dia: Number,
    actividad: String
});

module.exports = mongoose.model('CalendarNoviembre', noviembreCalendar);