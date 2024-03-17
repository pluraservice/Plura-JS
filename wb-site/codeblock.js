const options = {
    dataLabels: {
        enabled: true,
        style: {
            cssClass: 'text-xs text-white font-medium'
        },
    },
    grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
            left: 16,
            right: 16,
            top: -26
        },
    },
    series: [
        {
            name: "Jquery v3.6.0",
            data: [0.01527, 0.01227, 0.01103, 0.02047],
            color: "#FBD500",
        },
        {
            name: "Plura JS v.0.0.1",
            data: [0.0081, 0.0050, 0.0025, 0.0037],
            color: "#7E3BF2",
        },
    ],
    chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        enabled: true,
        x: {
            show: false,
        },
    },
    legend: {
        show: true
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
    },
    stroke: {
        width: 6,
    },
    xaxis: {
        categories: ["", "", "", ""],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        labels: {
            formatter: function (value) {
                return value + "ms";
            }
        }
    },
}

if (document.getElementById("data-labels-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("data-labels-chart"), options);
    chart.render();
}