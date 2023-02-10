// Our labels along the x-axis
var years = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
// For drawing the lines
var africa1911 = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
var africa1931 = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];

// setup
const data = {
  labels: years,
  datasets: [
    {
      data: africa1911,
      label: "1911",
      borderColor: "#3e95cd",
      fill: false,
    },
    {
      data: africa1931,
      label: "1931",
      borderColor: "#3e95cd",
      fill: false,
    },
    {
      data: africa1911,
      label: "1901",
      borderColor: "#3e95cd",
      fill: false,
    },
    {
      data: africa1931,
      label: "1933",
      borderColor: "#3e95cd",
      fill: false,
    },
    {
      data: africa1911,
      label: "1981",
      borderColor: "#3e95cd",
      fill: false,
    },
    {
      data: africa1931,
      label: "1991",
      borderColor: "#3e95cd",
      fill: false,
    },
  ],
};

// config
const config = {
  type: "line",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);
