class Chickensmall extends MovableObject {
    width = 50;
    height = 50;
    y = 403;
    x = 50;
    isDead = false;
    chicken_sound = new Audio('./audio/chicken.mp3');

    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
    };

    imagesWalking = [
        './img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/2_w.png'
    ];

    imageChickenDead = ['./img/3_enemies_chicken/chicken_small/2_dead/dead.png'];
    currentImage = 0;

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imageChickenDead);
        this.x = 200 + Math.random() * 2500;
        this.speed = 0.15 + Math.random() * 0.15;
        this.animate();
        this.imgAnimate();
    }

    //animate the chicken than it is walk and dead
    imgAnimate() {
        this.chicken_sound.pause();
        setInterval(() => {
            if (!this.isDead) {
                this.playanimation(this.imagesWalking);
            } else if (this.isDead) {
                this.playanimation(this.imageChickenDead);
                this.endPlayanimation();
            }

        }, 100)
    }


    // animate the chicken move to left
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

    }


}