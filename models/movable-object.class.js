class MovableObject extends DrawableObject {

    speed = 0.15;

    otherDirection = false;
    speedy = 0;
    acceleration = 1;
    energy = 100;
    energyEndboss = 100;
    crowdCionts = 0;
    crowdBottle = 0;
    lastHit = 0;


    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };


    //function for gravaty
    applyGravaty() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedy > 0) {
                this.y -= this.speedy;
                this.speedy -= this.acceleration;
            } else {
                this.speedy = 0;
            }
        }, 1000 / 25)
    }


    //function wenn ist above ground
    isAboveGround() {
        if (this instanceof ThowableObject) {
            return this.y < 402;
        } else {
            return this.y < 202;
        }
    }

    //counter for energy
    hit() {
        this.energy -= 3;
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    //counter for energy
    hitEndboss() {
        this.energyEndboss -= 1.7;
        if (this.energy < 0) {
            this.energy = 0
        }
    }

    //counter for coints
    touchCoints() {
        this.crowdCionts += 20;
        if (this.crowdCionts > 100) {
            this.crowdCionts = 100
        }
    }

    //counter for bottle
    touchBottle() {
        this.crowdBottle += 20;
        if (this.crowdBottle > 100) {
            this.crowdBottle = 100
        }
    }

    //counter for bottle when throw the bottle
    throwBottle() {
        this.crowdBottle -= 20;
        if (this.crowdBottle < 0) {
            this.crowdBottle = 0
        }
    }


    //end animation then the Chicken is dead
    endPlayanimation() {
        if (soundOn) {
            this.chicken_sound.play();
        }
        this.y = 410;
        this.speed = 0;
        setTimeout(() => {
            this.width = 0;
            this.height = 0;
            this.y = 900;
        }, 500);
        setTimeout(() => {
            this.isDead = false;
        }, 800);
    }

    //character is hurt
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // differenz in ms
        timepassed = timepassed / 1000; // differenz in s
        return timepassed < 0.5;
    }

    //character is dead
    isDead() {
        return this.energy == 0;
    }

    // Character.cilliding(enemie)
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    //animation for images
    playanimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }



    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }


    jump() {
        this.speedy = 14;
    }
}