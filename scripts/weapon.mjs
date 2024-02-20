//scripts/weapon.mjs
class Weapon {
    constructor(name, imagePath, value, cost) {
        this.name = name;
        this.imagePath = imagePath;
        this.clickValue = value;
        this.cost = cost;
        this.count = 0;

        let weapons = document.querySelector("#weapons");
    
        let weapon = document.createElement("div");
        weapon.classList.add("weapon");
    
        // Create name element
        let nameElement = document.createElement("div");
        nameElement.textContent = this.name;
        weapon.appendChild(nameElement);
    
        // Create image element
        let image = new Image();
        image.src = this.imagePath;
        image.id = this.name;
        weapon.appendChild(image);
    
        // Create cost elements
        let costElement = document.createElement("div");
        costElement.textContent = "Cost: ";
        this.costValue = document.createElement("span");
        this.costValue.textContent = this.cost;
        costElement.appendChild(this.costValue);
        weapon.appendChild(costElement);
    
        // Create cps (clicks per second) elements
        let cpsElement = document.createElement("div");
        cpsElement.textContent = "CPS: ";
        this.cpsValue = document.createElement("span");
        this.cpsValue.textContent = this.clickValue;
        cpsElement.appendChild(this.cpsValue);
        weapon.appendChild(cpsElement);
    
        // Create count elements
        let countElement = document.createElement("div");
        countElement.textContent = "Count: ";
        this.countValue = document.createElement("span");
        this.countValue.textContent = this.count;
        countElement.appendChild(this.countValue);
        weapon.appendChild(countElement);
    
        // Append elements to weapon
        weapon.appendChild(nameElement);
        weapon.appendChild(image);
        weapon.appendChild(costElement);
        weapon.appendChild(cpsElement);
        weapon.appendChild(countElement);
    
        // Append weapon to weapons
        weapons.appendChild(weapon);
    }

    click(zombiecount,cps) 
    {
        // does not purchase unless you have enough zombies
        if ( zombiecount.value >= this.cost)
        {
            zombiecount.value-=this.cost;
            this.cost *= 1.1;
            this.cost = parseFloat(this.cost.toFixed(0));
            cps.value += this.clickValue;
            this.count++;
        }

        // Wont change unless the if statement was true
        this.countValue.textContent = this.count;
        this.costValue.textContent = this.cost;
        

    }

}


export default Weapon;