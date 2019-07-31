const mongoose = require('mongoose');

const agostoCalendar = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dia: Number,
    actividad: String
});

module.exports = mongoose.model('CalendarAgosto', agostoCalendar);