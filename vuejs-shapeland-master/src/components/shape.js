npmexport default class Shape {
  constructor(ctx, canvas, shape) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.shape = shape;
    this.order = shape.order;
    // DEFAULT VALUE
    this.shapeFrame = 200;
    this.isHoverd = false;
  }
  draw() {
    const shapeYCord = (this.shape.order - 1) * this.shapeFrame;
    const shapeXCord = 0;
    const shapeWidth = this.canvas.width;
    const shapeHeight = this.shapeFrame;
    this.ctx.clearRect(shapeXCord, shapeYCord, shapeWidth, shapeHeight);
    if (this.shape.type === 'rectangle') {
      this.centerX = this.canvas.width / 2;
      this.centerY = (this.shape.order * this.shapeFrame) - (this.shapeFrame / 2);
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.translate(this.centerX, this.centerY);
      this.ctx.scale(this.shape.props.scale.x, this.shape.props.scale.x);
      this.ctx.fillStyle = this.shape.props.color;
      const xCord = -(this.shape.props.width / 2);
      const yCord = -(this.shape.props.height / 2);
      const width = this.shape.props.width;
      const height = this.shape.props.height;
      this.ctx.fillRect(xCord, yCord, width, height);
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = 'black';
      this.ctx.strokeRect(xCord, yCord, width, height);
      const text = this.shape.props.text;
      const textYCord = 0;
      const textXCord = -(this.shape.props.width / 2);
      const textMaxWidth = this.shape.props.width;
      this.ctx.font = '16px serif';
      this.ctx.fillStyle = 'black';
      this.ctx.fillText(text, textXCord, textYCord, textMaxWidth);
      this.ctx.restore();
    }
    if (this.shape.type === 'circle') {
      this.centerX = this.canvas.width / 2;
      this.centerY = (this.shape.order * this.shapeFrame) - (this.shapeFrame / 2);
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.fillStyle = this.shape.props.color;
      this.ctx.translate(this.centerX, this.centerY);
      this.ctx.scale(this.shape.props.scale.x, this.shape.props.scale.y);
      const x = 0; // x coordinate
      const y = 0; // y coordinate
      const radius = this.shape.props.radius; // Arc radius
      const startAngle = 0; // Starting point on circle
      const endAngle = Math.PI * 2; // End point on circle
      this.ctx.arc(x, y, radius, startAngle, endAngle, true);
      this.ctx.fill();
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = 'black';
      this.ctx.stroke();
      this.ctx.restore();
    }
    if (this.shape.type === 'triangle') {
      this.centerX = this.canvas.width / 2;
      this.centerY = (this.shape.order * this.shapeFrame) - (this.shapeFrame / 2);
      // TOP P /\
      const p1Y = -(this.shape.props.height / 2);
      const p1X = 0;
      // RIGHT P  _\
      const p2Y = this.shape.props.height / 2;
      const p2X = this.shape.props.width / 2;
      // LEFT P /_
      const p3Y = this.shape.props.height / 2;
      const p3X = -(this.shape.props.width / 2);
      this.ctx.fillStyle = this.shape.props.color;
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = 'black';
      this.ctx.translate(this.centerX, this.centerY);
      this.ctx.rotate(((Math.PI / 180) * this.shape.props.rotation));
      this.ctx.moveTo(p1X, p1Y);
      this.ctx.lineTo(p2X, p2Y);
      this.ctx.lineTo(p3X, p3Y);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.restore();
    }
  }
  hover(index) {
    // if is not hovering over the current shape
    if (index !== this.shape.order) {
      this.draw();
      return;
    }
    // if is hovering over the current hovered shape
    if (this.isHoverd) {
      return;
    }
    // if is hovering for the first time over the current shape
    if (!this.isHoverd && index === this.shape.order) {
      this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
      const xCord = 0;
      const yCord = (this.shape.order * this.shapeFrame) - this.shapeFrame;
      const width = this.canvas.width;
      const height = this.shapeFrame;
      this.ctx.fillRect(xCord, yCord, width, height);
    }
  }
}
