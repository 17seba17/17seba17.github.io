class Obstacle {
    constructor(snake) {
        this.x = floor(random(blocksX));
        this.y = floor(random(blocksY));

        while (snake.isAppleOnSnake(this)) {
            this.x = floor(random(blocksX));
            this.y = floor(random(blocksY));
        }
        print(snake, this);
    }

show() {
    noStroke();
    fill(255, 255, 0); // yellow
    push();
    translate(this.x * blockSize + blockSize/2, this.y * blockSize + blockSize/2);
    rotate(45);
    rectMode(CENTER);
    rect(0, 0, blockSize/3, blockSize - 2*outlineLength);
    rect(0, 0, blockSize - 2*outlineLength, blockSize/3);
    pop();
} 


    isAtPosition(x, y) {
        return this.x === x && this.y === y;
    }


}
