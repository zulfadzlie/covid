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
let chart_countries = []

let chart_vaccinated_days_ago = []
let chart_cases_days_ago = []
let chart_countries_days_ago = []

let to_print_location = ""
let to_print_dates = ""
let to_print_vaccinated = ""
let to_print_cases = ""
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
        write(location, date, vaccinated, cases, "latest")

        let date_days_ago = data[country_code].data[data[country_code].data.length - days_ago].date
        let vaccinated_days_ago = findLatestVaccinated(country_data, days_ago)
        let cases_days_ago = data[country_code].data[data[country_code].data.length - days_ago].new_cases_smoothed_per_million
        write(location, date_days_ago, vaccinated_days_ago, cases_days_ago, "days_ago")
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

function write(location, date, vaccinated, cases, which_one) {
    if (which_one === "latest") {
        chart_vaccinated.push(vaccinated)
        chart_cases.push(cases)
        chart_countries.push(location)
        latest_date = date 
    } else {
        chart_vaccinated_days_ago.push(vaccinated)
        chart_cases_days_ago.push(cases)
        chart_countries_days_ago.push(location)
    }

    Plotly.newPlot('myDiv', data, layout, config)
    document.getElementById("date").textContent = latest_date
}

console.log(chart_countries)