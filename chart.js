

let trace1 = {
    x: chart_vaccinated,
    y: chart_cases,
    mode: 'markers+text',
    type: 'scatter',
    name: "Latest",
    text: chart_countries,
    textposition: 'right center',
    textfont: {
      family:  'Raleway, sans-serif'
    },
    marker: {
        size: 12,
        color: "#0075FF"
    }
}

let trace2 = {
    x: chart_vaccinated_days_ago,
    y: chart_cases_days_ago,
    mode: 'markers+text',
    type: 'scatter',
    name: days_ago + " days ago",
    text: chart_countries_days_ago,
    textposition: 'right center',
    textfont: {
      family:  'Raleway, sans-serif'
    },
    marker: {
        size: 12,
        color: "rgb(200, 200, 200)"
    }
}

let trace3 = {
    x: chart_vaccinated,
    y: chart_deaths,
    mode: 'markers+text',
    type: 'scatter',
    name: "Latest",
    text: chart_countries,
    textposition: 'right center',
    textfont: {
      family:  'Raleway, sans-serif'
    },
    marker: {
        size: 12,
        color: "#0075FF"
    }
}

let trace4 = {
    x: chart_vaccinated_days_ago,
    y: chart_deaths_days_ago,
    mode: 'markers+text',
    type: 'scatter',
    name: days_ago + " days ago",
    text: chart_countries_days_ago,
    textposition: 'right center',
    textfont: {
      family:  'Raleway, sans-serif'
    },
    marker: {
        size: 12,
        color: "rgb(200, 200, 200)"
    }
}


let chart_data = [ trace1, trace2 ]

let chart2_data = [ trace3, trace4 ]

let layout = {
    xaxis: {
        title: "People fully vaccinated per 100",
        range: [ 0, 100 ],
        dtick: 10
    },

    yaxis: {
        title: "New cases smoothed per million",
        dtick: 100
    },

    margin: {
        t: 0,
        r: 0,
        l: 50,
        b: 50
    },

    legend: {
        "orientation": "h",
        bordercolor: "#E2E2E2",
        borderwidth: 1,
        x: 0.5,
        y: 1.1,
        xanchor: "center"
    }
}

let layout2 = {
    xaxis: {
        title: "People fully vaccinated per 100",
        range: [ 0, 100 ],
        dtick: 10
    },

    yaxis: {
        title: "New deaths smoothed per million",
        dtick: 1
    },

    margin: {
        t: 0,
        r: 0,
        l: 50,
        b: 50
    },

    legend: {
        "orientation": "h",
        bordercolor: "#E2E2E2",
        borderwidth: 1,
        x: 0.5,
        y: 1.1,
        xanchor: "center"
    }
}

let config = {
    responsive: true,
    displayModeBar: false
}

let config2 = {
    responsive: true,
    displayModeBar: false
}