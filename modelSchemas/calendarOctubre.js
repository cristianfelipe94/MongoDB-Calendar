const mongoose = require('mongoose');

const octubreCalendar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dia: Number,
    actividad: String
});

module.exports = mongoose.model('CalendarOctubre', octubreCalendar);