const mongoose = require('mongoose');

const febreroCalendar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dia: Number,
    actividad: String
});

module.exports = mongoose.model('CalendarFebrero', febreroCalendar);