import dogsData from "./javaScript/data.js";
import Dog from "./javaScript/Dog.js";

// Current Index and CurrentDog
let currentIndex = 0;

// Elements from DOM
const heartBtn = document.querySelector("#heartBtn");
const crossBtn = document.querySelector("#crossBtn");
heartBtn.disabled = false;
crossBtn.disabled = false;

const profileImg = document.querySelector("#profileImg");
const nameElement = document.querySelector("#nameElement");
const bioElement = document.querySelector("#bioElement");

// Mapping dogsData and returning a Dog class
const dogProfiles = dogsData.map((dog) => {
    return new Dog(
        dog.name,
        dog.avatar,
        dog.age,
        dog.bio,
        dog.hasBeenSwiped,
        dog.hasBeenLiked
    );
});

let currentDog = dogProfiles[currentIndex];
// This function updates the DOM with new data
const newDog = (dog) => {
    profileImg.src = dog.avatar;
    nameElement.textContent = `${dog.name}, ${dog.age}`;
    bioElement.textContent = dog.bio;
};
// This function updates updates the Liked and Swiped booleans and updates the displayed dog
const updateDog = (swipeBoolean, likeBoolean) => {
    // Updating booleans
    currentDog.hasBeenLiked = likeBoolean;
    currentDog.hasBeenSwiped = swipeBoolean;

    showBadge(currentDog.hasBeenLiked, currentDog.hasBeenSwiped);
    setTimeout(() => {
        // Loops through the array, and jumps to the beginning if there are no more dogs
        if (currentIndex === dogProfiles.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        currentDog = dogProfiles[currentIndex];
        newDog(currentDog);
    }, 1600);
};

const showBadge = (hasBeenLiked, hasBeenSwiped) => {
    const badgeElement = document.createElement("img");
    badgeElement.id = "badge";

    const liked = hasBeenLiked;
    const swiped = hasBeenSwiped;

    if (swiped && liked) {
        badgeElement.src = "./images/badge-like.png";
    } else if (swiped) {
        badgeElement.src = "./images/badge-nope.png";
    }
    document.querySelector(".profileContainer").appendChild(badgeElement);
    setTimeout(() => {
        document.querySelector(".profileContainer").removeChild(badgeElement);
    }, 1600);
};
// Runs the newDog function to have a dog displayed on load
newDog(currentDog);

// Disables buttons

const disableButtons = () => {
    heartBtn.disabled = true;
    crossBtn.disabled = true;
    setTimeout(() => {
        heartBtn.disabled = false;
        crossBtn.disabled = false;
    }, 1600);
};
// Event listeners
heartBtn.addEventListener("click", () => {
    updateDog(true, true);
    disableButtons();
});
crossBtn.addEventListener("click", () => {
    updateDog(true, false);
    disableButtons();
});
