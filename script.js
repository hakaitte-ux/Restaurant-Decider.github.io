const fineDining = ["La Laconda", "The Cloud Restaurant", "Bokkuraa Restaurant", "Cloud Signature", "Hotel Jen"];
const fastFood = ["Marry Brown", "Pizza House", "Chicking", "KFC", "Dunk n Dip"];

function showOptions(category) {
    const list = document.getElementById("restaurantList");
    list.innerHTML = "";

    let restaurants = category === "fineDining" ? fineDining : fastFood;
    
    restaurants.forEach(restaurant => {
        let li = document.createElement("li");
        li.textContent = restaurant;
        list.appendChild(li);
    });

    document.getElementById("options").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
}

function pickRandomFromList() {
    let listItems = document.querySelectorAll("#restaurantList li");
    if (listItems.length > 0) {
        let randomRestaurant = listItems[Math.floor(Math.random() * listItems.length)].textContent;
        displayResult(randomRestaurant);
    }
}

function pickRandom() {
    let allRestaurants = fineDining.concat(fastFood);
    let randomRestaurant = allRestaurants[Math.floor(Math.random() * allRestaurants.length)];
    displayResult(randomRestaurant);
}

function displayResult(restaurant) {
    document.getElementById("selectedRestaurant").textContent = restaurant;
    document.getElementById("result").classList.remove("hidden");
}