
let json_data = []

let countries = [
    "MYS", 
    "BRN", 
    "IDN", 
    "PHL", 
    "SGP", 
    "THA", 
    "VNM"
]

let chart_vaccinated = []
let chart_cases = []
let chart_deaths = []
let chart_countries = []

let chart_vaccinated_days_ago = []
let chart_cases_days_ago = []
let chart_deaths_days_ago = []
let chart_countries_days_ago = []

let latest_date =""

let adjust = 1
let days_ago = 100

let requestURL = 'https://covid.ourworldindata.org/data/owid-covid-data.json'
let request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function() {
    const data = request.response

    for (i = 0; i < countries.length; i++) {
        let country_code = countries[i]
        let country_data = data[country_code]
        let location = country_data.location

        let date = data[country_code].data[data[country_code].data.length - adjust].date
        let vaccinated = findLatestVaccinated(country_data, adjust)
        let cases = data[country_code].data[data[country_code].data.length - adjust].new_cases_smoothed_per_million
        let deaths = data[country_code].data[data[country_code].data.length - adjust].new_deaths_smoothed_per_million
        write(location, date, vaccinated, cases, deaths, "latest")

        let date_days_ago = data[country_code].data[data[country_code].data.length - days_ago].date
        let vaccinated_days_ago = findLatestVaccinated(country_data, days_ago)
        let cases_days_ago = data[country_code].data[data[country_code].data.length - days_ago].new_cases_smoothed_per_million
        let deaths_days_ago = data[country_code].data[data[country_code].data.length - days_ago].new_deaths_smoothed_per_million
        write(location, date_days_ago, vaccinated_days_ago, cases_days_ago, deaths_days_ago,"days_ago")
        json_data[country_code] = country_data
    }    
}

function findLatestVaccinated(country_data, start_date) {
    let start = start_date

    while (country_data.data[country_data.data.length - start].people_fully_vaccinated_per_hundred === undefined) {
         start = start + 1
    }

    vaccinated = country_data.data[country_data.data.length - start].people_fully_vaccinated_per_hundred

    return vaccinated
}

function write(location, date, vaccinated, cases, deaths, which_one) {
    if (which_one === "latest") {
        chart_vaccinated.push(vaccinated)
        chart_cases.push(cases)
        chart_deaths.push(deaths)
        chart_countries.push(location)
        latest_date = date 
    } else {
        chart_vaccinated_days_ago.push(vaccinated)
        chart_cases_days_ago.push(cases)
        chart_deaths_days_ago.push(deaths)
        chart_countries_days_ago.push(location)
    }

    Plotly.newPlot('myDiv', chart_data, layout, config)
    // Plotly.newPlot('myDiv2', chart2_data, layout2, config2)
    document.getElementById("date").textContent = latest_date
}

// console.log(json_data)

// function radioSelected(selected) {
//     if (selected === "Deaths") {
//         document.getElementById("chart-container2").classList.remove("hidden")
//         document.getElementById("chart-container").classList.add("hidden")

//     } else {
//         document.getElementById("chart-container").classList.remove("hidden")
//         document.getElementById("chart-container2").classList.add("hidden")
//     }
// }

function radioSelected(selected) {
    if (selected === "Deaths") {
        Plotly.newPlot('myDiv', chart2_data, layout2, config2)
    } else {
        Plotly.newPlot('myDiv', chart_data, layout, config)
    }
}