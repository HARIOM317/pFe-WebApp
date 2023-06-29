var ctx = document.getElementById("myChart").getContext("2d");
// Creating Chart Class Object
var myChart = new Chart(ctx, {
    // Type of Chart - bar, line, pie, doughnut, radar, polarArea
    type: "line",

    // The data for our dataset
    data: {
        // Data Labels
        labels: ["Total Assigned Cases", "Solved Cases", "Current Assigned Case", "Character Status", "Present/Active Percentage", "Absent Percentage"],

        datasets: [
            // Data Set 1
            {
                //  Chart Label
                label: "Officer Status",

                // Actual Data
                data: [10, 8, 100, 85, 90, 10],

                // Background Color
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],

                // Border Color
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],

                // Border Width
                borderWidth: 1,
            },

            // Data Set 2
            {
                //  Chart Label
                label: "Current Progress",

                // Actual Data
                data: [0, 0, 60, 0, 0, 0],

                // Background Color
                backgroundColor: [
                    "rgba(255, 97, 132, 0.2)",
                    "rgba(54, 16, 235, 0.2)",
                    "rgba(255, 26, 86, 0.2)",
                    "rgba(75, 12, 192, 0.2)",
                    "rgba(153, 2, 255, 0.2)",
                    "rgba(255, 19, 64, 0.2)",
                ],
            },
        ],
    },

    // Configuration options go here
    options: {
        // Set Responsiveness By Default Its True
        // When Its True Canvas Width Height won't work
        responsive: false,

        // Set Padding
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },

        // Configure ToolTips
        tooltips: {
            enabled: true, // Enable/Disable ToolTip By Default Its True
            backgroundColor: "#0ea9ff", // Set Tooltip Background Color
            titleFontFamily: "Georgia", // Set Tooltip Title Font Family
            titleFontSize: 30, // Set Tooltip Font Size
            titleFontStyle: "italic",
            titleFontColor: "#f2efcd",
            titleAlign: "center",
            titleSpacing: 3,
            titleMarginBottom: 50,
            bodyFontFamily: "Georgia",
            bodyFontSize: 20,
            bodyFontStyle: "italic",
            bodyFontColor: "white",
            bodyAlign: "center",
            bodySpacing: 3,
        },

        // Chart Title
        title: {
            display: true,
            text: "Officer Data Chart",
            position: "bottom",
            fontSize: 25,
            fontFamily: "Georgia",
            fontColor: "#767dff",
            fontStyle: "italic",
            padding: 15,
            lineHeight: 5,
        },

        animation: {
            duration: 5000,
            easing: "easeInOutBounce",
        },
    },
});