const requestURL = 'https://raw.githubusercontent.com/kashi4/kashi4.github.io/master/templeProject/scripts/temples.json';

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                   const temples = response.temples;
                    temples.forEach(
                        (temples) => {
                        
                            if (temples.name.toLowerCase() === 'accra ghana') {
                                //accra Ghana Temple
                                document.querySelector("#accraGhanaTempleName")
                                    .textContent = temples.TempleName;

                                document.querySelector("#AccraLocation")
                                    .textContent = temples.TempleLocation;

                                document.querySelector("#AccraTempleServices")
                                    .textContent = temples.TempleServices;

                                document.querySelector("#TempleTelephone")
                                    .textContent = temples.TempleTelephone;
                                
                                document.querySelector("#TempleOrdinacesSchedule")
                                    .textContent = temples.TempleOrdinacesSchedule;
                            
                                document.querySelector("#TempleSessionSchedule")
                                    .textContent = temples.TempleSessionSchedule;
                                 
                                document.querySelector("#TempleClosureSchedule")
                                    .textContent = temples.TempleClosureSchedule; 
                                    
                                document.querySelector("#TempleHistory")
                                    .textContent = temples.TempleHistory; 

                                document.querySelector("#AccraImage")
                                    .setAttribute('src', 'images/' + temples.photo);
                            } else if (town.name.toLowerCase() === 'Democratic Republic of the Congo Temple') {
                                //preston
                                document.querySelector("#prestonYear")
                                    .textContent = town.yearFounded;

                                document.querySelector("#prestonMotto")
                                    .textContent = town.motto;

                                document.querySelector("#prestonPop")
                                    .textContent = town.currentPopulation;

                                document.querySelector("#prestonRain")
                                    .textContent = town.averageRainfall;

                                document.querySelector("#prestonImage")
                                    .setAttribute('src', 'images/' + town.photo);
                            } else if (town.name.toLowerCase() === 'South Afrca Johannesburg Temple') {
                                //soda springs
                                document.querySelector("#sodaYear")
                                    .textContent = town.yearFounded;

                                document.querySelector("#sodaMotto")
                                    .textContent = town.motto;

                                document.querySelector("#sodaPop")
                                    .textContent = town.currentPopulation;

                                document.querySelector("#sodaRain")
                                    .textContent = town.averageRainfall;

                                document.querySelector("#sodaImage")
                                    .setAttribute('src', 'images/' + town.photo);
                            }
                        }
                    );
                }
            )
    });