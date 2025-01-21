async function fetchCharacterData() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    // Contar os gêneros dos personagens
    const genderCount = data.results.reduce((acc, character) => {
        acc[character.gender] = (acc[character.gender] || 0) + 1;
        return acc;
    }, {});

    const genders = Object.keys(genderCount);  // Gêneros únicos
    const genderData = Object.values(genderCount);  // Quantidades por gênero

    createChart('chart4', genders, genderData, 'Distribuição de Gênero', 'line');
}

// Função para criar gráficos
function createChart(chartId, labels, data, label, chartType) {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
        type: chartType,
        data: {
            labels: {
                color: 'blue',  // Cor da legenda
                font: {
                    size: 14,  // Tamanho da fonte
                    family: 'Arial',  // Tipo de fonte
                    weight: 'bold',  // Peso da fonte
                },
            },
            datasets: [{
                label: label,
                data: data,
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(192, 75, 75, 0.2)', 'rgba(192, 192, 75, 0.2)'],
                borderColor: ['rgb(75, 192, 192)', 'rgb(192, 75, 75)', 'rgb(192, 192, 75)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'blue'  // Cor da legenda
                    },
                    position: 'top' // Posiciona a legenda
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'rgba(255, 99, 132, 1)', // Cor dos números do eixo X
                    },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'rgba(54, 162, 235, 1)', // Cor dos números do eixo Y
                    }
                }
            }
        }
    });
}

fetchCharacterData();
