let x = "150";
let y = 150;
let z = true;

document.getElementById("typeX").textContent = "type de x : " + typeof x;
document.getElementById("typeY").textContent = "type de y : " + typeof y;
document.getElementById("typeZ").textContent = "type de z : " + typeof z;

x = Number(x);

document.getElementById("typeXNew").textContent = "nouveau type de x : " + typeof x;
