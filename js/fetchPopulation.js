// Função para buscar dados da API de População por País
async function fetchPopulationData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    const countries = data.map(country => country.name.common);
    const populations = data.map(country => country.population);

    createChart('chart1', countries, populations, 'População por País', 'bar');
}

// Função para criar gráficos
function createChart(chartId, labels, data, label, chartType) {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(0, 0, 0)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    ticks: {
                        color: 'rgba(255, 99, 132, 1)', // Cor dos números do eixo X
                    },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'rgba(54, 162, 235, 1)',
                    },
                },
            },
        }
    });
}
s
fetchPopulationData();
