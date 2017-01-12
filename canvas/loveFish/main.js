var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;
var fruit;

var mom;
var baby;

var mx;  // 鼠标的x坐标
var my;  // 鼠标的y坐标


document.body.onload = game;

function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

// 游戏画布的初始化
function init() {
    // 获得canvas context
    //  can1用来放背景图片 can2用来绘制其除背景图片以外的其他元素
    can1 = document.getElementById('canvas1');  // fishes, dust, UI, circle
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById('canvas2');  // fishes, dust, UI, circle
    ctx2 = can2.getContext("2d");

    // 获得鼠标的位置
    can1.addEventListener('mousemove', onMouseMove, false);

    bgPic.src = "./src/background.jpg";

    canWidth = can1.width;
    canHeight = can1.height;

    // new一个海葵对象并初始化
    ane = new aneObj();
    ane.init();

    // new一个果实对象并初始化
    fruit = new fruitObj();
    fruit.init();

    // new一个鱼妈妈对象并初始化
    mom = new momObj();
    mom.init();

    // new一个鱼宝宝对象、并初始化
    baby = new babyObj();
    baby.init();

    // 鼠标的位置初始化子在canvas的中心
    mx = canWidth * 0.5;
    my = canHeight * 0.5;
}

// 游戏循环函数
function gameloop() {
    window.requestAnimFrame(gameloop);  // setInterval, setTimeout, fps
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 40) {
        deltaTime = 40;
    }

    drawBackground();
    ane.draw();
    fruitMointor();
    fruit.draw();

    // 绘制大鱼之前先清除画布
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    momFruitsCollision();
    baby.draw();
}

function onMouseMove(e) {
    // 获取鼠标的xy坐标
    if (e.offSetX || e.layerX) {
        mx = e.offSetX == undefined ? e.layerX : e.offSetX;
        my = e.offSetY == undefined ? e.layerY : e.offSetY;
    }
}
