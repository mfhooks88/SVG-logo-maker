const { Triangle } = require('./shapes');

test('Triangle renders correctly', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 20 240, 180 60, 180" fill="blue" />');
});
