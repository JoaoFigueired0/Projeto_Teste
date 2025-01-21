async function fetchPostsData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // Contar quantas postagens cada usuário fez
    const userPostCount = data.reduce((acc, post) => {
        acc[post.userId] = (acc[post.userId] || 0) + 1;
        return acc;
    }, {});

    const userIds = Object.keys(userPostCount);  // IDs dos usuários
    const postCounts = Object.values(userPostCount);  // Quantidade de postagens

    // Criar o gráfico com os dados
    createChart('chart3', userIds, postCounts, 'Postagens por Usuário', 'pie');
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
                fill: false,  // Não preenche a área abaixo da linha
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.4,  // Suaviza a linha
                borderWidth: 2,
                pointBackgroundColor: pointColors,  // Cores diferentes para cada ponto
                pointRadius: 5,  // Tamanho dos pontos
                pointHoverRadius: 7
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
            plugins: {
                legend: {
                    position: 'top'
                },
            },
        },
    });
}

fetchPostsData();
