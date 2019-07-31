const mongoose = require('mongoose');

const diciembreCalendar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dia: Number,
    actividad: String
});

module.exports = mongoose.model('CalendarDiciembre', diciembreCalendar);