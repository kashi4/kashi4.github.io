const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

//fetch(requestURL)
  //.then(response =>
   //{
    //return response.json();
  //})
  //.then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing
  //});

  //

  fetch(requestURL)
  .then(response => {
      response.json()
      .then(
          response => {
              console.table(response.prophets[0]);
              let prophet = response.prophets[0];
              console.log(prophet.imageurl);
              //console.log(prophet.birthplace);
        });
    });
  