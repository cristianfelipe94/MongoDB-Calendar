const dataGetterAction = document.getElementById("js-calendar-title");

function getAllData () {
    fetch('http://localhost:8000/api/v1/calendar/month/1')
    .then(function (data) {console.log("Server Side data: ", data)})
    .catch((err) => {console.log("Error client side: ", err);});
};

dataGetterAction.addEventListener("click", getAllData());