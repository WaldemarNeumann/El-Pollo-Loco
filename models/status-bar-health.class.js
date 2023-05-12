class StatusBarHealth extends DrawableObject {

    imagesHeard = [
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];

    percent = 100;

    constructor() {
        super();
        this.loadImages(this.imagesHeard);
        this.x = 20;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercent(100);

    }

    //setPercent(50);
    setPercent(percent) {
        this.percent = percent; // => 0 ... 5
        let path = this.imagesHeard[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    //show the right image when character is collision
    resolveImageIndex() {
        if (this.percent == 100) {
            return 5;
        } else if (this.percent > 80) {
            return 4;
        } else if (this.percent > 60) {
            return 3;
        } else if (this.percent > 40) {
            return 2;
        } else if (this.percent > 20) {
            return 1;
        } else {
            return 0;
        }

    }

}