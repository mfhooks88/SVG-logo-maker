const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function generateLogo() {
    try {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo:',
                validate: (input) => input.length > 0 && input.length <= 3,
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color (keyword or hex):',
            },
            {
                type: 'list',
                name: 'shapeType',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color (keyword or hex):',
            },
        ]);

        console.log('User Input:', userInput);

        let shape;
        switch (userInput.shapeType) {
            case 'circle':
                shape = new Circle();
                break;
            case 'triangle':
                shape = new Triangle();
                break;
            case 'square':
                shape = new Square();
                break;
            default:
                console.error('Invalid shape type');
                return;
        }

        shape.setColor(userInput.shapeColor);

        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
      <text x="150" y="100" fill="${userInput.textColor}" font-size="20" text-anchor="middle">${userInput.text}</text>
    </svg>`;

        const fileName = 'logo.svg';

        fs.writeFileSync(fileName, svgContent);
        console.log(`Generated ${fileName}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

generateLogo();
