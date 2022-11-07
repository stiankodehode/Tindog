// Create the Dog class here

class Dog {
    constructor(name, avatar, age, bio, hasBeenSwiped, hasBeenLiked) {
        this.name = name;
        this.avatar = avatar;
        this.age = age;
        this.bio = bio;
        this.hasBeenSwiped = hasBeenSwiped;
        this.hasBeenLiked = hasBeenLiked;
    }

    toggleSwiped() {
        this.hasBeenSwiped = true;
    }
    toggleLiked() {
        this.hasBeenLiked = true;
    }
}

export default Dog;
