// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var table = document.getElementById("ufo-table")

// Create table
tableData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// Button and forms
var button = d3.select("#filter-btn");
var form = d3.select("#form");
var form1 = d3.select("#form1");
var form2 = d3.select("#form2");
var form3 = d3.select("#form3");
var form4 = d3.select("#form4");

button.on("click", runEnter);
form.on("submit",runEnter);
form1.on("submit",runEnter);
form2.on("submit",runEnter);
form3.on("submit",runEnter);
form4.on("submit",runEnter);

// Filter function
function runEnter() {
    d3.event.preventDefault();

// Clear table
    while (table.rows.length > 1) {
        table.deleteRow(1);
    };

// Date filter
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);

    if (inputValue == "") {filteredData = tableData};

// City filter
    var inputElement = d3.select("#city");
    var inputValue = inputElement.property("value");

    var filteredData1 = filteredData.filter(sighting => sighting.city == inputValue);

    if (inputValue == "") {filteredData1 = filteredData};

// State filter
    var inputElement = d3.select("#state");
    var inputValue = inputElement.property("value");

    var filteredData2 = filteredData1.filter(sighting => sighting.state == inputValue);

    if (inputValue == "") {filteredData2 = filteredData1};

// Country filter
    var inputElement = d3.select("#country");
    var inputValue = inputElement.property("value");

    var filteredData3 = filteredData2.filter(sighting => sighting.country == inputValue);

    if (inputValue == "") {filteredData3 = filteredData2};

// Shape filter
    var inputElement = d3.select("#shape");
    var inputValue = inputElement.property("value");

    var filteredData4 = filteredData3.filter(sighting => sighting.shape == inputValue);
    if (inputValue == "") {
        filteredData4 = filteredData3
        filteredData4.forEach((report) => {
            var row = tbody.append("tr");
            Object.entries(report).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
        });
    }
    else {
        filteredData4.forEach((report) => {
            var row = tbody.append("tr");
            Object.entries(report).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
        });
    };
};

