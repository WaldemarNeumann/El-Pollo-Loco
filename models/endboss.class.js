class Endboss extends MovableObject {
    width = 200;
    height = 400;
    y = 80;
    x = 3500;
    speed = 1;

    isAlert = false;
    isAttack = false;
    isHurt = false;
    isDead = false;
    chickenBossAlert_sound = new Audio('./audio/danger.mp3');
    chickenBossHurt_sound = new Audio('./audio/roar.mp3');
    chickenBossDead_sound = new Audio('./audio/win.mp3');

    imagesWalking = [
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    imagesAlert = [
        './img/4_enemie_boss_chicken/2_alerts/G5.png',
        './img/4_enemie_boss_chicken/2_alerts/G6.png',
        './img/4_enemie_boss_chicken/2_alerts/G7.png',
        './img/4_enemie_boss_chicken/2_alerts/G8.png',
        './img/4_enemie_boss_chicken/2_alerts/G9.png',
        './img/4_enemie_boss_chicken/2_alerts/G10.png',
        './img/4_enemie_boss_chicken/2_alerts/G11.png',
        './img/4_enemie_boss_chicken/2_alerts/G12.png'
    ];

    imagesAttack = [
        './img/4_enemie_boss_chicken/3_attack/G13.png',
        './img/4_enemie_boss_chicken/3_attack/G14.png',
        './img/4_enemie_boss_chicken/3_attack/G15.png',
        './img/4_enemie_boss_chicken/3_attack/G16.png',
        './img/4_enemie_boss_chicken/3_attack/G17.png',
        './img/4_enemie_boss_chicken/3_attack/G18.png',
        './img/4_enemie_boss_chicken/3_attack/G19.png',
        './img/4_enemie_boss_chicken/3_attack/G20.png'

    ];

    imagesHurt = [
        './img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    imagesDead = [
        './img/4_enemie_boss_chicken/5_dead/G24.png',
        './img/4_enemie_boss_chicken/5_dead/G25.png',
        './img/4_enemie_boss_chicken/5_dead/G26.png'
    ];




    constructor() {
        super().loadImage(this.imagesWalking[1]);
        this.loadImages(this.imagesAlert);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.endbossAlert();
        this.endbossAttack();
        this.endbossHurt();
        this.endbossDead();
    }


    //show the endboss alert wenn the character ist <400px 
    endbossAlert() {
        this.chickenBossAlert_sound.pause();
        setInterval(() => {
            const otherObject = world.character;
            const distance = Math.abs(this.x - otherObject.x);

            if (distance < 400 && !this.isAlert) {
                this.playanimation(this.imagesAlert);
                if (soundOn) {
                    this.chickenBossAlert_sound.play();
                }
            }
        }, 200);
    }


    //show the endboss attack wenn the character ist <300px 
    endbossAttack() {
        setInterval(() => {
            const otherObject = world.character;
            const distance = Math.abs(this.x - otherObject.x);

            if (distance < 300 && !this.isAttack) {
                this.playanimation(this.imagesAttack);
                this.x -= 10;
            }
        }, 200);
    }


    //show the endboss is hurt when is collision with bottle 
    endbossHurt() {
        this.chickenBossHurt_sound.pause();
        setInterval(() => {
            if (this.isHurt) {
                this.playanimation(this.imagesHurt);
                this.x -= 5;
                this.isAlert = true;
                this.isAttack = true;
                if (soundOn) {
                    this.chickenBossHurt_sound.play();
                }
            }
        }, 200);
    }


    //show the endboss is dead 
    endbossDead() {
        this.chickenBossDead_sound.pause();
        setInterval(() => {
            if (this.isDead) {
                this.playanimation(this.imagesDead);
                this.x -= 0.01;
                this.isHurt = false;
                this.isDead = false;
                this.endAnimation();
            }
        }, 200);
    }


    //end animation then character is dead
    endAnimation() {
        if (soundOn) {
            this.chickenBossDead_sound.play();
        }
        setTimeout(() => {
            document.getElementById('gameOver').classList.remove('d-none');
            gameAudio.pause();
        }, 3000);
    }
}