window.onload = publicQuestion

        function beforePrintHandler() {
            for (var id in Chart.instances) {
                Chart.instances[id].resize();
            }
        }

        function publicQuestion() {

            graphTab = [0, 0, 0, 0]

        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#ffffff';

            var ctx = document.getElementById('chartContainer').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'bar',

                // The data for our dataset
                data: {
                    labels: ['A', 'B', 'C', 'D'],
                    datasets: [{
                        label: 'OPINIA EKSPERTÓW Z CZATU',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [0,0,0,0]
                    }]
                },

                // Configuration options go here
                options: {  options: {
                title: {
                    display: true,
                    text: 'ODPOWIEDZI EKSPERTÓW',
                    fontSize: 30
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        fontColor: '#fff'
                    }
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }
                },
                tooltips: {
                    enabled: true
                }
            }}
            });

            console.log(chart.data.datasets[0].data[0]);

            setInterval(() => {
                const url2 = "http://localhost:3000/url"
                const url = 'http://167.71.34.32:3001/url'; // site that doesn’t send Access-Control-*
                fetch(url, { mode: 'cors' }).then(response => response.json()).then((res) => {
                    chart.data.datasets[0].data[0] = res[0]
                    chart.data.datasets[0].data[1] = res[1]
                    chart.data.datasets[0].data[2] = res[2]
                    chart.data.datasets[0].data[3] = res[3]
                    chart.update()

                    chart.render();

                }).catch(err => {
                    console.log(err);
                })
            }, 1000);

        }