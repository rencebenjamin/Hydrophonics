function createChart(canvasId, percentage) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.error(`Canvas ID '${canvasId}' not found!`);
    return;
  }

  const ctx = canvas.getContext("2d");

  return new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [percentage, 100 - percentage], // Percentage value
          backgroundColor: ["#36A2EB", "#E5E7EB"], // Blue for actual value, Light Gray for remaining
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "80%", // Controls doughnut size
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
    },
    plugins: [
      {
        afterDraw: function (chart) {
          const { width, height, ctx } = chart;

          ctx.restore();
          const fontSize = (height / 6).toFixed(2);
          ctx.font = fontSize + "px Arial";
          ctx.textBaseline = "middle";

          const text = percentage + "%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillStyle = "#3D4852";
          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
  });
}

// Initialize Charts with Correct IDs and Values (Ensure IDs exist in HTML)
const charts = {
  phSensor: createChart("phSensor", 60),
  ecSensor: createChart("ecSensor", 75),
  lightIntensitySensor: createChart("lightIntensitySensor", 80),
  tempSensor: createChart("tempSensor", 50),
  humiditySensor: createChart("humiditySensor", 40),
  totalDissolvedSolids: createChart("totalDissolvedSolids", 65),
  waterTempSensor: createChart("waterTempSensor", 55),
  waterLvlSensor: createChart("waterLvlSensor", 30),
};
