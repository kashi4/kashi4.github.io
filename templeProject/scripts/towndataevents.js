let resquestURL = "https://byui-cit230.github.io/weather/datatowndata.json";

fetch(resquestURL).then(response => {
    response.json().then(response => {
        const temples = response.temples;
        temples.forEach(temples => {
            // Accra Ghana temple
            if (temples.name.toLowerCase() === "TempleName" && document.getElementById("cityID").value === '5585010') {
                for (let i = 0; i < temples.events.length; i++) {
                    let events = document.createElement('p');
                    events.textContent = temples.events[i];
                    document.querySelector("#eventsAcrraTemple").appendChild(events);
                }

                // Preston
            } else if (temples.name.toLowerCase() === "preston" && document.getElementById("cityID").value === '5604473') {
                for (let i = 0; i < temples.events.length; i++) {
                    let events = document.createElement('p');
                    events.textContent = temples.events[i];
                    document.querySelector("#eventsCongoTemple").appendChild(events);
                }
                // Soda Springs
            } else if (temples.name.toLowerCase() === "soda springs" && document.getElementById("cityID").value === '5607916') {
                for (let i = 0; i < temples.events.length; i++) {
                    let events = document.createElement('p');
                    events.textContent = temples.events[i];
                    document.querySelector("#eventsJoburgTemple").appendChild(events);
                }
            }
        });
    });
});