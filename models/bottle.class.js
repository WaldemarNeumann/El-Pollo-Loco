class Bottle extends MovableObject {
    width = 110;
    height = 110;
    world;

    offset = {
        top: 30,
        left: 50,
        right: 50,
        bottom: 20
    };


    bottleRotation = [
        '../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];


    constructor() {
        super().loadImage('./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.bottleRotation);

        this.x = 200 + Math.random() * 2500;
        this.y = 120 + Math.random() * 200;


    }

}