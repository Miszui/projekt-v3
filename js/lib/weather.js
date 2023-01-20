import Chart from 'chart.js/auto';
import axios from "axios";

const DEFAULT_LAT = '0';
const DEFAULT_LONG = '0';

let chart = null;

export const loadData = async (lat, long) => {
    lat = lat ?? DEFAULT_LAT;
    long = long ?? DEFAULT_LONG;
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`;

    console.log(lat, long, apiUrl);

    // TODO: show loader

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        const graphEl = document.getElementById('js-graph');

        if (chart != null) {
            chart.destroy();
        }

        // TODO: customize chart
        chart = new Chart(graphEl, {
            type: 'line',
            data: {
                labels: data['hourly']['time'].map(date => (new Date(date)).toLocaleTimeString()),
                datasets: [
                    { label: 'temp.', data: data['hourly']['temperature_2m'] }
                ],
            }
        });
    } catch (exception) {
        console.log(exception);
    }

    // TODO: hide loader
}

export default async () => {
    document.getElementById('js-fetch-weather').addEventListener('click', () => {
        loadData();
    });
};
