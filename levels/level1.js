let level1;


//arrays for Chicken, clouds and background
function initLevel() {

    level1 = new Level([
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chickensmall(),
            new Chickensmall(),
            new Chickensmall(),
            new Chickensmall()

        ],

        [
            new Cloud('./img/5_background/layers/4_clouds/1.png'),
            new Cloud('./img/5_background/layers/4_clouds/2.png'),
            new Cloud('./img/5_background/layers/4_clouds/1.png'),
            new Cloud('./img/5_background/layers/4_clouds/2.png')
        ],

        [
            new Background('./img/5_background/layers/air.png', 00, -719),
            new Background('./img/5_background/layers/3_third_layer/2.png', 80, -719),
            new Background('./img/5_background/layers/2_second_layer/2.png', 80, -719),
            new Background('./img/5_background/layers/1_first_layer/2.png', 80, -719),

            new Background('./img/5_background/layers/air.png', 00, -719.26 * 2),
            new Background('./img/5_background/layers/3_third_layer/1.png', 80, -719 * 2),
            new Background('./img/5_background/layers/2_second_layer/1.png', 80, -719 * 2),
            new Background('./img/5_background/layers/1_first_layer/1.png', 80, -719 * 2),


            new Background('./img/5_background/layers/air.png', 00, 0),
            new Background('./img/5_background/layers/3_third_layer/1.png', 80, 0),
            new Background('./img/5_background/layers/2_second_layer/1.png', 80, 0),
            new Background('./img/5_background/layers/1_first_layer/1.png', 80, 0),

            new Background('./img/5_background/layers/air.png', 00, 719),
            new Background('./img/5_background/layers/3_third_layer/2.png', 80, 719),
            new Background('./img/5_background/layers/2_second_layer/2.png', 80, 719),
            new Background('./img/5_background/layers/1_first_layer/2.png', 80, 719),


            new Background('./img/5_background/layers/air.png', 00, 719 * 2),
            new Background('./img/5_background/layers/3_third_layer/1.png', 80, 719 * 2),
            new Background('./img/5_background/layers/2_second_layer/1.png', 80, 719 * 2),
            new Background('./img/5_background/layers/1_first_layer/1.png', 80, 719 * 2),

            new Background('./img/5_background/layers/air.png', 00, 719 * 3),
            new Background('./img/5_background/layers/3_third_layer/2.png', 80, 719 * 3),
            new Background('./img/5_background/layers/2_second_layer/2.png', 80, 719 * 3),
            new Background('./img/5_background/layers/1_first_layer/2.png', 80, 719 * 3),


            new Background('./img/5_background/layers/air.png', 00, 719 * 4),
            new Background('./img/5_background/layers/3_third_layer/1.png', 80, 719 * 4),
            new Background('./img/5_background/layers/2_second_layer/1.png', 80, 719 * 4),
            new Background('./img/5_background/layers/1_first_layer/1.png', 80, 719 * 4),

            new Background('./img/5_background/layers/air.png', 00, 719 * 5),
            new Background('./img/5_background/layers/3_third_layer/2.png', 80, 719 * 5),
            new Background('./img/5_background/layers/2_second_layer/2.png', 80, 719 * 5),
            new Background('./img/5_background/layers/1_first_layer/2.png', 80, 719 * 5)
        ]


    );

}