const mongoose = require('mongoose');

const marzoCalendar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dia: Number,
    actividad: String
});

module.exports = mongoose.model('CalendarMarzo', marzoCalendar);