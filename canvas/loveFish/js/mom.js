var momObj = function() {
    this.x;  // 大鱼的x坐标
    this.y;  // 大鱼的y坐标
    this.angle;  // 大鱼的角度
    this.bigEye = new Image();  // 大鱼的眼睛
    this.bigBody = new Image();  // 大鱼的身体
    this.bigTail = new Image();  // 大鱼的尾巴
}
momObj.prototype.init = function() {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    this.bigEye.src = "./src/bigEye0.png";
    this.bigBody.src = "./src/bigSwim0.png";
    this.bigTail.src = "./src/bigTail0.png";

}
momObj.prototype.draw = function() {
    // 鱼跟随鼠标
    // lerpDistance封装在库文件中
    this.x = lerpDistance(mx, this.x, 0.98);
    this.y = lerpDistance(my, this.y, 0.98);

    // 大鱼应该偏移的角度
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;

    // 大鱼跟随鼠标旋转
    this.angle = lerpAngle(beta, this.angle, 0.6);

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);
    ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
    ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);

    ctx1.restore();
}
