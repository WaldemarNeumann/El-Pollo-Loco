class Cloud extends MovableObject {
    y = 45;
    width = 200;
    height = 300;
    speed = 0.15;

    constructor(ImagePath) {
        super().loadImage(ImagePath);

        this.x = 100 + Math.random() * 2700;
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

    }

}