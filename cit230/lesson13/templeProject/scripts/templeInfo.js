/*TEMPLE DATA*/

var sectionSe = document.getElementById('accra');
var sectionSp = document.getElementById('congo');
var sectionCr = document.getElementById('aba');
var sectionPo = document.getElementById('joburg');
var requestURL = 'https://mamaacton.github.io/assignments/term-project/scripts/templeinfo.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var templeInfo = request.response;
    console.log(templeInfo);
    populateAccra(templeInfo);
    populateCongo(templeInfo);
    populateAba(templeInfo);
    populateJoburg(templeInfo);
}
function populateAccra(templeInfo) {
    var templeSe = templeInfo['temples'];
   
    for (var i = 0; i < templeAc.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');

        if (templeAc[0].name ==='Accra') {
            myH2.textContent = templeAc[0].name;
            myPara1.textContent = 'Address: ' + templeAc[0].address;
            myPara2.textContent = 'Telephone: ' + templeAc[0].telephone;
            myPara3.textContent = 'E-mail: ' + templeAc[0].email;
            myPara4.textContent = 'Services: ' + templeAc[0].services;
            myPara5.textContent = 'History: ' + templeAc[0].history;
            myPara6.textContent = 'Ordinance Schedule: ' + templeAc[0].ordinanceSchedule;
            myPara7.textContent = 'Session Schedule: ' + templeAc[0].sessionSchedule;
            myPara8.textContent = 'Temple Closure Schedule: ' + templeAc[0].templeClosures;
        }
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);

    sectionAc.appendChild(myArticle);
}

function populateCongo(templeInfo) {
    var templeCo = templeInfo['temples'];
   
    for (var i = 0; i < templeCo.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');

        if (templeSp[1].name ==='Congo') {
            myH2.textContent = templeCo[1].name;
            myPara1.textContent = 'Address: ' + templeCo[1].address;
            myPara2.textContent = 'Telephone: ' + templeCo[1].telephone;
            myPara3.textContent = 'E-mail: ' + templeCo[1].email;
            myPara4.textContent = 'Services: ' + templeCo[1].services;
            myPara5.textContent = 'History: ' + templeCo[1].history;
            myPara6.textContent = 'Ordinance Schedule: ' + templeCo[1].ordinanceSchedule;
            myPara7.textContent = 'Session Schedule: ' + templeCo[1].sessionSchedule;
            myPara8.textContent = 'Temple Closure Schedule: ' + templeCo[1].templeClosures;
        }
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);

    sectionCo.appendChild(myArticle);
}
function populateAba(templeInfo) {
    var templeCr = templeInfo['temples'];
   
    for (var i = 0; i < templeAb.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');

        if (templeCr[2].name ==='Aba') {
            myH2.textContent = templeAb[2].name;
            myPara1.textContent = 'Address: ' + templeAb[2].address;
            myPara2.textContent = 'Telephone: ' + templeAb[2].telephone;
            myPara3.textContent = 'E-mail: ' + templeAb[2].email;
            myPara4.textContent = 'Services: ' + templeAb[2].services;
            myPara5.textContent = 'History: ' + templeAb[2].history;
            myPara6.textContent = 'Ordinance Schedule: ' + templeAb[2].ordinanceSchedule;
            myPara7.textContent = 'Session Schedule: ' + templeAb[2].sessionSchedule;
            myPara8.textContent = 'Temple Closure Schedule: ' + templeAb[2].templeClosures;
        }
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);

    sectionAb.appendChild(myArticle);
}
function populateJoburg(templeInfo) {
    var templePo = templeInfo['temples'];
   
    for (var i = 0; i < templeJo.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');

        if (templePo[3].name ==='Joburg') {
            myH2.textContent = templeJo[3].name;
            myPara1.textContent = 'Address: ' + templeJo[3].address;
            myPara2.textContent = 'Telephone: ' + templeJo[3].telephone;
            myPara3.textContent = 'E-mail: ' + templeJo[3].email;
            myPara4.textContent = 'Services: ' + templeJo[3].services;
            myPara5.textContent = 'History: ' + templeJo[3].history;
            myPara6.textContent = 'Ordinance Schedule: ' + templeJo[3].ordinanceSchedule;
            myPara7.textContent = 'Session Schedule: ' + templeJo[3].sessionSchedule;
            myPara8.textContent = 'Temple Closure Schedule: ' + templeJo[3].templeClosures;
        }
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);

    sectionJo.appendChild(myArticle);
}