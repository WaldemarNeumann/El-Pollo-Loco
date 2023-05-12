class Chicken extends MovableObject {
    width = 70;
    height = 70;
    y = 385;
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
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    imageChickenDead = ['./img/3_enemies_chicken/chicken_normal/2_dead/dead.png'];


    currentImage = 0;

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imageChickenDead);
        this.x = 200 + Math.random() * 2500;
        this.speed = 0.6 + Math.random() * 0.15;
        this.animate();
        this.imgAnimate();
    }

    imgAnimate() {

        //animate the chicken than it is walk and dead
        setInterval(() => {
            this.chicken_sound.pause();
            if (!this.isDead) {
                this.playanimation(this.imagesWalking);

            } else if (this.isDead) {
                this.playanimation(this.imageChickenDead);
                this.endPlayanimation();
            }

        }, 120)
    }


    // animate the chicken move to left
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

    }

}