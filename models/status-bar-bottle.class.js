class StatusBarBottle extends DrawableObject {

    imagesBottle = [
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    percent = 0;

    constructor() {
        super();
        this.loadImages(this.imagesBottle);
        this.x = 20;
        this.y = 80;
        this.width = 200;
        this.height = 50;
        this.setPercentBottle(0);

    }

    //setPercent(50);
    setPercentBottle(percent) {
        this.percent = percent; // => 0 ... 5
        let path = this.imagesBottle[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    //show the right image when bottle is collision
    resolveImageIndex() {
        if (this.percent == 100) {
            return 5
        } else if (this.percent >= 80) {
            return 4;
        } else if (this.percent >= 60) {
            return 3;
        } else if (this.percent >= 40) {
            return 2;
        } else if (this.percent >= 20) {
            return 1;
        } else {
            return 0;
        }

    }

}