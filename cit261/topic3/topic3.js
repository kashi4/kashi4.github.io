/*
let myFamily = {
  father:'charles',mother:'lina',child1:'theocha',
  child2:'tisha',child3:'theo'
};
console.log(myFamily.child3,myFamily.father); */

// Arrays: a list of things in a  single variable
/*
let familyFriends = [
  'MafubeluFam ','RaymondFam','SmithFam','MauranaFam'
];
console.log(familyFriends[3]);*/

//combining object and arrays: Java Script Object Notation
/*

let familyFriends = [
  {
    "father":"charles","mother":"lina","child1":"theocha",
  "child2":"tisha","child3":"theo"
  },
  {
    'father':'Tsediso','mother':'Edna','child1':'Nala',
  'child2':'Junior','child3':'tsepo'
  },
  {
    father:'Justin',mother:'Loini',child1:'Helam',
  child2:'Lora',child3:'twins'
  },
  {
    'father':'Steve','mother':'Chris','child1':'Landon',
  child2:'Paco','child3':'stan','child4':'levi','child5':'curtis',child6:'josh'
  },
  {
    'father':'Natangwe','mother':'paula','child1':'Julius',
  'child2':'Nafimane','child3':'Selma','child4':'Hafeni','child5':'tangeni'
  }
]
console.log(familyFriends[4].child2); */
// AJAX

let myRequest = new XMLHttpRequest();
myRequest.open('GET','https://raw.githubusercontent.com/kashi4/kashi4.github.io/master/cit261/topic3/topic3.js');
myRequest.onload = function() {
let myData = JSON.parse(myRequest.responseText);
  console.log(myData[0]);
};
myRequest.send();