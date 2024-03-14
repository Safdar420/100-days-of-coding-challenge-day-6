// Q no 16
let guests :string[] =["Amir","Wakeel","Adil","Zafar"];
console.log("Great news I found a big Dinner table");

guests.unshift("Abdullah");
guests.splice(guests.length / 2,0 ,"Asif Ali");
guests.push("Shamshad");
guests.forEach(element => {
    console.log(`dear ${element} would you like to join me for dinner`);
});

// Q no 17
console.log("unfortunately,I invite only two guest on dinner");
while (guests.length > 2) {
    let removedguest = guests.pop();
    console.log(`sory ${removedguest} I cant invite you to dinner`);
     
}
guests.forEach(element => {
    console.log(`Dear ${element} you are still invited to dinner`);
});
guests.splice(0,
guests.length);
console.log(guests);

// Q no 18

let Places :string[] =["Makkah","Madina","Turkey","Paris"]

console.log("Orignal order :",Places);
console.log("Alphabatical order",[...Places].sort());

console.log("Orignal order :",Places);
console.log("Reverse Alphabatical order :",[...Places].sort().reverse());

console.log("Orignal order :",Places);

Places.reverse();
console.log("Orignal order",Places);
Places.reverse();
console.log("Reverse order:",Places);
Places.sort();
console.log("Alphabatical Order",Places);
Places.reverse();
console.log("Reverse Alphabatical",Places);
