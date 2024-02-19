import Weapon from "./weapon.mjs"

// cps


const cps = { value: 0 }; // Example object
const cpsDisplay = document.querySelector("#cpsCount");

// Zombie click stuff
const zombieCount = { value: 0 }; // Example object
const zombieCountDisplay = document.querySelector("#zombieCount");
const zombie = document.querySelector("#zombie")
zombie.addEventListener("click",clickZombie);

function clickZombie()
{
    zombieCount.value +=1;
}

function updateCount()
{
    zombieCount.value += cps.value;
}
function updateDisplayCount()
{
    zombieCountDisplay.textContent = Math.floor(zombieCount.value);
    cpsDisplay.textContent = parseFloat(cps.value.toFixed(1));
}

setInterval(updateCount, 1000); // Fixed: invoking updateCount function
setInterval(updateDisplayCount, 16); // Fixed: invoking updateDisplayCount function

// weapon stuff



// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    let knife = new Weapon("Knife","/assets/knife.png",.1,20);
    const knifeImg = document.querySelector("#Knife");
    knifeImg.addEventListener("click", () => knife.click(zombieCount,cps));

    let colt = new Weapon("Colt_1911","/assets/colt1911.png",1,100);
    const coltImg = document.querySelector("#Colt_1911");
    coltImg.addEventListener("click", () => colt.click(zombieCount,cps));

    let vector = new Weapon("Vector","/assets/vector.jpeg",3,500);
    const vectorImg = document.querySelector("#Vector");
    vectorImg.addEventListener("click", () => vector.click(zombieCount,cps));

    let ak74u = new Weapon("Ak74u","/assets/ak74u.png",5,1000);
    const ak74uImg = document.querySelector("#Ak74u");
    ak74uImg.addEventListener("click", () => ak74u.click(zombieCount,cps));

    let Ray_Gun = new Weapon("Ray_Gun","/assets/RayGun.jpeg",50,5000);
    const rayGunImg = document.querySelector("#Ray_Gun");
    rayGunImg.addEventListener("click", () => Ray_Gun.click(zombieCount,cps));
});