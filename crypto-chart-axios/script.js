// 🧠 STEP 1: Create an Axios helper instance
// - Write: const api = axios.create({...})
// - Inside axios.create(), pass an object with:
//   • Key: baseURL
//   • Value: "https://coinbase.com/api/v2/assets/prices"

const api = axios.create({
  baseURL: "https://coinbase.com/api/v2/assets/prices",
});

// 🧠 STEP 2: Make an array called "coins"
// - Store the IDs of the cryptocurrencies you want to track (e.g., "bitcoin", "ethereum").

const coins = ["bitcoin", "ethereum"];

// 🧠 STEP 3: Write a function called "createChart"
// - Parameters: (Chart, coinId, labels, data, symbol)
// - Inside this function:
//   1. Use document.getElementById() to select the container where charts will go.
//   2. Use document.createElement("canvas") to make a canvas element.
//   3. Set the canvas id to coinId and append it to the container.
//   4. Use new Chart(canvas, {...}) to create a line chart.
//   5. Pass in labels (X-axis) and data (Y-axis) from the API response.
//   6. Use symbol for the dataset label and give it a color (e.g., blue).

function createChart(Chart, coinId, labels, data, symbol) {
  const chartSection = document.getElementById("chartSection");
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", coinId);
  chartSection.appendChild(canvas);
  new Chart(canvas, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: symbol,
          data: data,
          borderColor: "blue",
        },
      ],
    },
  });
}

// 🧠 STEP 4: Write an async function called "makeCharts"
// - Inside this function:
//   1. Select the chart container and set innerHTML to a loader (e.g., "<div class='loader'></div>").
//   2. Use Promise.all() with coins.map() to fetch all coin data at once.
//   3. For each coin inside map():
//      • Call api.get("/" + coin).
//      • Extract response.data.data.prices.hour.prices and use slice(0, 24).
//      • Map timestamps to readable times using new Date(timestamp * 1000).toLocaleTimeString().
//      • Map prices to numbers using Number(price).
//      • Return an object containing coinId, labels, data, and symbol.
//   4. After fetching all data, clear the loader (innerHTML = "").
//   5. Loop over the returned data with forEach() and call createChart() for each coin.

async function makeCharts() {
  const chartSection = document.getElementById("chartSection");
  chartSection.innerHTML = `<div class='loader'></div>`;

  // call with promise on bitcoin and etherium
  // returns an array with [{coinId, time array, price array, symbol}, {coinId, time array, price array, symbol}]
  const results = await Promise.all(
    coins.map(async (coin) => {
      // api.get on the coin
      let response;
      try {
        response = await api.get("/" + coin);
      } catch (error) {
        console.log("Response error: ", error);
        return;
      }

      // filter out the response data
      const data = response?.data?.data?.prices?.hour?.prices || [];

      // go through each time data and perform conversions
      const timestamps = data
        .map(([, timestamp]) => new Date(timestamp * 1000).toLocaleTimeString())
        .reverse();

      // go through each price data and make it a number
      const prices = data.map(([price]) => Number(price)).reverse();

      // define symbol
      const symbol = coin === "bitcoin" ? "BTC" : "ETH";
      return { coin, timestamps, prices, symbol };
    })
  );

  chartSection.innerHTML = "";
  results.forEach((coin) =>
    createChart(Chart, coin.coin, coin.timestamps, coin.prices, coin.symbol)
  );
}

makeCharts();
setInterval(makeCharts, 10000);

// 🧠 STEP 5: Call makeCharts() once to display charts immediately.
// - Use setInterval(makeCharts, 10000) to refresh every 10 seconds (10,000ms).

// ✅ IMPORTANT:
// - Use the given variable names exactly: api, coins, createChart, makeCharts.
// - Use the methods: axios.create, api.get, Promise.all, .map(), .forEach(), document.getElementById, document.createElement.
// - Follow these steps carefully to complete the project.
