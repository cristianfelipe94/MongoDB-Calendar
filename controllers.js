const Responses = require('./responses.js');
const fs = require('fs');
const mongoose = require('mongoose');

const CalendarEnero = require('./modelSchemas/calendarEnero');
const CalendarFebrero = require('./modelSchemas/calendarFebrero');
const CalendarMarzo = require('./modelSchemas/calendarMarzo');
const CalendarAbril = require('./modelSchemas/calendarAbril');
const CalendarMayo = require('./modelSchemas/calendarMayo');
const CalendarJunio = require('./modelSchemas/calendarJunio');
const CalendarJulio = require('./modelSchemas/calendarJulio');
const CalendarAgosto = require('./modelSchemas/calendarAgosto');
const CalendarSeptiembre = require('./modelSchemas/calendarSeptiembre');
const CalendarOctubre = require('./modelSchemas/calendarOctubre');
const CalendarNoviembre = require('./modelSchemas/calendarNoviembre');
const CalendarDiciembre = require('./modelSchemas/calendarDiciembre');

function calendarEneroAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarEnero.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarEnero.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarEnero({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarEnero.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarFebreroAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarFebrero.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarFebrero.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarFebrero({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarFebrero.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarMarzoAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarMarzo.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarMarzo.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarMarzo({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarMarzo.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarAbrilAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarAbril.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarAbril.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarAbril({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarAbril.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarMayoAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarMayo.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarMayo.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarMayo({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarMayo.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarJunioAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarJunio.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarJunio.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarJunio({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarJunio.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarJulioAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarJulio.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarJulio.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarJulio({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarJulio.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarAgostoAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarAgosto.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarAgosto.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarAgosto({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarAgosto.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarSeptiembreAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarSeptiembre.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarSeptiembre.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarSeptiembre({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarSeptiembre.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarOctubreAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarOctubre.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarOctubre.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarOctubre({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarOctubre.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarNoviembreAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarNoviembre.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarNoviembre.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarNoviembre({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarNoviembre.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};
function calendarDiciembreAction(dia, actividad = "This calendar date has no description.", actions, searchedId) {
    if(actions === "getAll") {
        return new Promise((resolve, reject) => {
            CalendarDiciembre.find()
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "getId") {
        return new Promise((resolve, reject) => {
            CalendarDiciembre.findById(searchedId)
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);    
            });
        });
    } else if (actions === "post") {
        return new Promise((resolve, reject) => {
            const processCalendarSchema = new CalendarDiciembre({
                "_id": new mongoose.Types.ObjectId(),
                "dia": dia,
                "actividad": actividad
            });
            processCalendarSchema.save()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(processCalendarSchema);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    } else if (actions === "delete") {
        return new Promise((resolve, reject) => {
            CalendarDiciembre.remove({_id: searchedId})
            .exec()
            .then(result => {
                console.log("Success sending calendar result: ", result);
                resolve(result);
            })
            .catch((err) => {
                console.log("Error has occured: ", err);
                resolve(result);  
            });
        });
    };
};

function getAllActivities (req, res, get) {
    // console.log("Month: ", get.matched[4].path);
    const dataQuery = get;
    const monthSearchable = dataQuery.matched[4].path;
    if(monthSearchable == 1) {
        calendarEneroAction("", "", "getAll", "");
    } else if (monthSearchable == 2) {
        calendarFebreroAction("", "", "getAll", "");
    } else if (monthSearchable == 3) {
        calendarMarzoAction("", "", "getAll", "");
    } else if (monthSearchable == 4) {
        calendarAbrilAction("", "", "getAll", "");
    } else if (monthSearchable == 5) {
        calendarMayoAction("", "", "getAll", "");
    } else if (monthSearchable == 6) {
        calendarJunioAction("", "", "getAll", "");
    } else if (monthSearchable == 7) {
        calendarJulioAction("", "", "getAll", "");
    } else if (monthSearchable == 8) {
        calendarAgostoAction("", "", "getAll", "");
    } else if (monthSearchable == 9) {
        calendarSeptiembreAction("", "", "getAll", "");
    } else if (monthSearchable == 10) {
        calendarOctubreAction("", "", "getAll", "");
    } else if (monthSearchable == 11) {
        calendarNoviembreAction("", "", "getAll", "");
    } else if (monthSearchable == 12) {
        calendarDiciembreAction("", "", "getAll", "");
    };
};

function getActivityById (req, res, get) {
    // console.log("Month: ", get.matched[4].path);
    const dataQuery = get;
    const idSearchable = dataQuery.matched[5].path;
    const monthSearchable = dataQuery.matched[4].path;
    if(monthSearchable == 1) {
        calendarEneroAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 2) {
        calendarFebreroAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 3) {
        calendarMarzoAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 4) {
        calendarAbrilAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 5) {
        calendarMayoAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 6) {
        calendarJunioAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 7) {
        calendarJulioAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 8) {
        calendarAgostoAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 9) {
        calendarSeptiembreAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 10) {
        calendarOctubreAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 11) {
        calendarNoviembreAction("", "", "getId", `${idSearchable}`);
    } else if (monthSearchable == 12) {
        calendarDiciembreAction("", "", "getId", `${idSearchable}`);
    };
};

function postActivity (req, res, get) {
    // console.log("Month: ", get.matched[4].path);
    const dataQuery = get;
    const monthSearchable = dataQuery.matched[4].path;
    const queryDay = dataQuery.query.day;
    const queryActivity = dataQuery.query.activity;
    if(monthSearchable == 1) {
        calendarEneroAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 2) {
        calendarFebreroAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 3) {
        calendarMarzoAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 4) {
        calendarAbrilAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 5) {
        calendarMayoAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 6) {
        calendarJunioAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 7) {
        calendarJulioAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 8) {
        calendarAgostoAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 9) {
        calendarSeptiembreAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 10) {
        calendarOctubreAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 11) {
        calendarNoviembreAction(`${queryDay}`, `${queryActivity}`, "post", "");
    } else if (monthSearchable == 12) {
        calendarDiciembreAction(`${queryDay}`, `${queryActivity}`, "post", "");
    };
};

function deleteActivityById (req, res, get) {
    // console.log("Month: ", get.matched[4].path);
    const dataQuery = get;
    const idSearchable = dataQuery.matched[5].path;
    const monthSearchable = dataQuery.matched[4].path;
    if(monthSearchable == 1) {
        calendarEneroAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 2) {
        calendarFebreroAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 3) {
        calendarMarzoAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 4) {
        calendarAbrilAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 5) {
        calendarMayoAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 6) {
        calendarJunioAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 7) {
        calendarJulioAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 8) {
        calendarAgostoAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 9) {
        calendarSeptiembreAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 10) {
        calendarOctubreAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 11) {
        calendarNoviembreAction("", "", "delete", `${idSearchable}`);
    } else if (monthSearchable == 12) {
        calendarDiciembreAction("", "", "delete", `${idSearchable}`);
    };
};

// function transferData (data) {
//     // console.log("To be transfer: ",data.enero);
//     data.diciembre.forEach(element => {
//         console.log("To be transfer: ",element);

//         function promiseSchema(queryDay, queryActivity) {
//             return new Promise((resolve, reject) => {
//                 const queryTemplate = dataTemplateCalendar(queryDay, queryActivity);
//                 console.log("Inside promise: ", queryTemplate);
//                 queryTemplate? resolve(queryTemplate) : reject("error");
//             });
//         };

//         promiseSchema(element.dia, element.actividad).then().catch((err) => {console.log("Schema error: ",err)});
//     });
// };

// const calendarJson = require('../database/calendar.json');
// transferData(calendarJson);

module.exports = {
    getAllActivities,
    getActivityById,
    postActivity,
    deleteActivityById
}