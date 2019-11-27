var laFamilia = {"Members":[
  {"name":"Julius","age":38,"lastname":"Kashihakumwa","occupation":"Student"},
  {"name":"Theopolina","age":35,"lastname":"Kashihakumwa","occupation":"student"},
  {"name":"Theocha","age":11,"lastname":"Kashihakumwa","occupation":"unemployeed"},
  {"name":"Letisha","age":9,"lastname":"Kashihakumwa","occupation":"minor"},
  {"name":"Theodor","age":6,"lastname":"Kashihakumwa","occupation":"StillAChild"},
]};
var i, dis;
for(i=0, dis = "";i < laFamilia.Members.length ; i++){
  dis += i + " - " + laFamilia.Members[i].name + " - " + laFamilia.Members[i].age + '<br>';
}
document.getElementById('content1').innerHTML = dis;
function createJson(){
  var select = document.getElementById("number").value;
  var j = 0;
  if(select => 0 && select <= 5){
      for(j=0;j < laFamilia.Members.length ; j++){
          if(j == select){
              document.getElementById('content').innerHTML = "I'm " + laFamilia.Members[j].name + " " + laFamilia.Members[j].lastname + "." + " I'm " + laFamilia.Members[j].age + " years old and my occupation is " + laFamilia.Members[j].occupation;
              ;
          }
      }
  }
  if(select > 5){
      var member = {"avisar":function(){alert("Insert a number between 0 - 5");}
};
member.avisar();
  }
}
function createStringify(){
  var teams = new Array();
teams[0] = "Goats";
teams[1] = "Bandits";
teams[2] = "Rexchester";
teams[3] = "Underdogs";
teams[4] = "Executors";
teams[5] = "Latinos";

  var jsonText = JSON.stringify(teams, replaceToUpper);
  document.getElementById("result").innerHTML = jsonText + " " + JSON.stringify(new Date());
}
function replaceToUpper(key, value) {
  return value.toString().toUpperCase();
}