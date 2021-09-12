var trace1 = {
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
        color: "#04AA6D"
    }
}

var trace2 = {
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
        color: "rgb(128, 128, 128)"
    }
}

var data = [ trace1, trace2 ]
  
var layout = {
    xaxis: {
        title: "People fully vaccinated per 100",
        range: [ 0, 100 ],
        dtick: 10
    },

    yaxis: {
        title: "New cases smoothed per million",
        dtick: 100
        // range: [0, 700]
    },

    legend: {
        // "orientation": "h",
        x: 0.01,
        y: 0.99
    }
}

var config = {
    responsive: true,
    displayModeBar: false
}

// Plotly.newPlot('myDiv', data, layout)