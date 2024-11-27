document.addEventListener("DOMContentLoaded", () => {
    // Nutrition Chart
    const nutritionCtx = document.getElementById('nutritionChartCanvas').getContext('2d');
    const nutritionChart = new Chart(nutritionCtx, {
        type: 'bar',
        data: {
            labels: ['Fruits', 'Grains', 'Bakery', 'Milk', 'Meat', 'Fish'],
            datasets: [{
                label: 'carbohydrates %',
                data: [15, 65, 21, 4.9, 1.2, 10],
                
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Water Intake Chart
    const waterCtx = document.getElementById('waterIntakeChartCanvas').getContext('2d');
    const waterChart = new Chart(waterCtx, {
        type: 'pie',
        data: {
            labels: ['Morning', 'Afternoon', 'Evening', 'Night'] ,
            
            datasets: [{
                label: 'you must have water from foods or drinks',
                data: [25, 35, 20, 20],
                
            }]
        },
        options: {
            responsive: true
        }
    });
});

