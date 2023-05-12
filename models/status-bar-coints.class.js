class StatusBarCoints extends DrawableObject {

    imagesCoints = [
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ];

    percent = 0;

    constructor() {
        super();
        this.loadImages(this.imagesCoints);
        this.x = 20;
        this.y = 40;
        this.width = 200;
        this.height = 50;
        this.setPercentCoints(0);

    }

    //setPercent(50);
    setPercentCoints(percent) {
        this.percent = percent; // => 0 ... 5
        let path = this.imagesCoints[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    //show the right image when coints is collision
    resolveImageIndex() {
        if (this.percent == 100) {
            return 5;
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