const Responses = require('./responses.js');
const fs = require('fs');

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

const mongoose = require('mongoose');

function errorHandler(code, type, data, message) {
    return {
        "Error Code": code,
        "Error Type": type,
        "Request": data,
        "Error Message": message,
    }
}

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

function getAllActivities (req, res, get) {
    console.log("Get from controller: ", get);
    calendarEneroAction("", "", "getAll", "");
};

function getActivityById (req, res, get) {
    const dataQuery = get;
    const idSearchable = dataQuery.matched[3].path;
    calendarEneroAction("", "", "getId", `${idSearchable}`);
};

function postActivity (req, res, get) {
    const dataQuery = get;
    const queryDay = dataQuery.query.day;
    const queryActivity = dataQuery.query.activity;
    calendarEneroAction(`${queryDay}`, `${queryActivity}`, "post", "");
};

function deleteActivityById (req, res, get) {
    const dataQuery = get;
    const idSearchable = dataQuery.matched[3].path;
    calendarEneroAction("", "", "delete", `${idSearchable}`);
};






// function postCalendar(req, res, get) {
//     const dataQuery = get;
//     const keyObject = Object.keys(dataQuery.query);
//     const keysChecker = checkKeys(keyObject);
//     if (!dataQuery) {
//         const errObject = errorHandler(400, 'Bad Request', dataQuery, `New data is NOT correct, please make sure you are filling all the requested information.`);
//         Responses.SendResponse(res, errObject);
//         Responses.BadRequest(res, new Error(`New data is NOT correct, please make sure you are filling all the requested information.`));
//     } else if (!dataQuery.query) {
//         const errObject = errorHandler(400, 'Bad Request', dataQuery.query, `New data is NOT correct, please submit a new data query.`);
//         Responses.SendResponse(res, errObject);
//         Responses.BadRequest(res, new Error(`New data is NOT correct, please submit a name for this brand.`));
//     } else if (!keysChecker) {
//         const errObject = errorHandler(400, 'Bad Request', dataQuery.query, `New data is NOT correct, please use the Keys: "day" or "activity" , to submit new information.`);
//         Responses.SendResponse(res, errObject);
//         Responses.BadRequest(res, new Error(`New data is NOT correct, please use the Keys: "name" or "description" , to submit new information.`));
//     } else if (dataQuery.query) {

//         function promiseSchema(queryDay, queryActivity) {
//             return new Promise((resolve, reject) => {
//                 const queryTemplate = dataTemplateCalendar(queryDay, queryActivity);
//                 console.log("Inside promise: ", queryTemplate);
//                 queryTemplate? resolve(queryTemplate) : reject("error");
//             });
//         };

//         promiseSchema(dataQuery.query.day, dataQuery.query.activity)
//         .then((promiseSchema) => {console.log("Promised schema: ",promiseSchema)})
//         .catch((err) => {console.log("Schema error: ",err)});
//     };
// };

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

function deleteCarById(req, res, get) {
    const carsJson = require('../database/cars.json');
    const dataId = +get.matched[3].path;
    const findData = carsJson.carsData.find(element => element.id === dataId);
    if (findData) {

        // var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);
        const indexToBeSpliced = carsJson.carsData.indexOf(findData);
        const splicedElement = carsJson.carsData.splice(indexToBeSpliced, 1);
        // console.log("data to be spliced: ", splicedElement);

        // Use:
        // Parse data to an String.
        const backToJson = JSON.stringify(carsJson);

        function promisedData(data) {
            return new Promise((resolve, reject) => {
                fs.writeFile('../database/cars.json', data, 'utf8', (err) => {
                    !err ? resolve(data) : reject("Something went wrong: ", err);
                });
            });
        }
        return promisedData(backToJson).then((promisedData) => {Responses.SendResponse(res, promisedData)}).catch((err) => Responses.SendResponse(res, err));
    } else {
        const errObject = errorHandler(400, 'Bad Request', dataId, `Brand Id: ${dataId} not found, please use a Value from 1 to ${carsJson.carsData.length}`);
        Responses.SendResponse(res, errObject);
        Responses.BadRequest(res, new Error(`Brand Id: ${dataId} not found, please use a Value from 1 to ${carsJson.carsData.length}`));
    };
}

module.exports = {
    getAllActivities,
    getActivityById,
    postActivity,
    deleteActivityById
}