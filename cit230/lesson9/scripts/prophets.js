const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

//fetch(requestURL)
  //.then(response =>
   //{
    //return response.json();
  //})
  //.then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing
  //});
  /*console.table(response.prophets[0]);
              let prophet = response.prophets[0];
              console.log(prophet.imageurl);
              //console.log(prophet.birthplace);*/
  //

  fetch(requestURL)
  .then(response => {
      response.json()
      .then(
          response => {
             const prophets = response.prophets;

             prophets.forEach(
               (prophet) => {
               
              let article = document.createElement('article');
              let h2 = document.createElement('h2');
              
              h2.textContent = prophet.name + ' ' + prophet.lastname;
              
              article.appendChild(h2);
// Add date of Birth
              let birthdateDiv = document.createElement('div');
              let birthdateLabel = document.createElement('label');
              birthdateLabel.textContent = 'Date of Birth';

              let birthdateSpan = document.createElement('h2');
              birthdateSpan.textContent = prophet.birthdate;

              birthdateDiv.appendChild(birthdateLabel);
              birthdateDiv.appendChild(birthdateSpan);

              article.appendChild(birthdateDiv);

              // add place of birth

              let birthplaceDiv = document.createElement('div');

              let birthplaceLabel = document.createElement('label');
              birthplaceLabel.textContent = 'Place of Birth:'; 

              let birthplaceSpan = document.createElement('label');
              birthplaceSpan.textContent = prophet.birthplace;

              birthplaceDiv.appendChild(birthplaceLabel);
              birthplaceDiv.appendChild(birthplaceSpan);

              article.appendChild(birthplaceDiv);

              // add image
              let imageDiv = document.createElement('div');
              let image = document.createElement('img');

              image.setAttribute('src', prophet.imageurl);
              image.setAttribute('alt', prophet.name + '' + prophet.lastname + '-' + prophet.order);

              imageDiv.appendChild(image);

              article.appendChild(image);


              document.querySelector('section.prophets').appendChild(article);
             }
             );
            });
    });
