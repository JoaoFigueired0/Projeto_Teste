// Função para buscar dados de múltiplas criptomoedas da API de Preço de Criptomoedas
async function fetchCryptoData() {
    const coins = ['bitcoin', 'ethereum', 'litecoin']; // Lista de moedas a serem buscadas
    const prices = [];
    const labels = ['Bitcoin', 'Ethereum', 'Litecoin']; // Rótulos para o gráfico

    try {
        for (const coin of coins) {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
            const data = await response.json();
            prices.push(data.market_data.current_price.usd); // Adiciona o preço da moeda em USD no array de preços
        }

        // Chama a função para criar o gráfico com as moedas
        createChart('chart2', labels, prices, 'Preço das Criptomoedas (USD)', 'line');
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
    }
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
                    }
                }
            },
        },
    });
}

window.onload = function () {
    fetchCryptoData();
};
