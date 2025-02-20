function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    if (!dateTimeElement) return;

    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Function to show sensor details
function showDetails(sensorId) {
    const sensorDetails = document.getElementById(`${sensorId}Details`);
    const sensorStatus = document.getElementById(`${sensorId}Status`);

    // Toggle visibility of details
    if (sensorDetails.style.display === "none") {
        sensorDetails.style.display = "block";
    } else {
        sensorDetails.style.display = "none";
    }

    // Simulate updating sensor data
    if (sensorId === "phSensor") {
        updatePhSensorData();
    }
}

// Function to simulate pH sensor data
function updatePhSensorData() {
    const phLevel = document.getElementById("phLevel");
    const phNitrogen = document.getElementById("phNitrogen");
    const phPhosphorus = document.getElementById("phPhosphorus");
    const phPotassium = document.getElementById("phPotassium");

    // Simulate random values for demonstration
    const randomPH = (Math.random() * 4 + 6).toFixed(2); // pH between 6.0 and 10.0
    const randomNitrogen = Math.floor(Math.random() * 100); // Nitrogen between 0 and 100 ppm
    const randomPhosphorus = Math.floor(Math.random() * 100); // Phosphorus between 0 and 100 ppm
    const randomPotassium = Math.floor(Math.random() * 100); // Potassium between 0 and 100 ppm

    // Update the card content
    phLevel.textContent = randomPH;
    phNitrogen.textContent = `${randomNitrogen} ppm`;
    phPhosphorus.textContent = `${randomPhosphorus} ppm`;
    phPotassium.textContent = `${randomPotassium} ppm`;
}

// Call this function periodically to simulate real-time

setInterval(updatePhSensorData, 10000); // Update every 10 seconds
// Function to show sensor details
function showDetails(sensorId) {
    const sensorDetails = document.getElementById(`${sensorId}Details`);
    const sensorStatus = document.getElementById(`${sensorId}Status`);

    // Toggle visibility of details
    if (sensorDetails.style.display === "none") {
        sensorDetails.style.display = "block";
    } else {
        sensorDetails.style.display = "none";
    }

    // Simulate updating sensor data
    if (sensorId === "phSensor") {
        updatePhSensorData();
    } else if (sensorId === "ecSensor") {
        updateEcSensorData();
    } else if (sensorId === "lightSensor") {
        updateLightSensorData();
    } else if (sensorId === "tempSensor") {
        updateTempSensorData();
    } else if (sensorId === "humiditySensor") {
        updateHumiditySensorData();
    } else if (sensorId === "doSensor") {
        updateDoSensorData();
    } else if (sensorId === "waterTempSensor") {
        updateWaterTempSensorData();
    }

    // Update summary
    updateSummary();
}

// Function to simulate pH sensor data
function updatePhSensorData() {
    const phLevel = document.getElementById("phLevel");
    const phNitrogen = document.getElementById("phNitrogen");
    const phPhosphorus = document.getElementById("phPhosphorus");
    const phPotassium = document.getElementById("phPotassium");

    // Simulate random values for demonstration
    const randomPH = (Math.random() * 4 + 6).toFixed(2); // pH between 6.0 and 10.0
    const randomNitrogen = Math.floor(Math.random() * 100); // Nitrogen between 0 and 100 ppm
    const randomPhosphorus = Math.floor(Math.random() * 100); // Phosphorus between 0 and 100 ppm
    const randomPotassium = Math.floor(Math.random() * 100); // Potassium between 0 and 100 ppm

    // Update the card content
    phLevel.textContent = randomPH;
    phNitrogen.textContent = `${randomNitrogen} ppm`;
    phPhosphorus.textContent = `${randomPhosphorus} ppm`;
    phPotassium.textContent = `${randomPotassium} ppm`;
}

