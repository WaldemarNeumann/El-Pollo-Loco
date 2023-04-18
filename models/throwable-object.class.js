class ThowableObject extends MovableObject {
    isBottleSplash = false;
    stopToMoveBottle = false;

    imagesBottleRotation = [
        '../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    imageBottleSplash = [
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    constructor(x, y) {
        super().loadImage('../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.imagesBottleRotation);
        this.loadImages(this.imageBottleSplash);
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 100;
        this.trow();

    }


    //throw the bottle
    trow() {
        this.speedy = 10;
        this.applyGravaty();

        setInterval(() => {
            if (!this.stopToMoveBottle) {
                this.x += 8;
            }
        }, 25);


        setInterval(() => {
            if (!this.isBottleSplash) {
                this.playanimation(this.imagesBottleRotation);

            } else if (this.isBottleSplash) {
                this.playanimation(this.imageBottleSplash);
                this.x += 0.001;
                setTimeout(() => {
                    this.isBottleSplash = false;
                    this.stopToMoveBottle = true;
                    this.y = 800;
                }, 1000);
            }
        }, 100);
    }
}