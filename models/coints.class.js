class Coints extends MovableObject {
    width = 110;
    height = 110;

    images = [
        '../img/8_coin/coin_1.png',
        '../img/8_coin/coin_2.png'
    ];


    offset = {
        top: 30,
        left: 50,
        right: 50,
        bottom: 20
    };

    constructor() {
        super().loadImage('../img/8_coin/coin_1.png');
        this.loadImages(this.images);
        this.x = 200 + Math.random() * 2500;
        this.y = 120 + Math.random() * 200;

        this.imgAnimate()
    }

    imgAnimate() {
        setInterval(() => {
            this.playanimation(this.images);
        }, 500)
    }
}