// Function to simulate EC sensor data
function updateEcSensorData() {
    const ecLevel = document.getElementById("ecLevel");
    const ecSalinity = document.getElementById("ecSalinity");
    const ecTDS = document.getElementById("ecTDS");

    // Simulate random values for demonstration
    const randomEC = (Math.random() * 2).toFixed(2); // EC between 0 and 2 mS/cm
    const randomSalinity = (Math.random() * 1).toFixed(2); // Salinity between 0 and 1 ppt
    const randomTDS = Math.floor(Math.random() * 1000); // TDS between 0 and 1000 ppm

    // Update the card content
    ecLevel.textContent = `${randomEC} mS/cm`;
    ecSalinity.textContent = `${randomSalinity} ppt`;
    ecTDS.textContent = `${randomTDS} ppm`;
}

// Function to simulate Light Intensity sensor data
function updateLightSensorData() {
    const lightLevel = document.getElementById("lightLevel");
    const lightUV = document.getElementById("lightUV");
    const lightIR = document.getElementById("lightIR");

    // Simulate random values for demonstration
    const randomLight = Math.floor(Math.random() * 2000); // Light between 0 and 2000 lux
    const randomUV = Math.floor(Math.random() * 10); // UV Index between 0 and 10
    const randomIR = Math.floor(Math.random() * 500); // IR between 0 and 500 W/m²

    // Update the card content
    lightLevel.textContent = `${randomLight} lux`;
    lightUV.textContent = randomUV;
    lightIR.textContent = `${randomIR} W/m²`;
}

// Function to simulate Temperature sensor data
function updateTempSensorData() {
    const tempValue = document.getElementById("tempValue");
    const tempMin = document.getElementById("tempMin");
    const tempMax = document.getElementById("tempMax");

    // Simulate random values for demonstration
    const randomTemp = (Math.random() * 20 + 10).toFixed(1); // Temperature between 10 and 30°C
    const randomMin = (randomTemp - 2).toFixed(1); // Min temp
    const randomMax = (randomTemp + 2).toFixed(1); // Max temp

    // Update the card content
    tempValue.textContent = `${randomTemp}°C`;
    tempMin.textContent = `${randomMin}°C`;
    tempMax.textContent = `${randomMax}°C`;
}

// Function to simulate Humidity sensor data
function updateHumiditySensorData() {
    const humidityValue = document.getElementById("humidityValue");
    const humidityDewPoint = document.getElementById("humidityDewPoint");
    const humidityAbsolute = document.getElementById("humidityAbsolute");

    // Simulate random values for demonstration
    const randomHumidity = Math.floor(Math.random() * 100); // Humidity between 0 and 100%
    const randomDewPoint = (Math.random() * 20 + 10).toFixed(1); // Dew point between 10 and 30°C
    const randomAbsolute = (Math.random() * 20).toFixed(1); // Absolute humidity between 0 and 20 g/m³

    // Update the card content
    humidityValue.textContent = `${randomHumidity}%`;
    humidityDewPoint.textContent = `${randomDewPoint}°C`;
    humidityAbsolute.textContent = `${randomAbsolute} g/m³`;
}

// Function to simulate Dissolved Oxygen sensor data
function updateDoSensorData() {
    const doLevel = document.getElementById("doLevel");
    const doSaturation = document.getElementById("doSaturation");
    const doTemp = document.getElementById("doTemp");

    // Simulate random values for demonstration
    const randomDO = (Math.random() * 10).toFixed(1); // DO between 0 and 10 mg/L
    const randomSaturation = Math.floor(Math.random() * 100); // Saturation between 0 and 100%
    const randomTemp = (Math.random() * 20 + 10).toFixed(1); // Temperature between 10 and 30°C

    // Update the card content
    doLevel.textContent = `${randomDO} mg/L`;
    doSaturation.textContent = `${randomSaturation}%`;
    doTemp.textContent = `${randomTemp}°C`;
}
function resetGrafana() {
    var iframe = document.getElementById("grafanaFrame");
    var src = iframe.src; 
    iframe.src = ""; // Clear first to force refresh
    setTimeout(() => {
        iframe.src = src; // Reload original URL
    }, 100);
}
// Function to simulate Water Temperature sensor data
