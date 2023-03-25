class Character extends MovableObject {
    width = 100;
    height = 250;
    x = 40;
    y = 210;
    speed = 5;
    world;

    isIdle = true;
    isIdleLong = false;
    isDeaded = false;
    isMoved = false;

    offset = {
        top: 100,
        left: 0,
        right: 0,
        bottom: 0
    };




    imagesWalking = [
        '../EL_POLLO_LOCO/img/2_character_pepe/2_walk/W-21.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/2_walk/W-22.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/2_walk/W-23.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/2_walk/W-24.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/2_walk/W-25.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/2_walk/W-26.png'
    ];

    imagesJumping = [
        '../EL_POLLO_LOCO/img/2_character_pepe/3_jump/J-31.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/3_jump/J-32.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/3_jump/J-33.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/3_jump/J-34.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/3_jump/J-35.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/3_jump/J-36.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/3_jump/J-37.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/3_jump/J-38.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/3_jump/J-39.png'
    ];

    imagesDead = [
        '../EL_POLLO_LOCO/img/2_character_pepe/5_dead/D-51.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/5_dead/D-52.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/5_dead/D-53.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/5_dead/D-54.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/5_dead/D-55.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/5_dead/D-56.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/5_dead/D-57.png'
    ];

    imagesHurts = [
        '../EL_POLLO_LOCO/img/2_character_pepe/4_hurt/H-41.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/4_hurt/H-42.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/4_hurt/H-43.png'
    ];

    imagesStand = ['../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-1.png'];

    imagesIdle = [
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-1.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-2.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-3.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-4.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-5.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-6.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-7.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-8.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-9.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    imagesIdleLong = [
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/long_idle/I-11.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/long_idle/I-12.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/long_idle/I-13.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/long_idle/I-14.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/long_idle/I-15.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/long_idle/I-16.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/long_idle/I-17.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/long_idle/I-18.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/long_idle/I-19.png',
        '../EL_POLLO_LOCO/img/2_character_pepe/1_idle/long_idle/I-20.png'

    ];


    hurt_sound = new Audio('../EL_POLLO_LOCO/audio/hurt.mp3');
    dead_sound = new Audio('../EL_POLLO_LOCO/audio/dead.mp3');


    constructor() {
        super().loadImage('../EL_POLLO_LOCO/img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurts);
        this.loadImages(this.imagesStand);
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesIdleLong);
        this.applyGravaty();
        this.animate();

    }

    //function for animate and move character
    animate() {


        //setInterval for move the character
        setInterval(() => {
            this.isMove()

            this.world.camara_x = -this.x + 100;
        }, 1000 / 60);


        //setInterval for manimation the character
        setInterval(() => {
            this.characterAninmation();
        }, 190)

    }


    //condition for move the character right
    isMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isMoved;
    }


    //condition for move the character left
    isMoveLeft() {
        return this.world.keyboard.LEFT && this.x > -600;
    }

    //condition for jump the character 
    isJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround();
    }


    //function for move the character
    isMove() {
        if (this.isMoveRight()) {
            this.moveRight();
            this.otherDirection = false;
        }
        if (this.isMoveLeft()) {
            this.moveLeft();
            this.otherDirection = true;
        }
        if (this.isJump()) {
            this.jump();
        }
    }


    //function animation character then chracter ist dead
    isCharacterDead() {
        this.playanimation(this.imagesDead);
        this.isMoved = true;
        if (soundOn) {
            this.dead_sound.play();
        }
        setTimeout(() => {
            document.getElementById('gameOver').classList.remove('d-none');
            this.isDeaded = true;
        }, 1500);
        gameAudio.pause();
    }


    //function for aninmation the character
    characterAninmation() {
        this.hurt_sound.pause();
        this.dead_sound.pause();
        if (this.isDead() && !this.isDeaded) {
            this.isCharacterDead();
            this.isMove = true;
        } else if (this.isHurt()) {
            this.isHurtShortFunction();
        } else if (this.isAboveGround()) {
            this.isAboveGroundShortFunction();
        } else if (this.isAnimationMovingCharacter()) {
            this.isAnimationMovingCharacterShortFunction();
        } else if (this.isIdle) {
            this.playanimation(this.imagesIdle);
        }
    }


    //short function for animation then character is hurt 
    isHurtShortFunction() {
        this.isIdleLong = false;
        this.isHurtAnimationCharacter();
    }


    //short function for animation then character is jump
    isAboveGroundShortFunction() {
        this.isIdleLong = false;
        this.playanimation(this.imagesJumping);
    }

    //short function for animation then character is move to
    isAnimationMovingCharacterShortFunction() {
        this.isIdleLong = false;
        this.playanimation(this.imagesWalking);
    }


    //condition for aninmation the character thwn is move right
    isAnimationMovingCharacter() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }

    //function animation character then chracter ist hurt
    isHurtAnimationCharacter() {
        this.playanimation(this.imagesHurts);
        if (soundOn) {
            this.hurt_sound.play();
        }
    }

}