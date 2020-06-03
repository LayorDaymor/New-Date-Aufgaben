////////////////////////////
// date new Date() level 1.1
////////////////////////////
let date1=new Date("September 2, 2019 09:00:00");
console.log(date1);
let date2=new Date(0);
console.log(date2);
let date3=new Date(31556908800);
console.log(date3);
let date4=new Date(86400000);
console.log(date4);

////////////////////////////
// date new Date() level 1.2
////////////////////////////
var monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];
  
  var wocheTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ];
  const date5= new Date("2019, oct, 23, 11:03:29")
  let a= date5.getFullYear();
  let b=date5.getMonth()+" "+"Monat";
  let c=date5.getDate()+" "+"Tag";
  let d=date5.getHours()+" "+"Stunde";
  let e=date5.getMinutes()+" "+"Minute";
  let f=wocheTag[3];
  let g=monate[9]
  console.log(date5);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);
  console.log(g);
  ////////////////////////////
// date new Date() level 1.3
////////////////////////////






////////////////////////////
// date new Date() level 1.4
////////////////////////////
const AnzahlderTage=function(jahr,monat){
 return new Date(monat,jahr,0).getDate();
}
console.log(AnzahlderTage(2,2020));

////////////////////////////
// date new Date() level 1.5
////////////////////////////
list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];
const Monatsnamen=function(jahr,monat){
  monat=list;
  new Date(jahr,monat)
}
console.log(Monatsnamen("2,4"));
