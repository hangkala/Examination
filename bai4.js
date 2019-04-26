const canvas = document.getElementById("cV");
canvas.height = window.innerHeight - 20;
canvas.width = window.innerWidth - 20;
const pen = canvas.getContext("2d");

let Rectangle = function (x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = "#000000";
    this.render = function () {
        pen.fillStyle = this.color;
        pen.fillRect(this.x,this.y,this.width,this.height);
    }
};