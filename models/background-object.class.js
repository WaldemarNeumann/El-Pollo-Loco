class Background extends MovableObject {
    width = 720;
    height = 420;


    constructor(imagePath, y, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;

    }
}