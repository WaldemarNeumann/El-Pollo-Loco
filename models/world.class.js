class World {


    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camara_x = 0;
    statusBarHealth = new StatusBarHealth();
    statusBarCoints = new StatusBarCoints();
    statusBarBottle = new StatusBarBottle();
    statusBarEndboss = new StatusBarEndboss();
    endboss = new Endboss();
    bottle = [new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle()];
    coints = [new Coints(), new Coints(), new Coints(), new Coints(), new Coints(), new Coints(), new Coints(), new Coints()];
    throwableObjects = [];
    bottles;
    hitCount = 0;
    coin_sound = new Audio('./audio/coin.mp3');
    bottle_sound = new Audio('./audio/bottle1.mp3');



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    //running  Intervals  
    run() {
        setInterval(() => {
            this.collisionsBottleFlor();
            this.checkCollisionsBottleChicken();
            this.checkCollisionsBottleEndboss()
            this.checkCollisionsEnemie();
            this.checkCollisionsBottle();
            this.checkCollisionsCoints();
            this.checkCollisionsEndboss();
            this.checkThrowObjects();

        }, 100);
    }


    //check if the bottle is throw and push and delete the bottle in statusbar 
    checkThrowObjects() {
        if (this.character.crowdBottle > 0) {
            if (this.keyboard.D && (!this.lastThrowTime || Date.now() - this.lastThrowTime > 500)) {
                let bottles = new ThowableObject(this.character.x + 20, this.character.y + 20);
                this.throwableObjects.push(bottles);
                this.character.throwBottle();
                this.statusBarBottle.setPercentBottle(this.character.crowdBottle);
                this.lastThrowTime = Date.now();
            }
        }
    }


    //check collision character with enemies 
    checkCollisionsEnemie() {
        this.level.enemies.forEach((enemy) => {
            if (!enemy.isDead && this.character.isColliding(enemy)) {
                if (this.character.y + this.character.height > enemy.y && this.character.isAboveGround() && !this.character.isHurt() && this.character.speedy < 0) {
                    enemy.isDead = true;
                } else {
                    this.character.hit();
                    this.statusBarHealth.setPercent(this.character.energy);
                }
            }
        });
    }


    // check collision bottle with chicken
    checkCollisionsBottleChicken() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(enemy)) {
                    enemy.isDead = true;
                    bottle.isBottleSplash = true;
                    bottle.stopToMoveBottle = true;
                }
            });

        });
    }


    //show collision bottle on flor
    collisionsBottleFlor() {
        this.throwableObjects.forEach((bottle) => {
            setTimeout(() => {
                bottle.isBottleSplash = true;
                bottle.stopToMoveBottle = true;
            }, 1200);

        });

    }

    //check collision bottle with endboss
    checkCollisionsBottleEndboss() {
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(this.endboss)) {
                bottle.isBottleSplash = true;
                bottle.stopToMoveBottle = true;
                this.hitInformationEndboss();
                if (this.hitCount >= 25) {
                    this.endboss.isHurt = true;
                }
                if (this.hitCount >= 45) {
                    this.endboss.isDead = true;
                }
            }
        });
    }


    //information for hit the Endboss
    hitInformationEndboss() {
        this.hitCount++;
        this.character.hitEndboss();
        this.statusBarEndboss.setPercent(this.character.energyEndboss);
    }

    //check collision character with endboss
    checkCollisionsEndboss() {
        if (this.character.isColliding(this.endboss)) {
            this.character.hit();
            this.statusBarHealth.setPercent(this.character.energy);
        }
    }


    //check collision character with bottle and push/delete the bottle in statusbar
    checkCollisionsBottle() {
        this.bottle_sound.pause();
        this.bottle.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.touchBottle();
                this.statusBarBottle.setPercentBottle(this.character.crowdBottle);
                this.ctx.clearRect(bottle.x, bottle.y, bottle.width, bottle.height);
                this.bottle.splice(index, 1);
                if (soundOn) {
                    this.bottle_sound.play();
                }
            }
        });
    }


    //check collision character with coint and push/delete the coint in statusbar
    checkCollisionsCoints() {
        this.coin_sound.pause();
        this.coints.forEach((coints, index) => {
            if (this.character.isColliding(coints)) {
                this.character.touchCoints();
                this.statusBarCoints.setPercentCoints(this.character.crowdCionts);
                this.ctx.clearRect(coints.x, coints.y, coints.width, coints.height);
                this.coints.splice(index, 1);
                if (soundOn) {
                    this.coin_sound.play();
                }
            }
        });
    }



    //put the world variable in the class
    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
        this.statusBarEndboss.world = this;
    }


    //draw the images
    draw() {


        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camara_x, 0);

        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camara_x, 0);
        // --Space for fixed Objects
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoints);
        this.addToMap(this.statusBarBottle);

        this.ctx.translate(this.camara_x, 0);


        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);

        this.addObjectsToMap(this.coints);
        this.addObjectsToMap(this.bottle);
        this.addToMap(this.endboss);
        this.addToMap(this.statusBarEndboss);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camara_x, 0);

        // draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    //add objects to map
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);



        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}