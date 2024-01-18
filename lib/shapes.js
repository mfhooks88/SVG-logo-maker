class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    // Implement rendering logic for the base shape
    return "";
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 20 240, 180 60, 180" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="40" y="40" width="220" height="120" fill="${this.color}" />`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
