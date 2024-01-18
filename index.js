// help provided during tutoring session

const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Function to generate a logo based on user input
async function generateLogo() {
    try {
        // Get user input for text, text color, shape, and shape color
        const userInput = await inquirer.prompt([
            // Prompt for text input
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo:',
                validate: (input) => input.length > 0 && input.length <= 3,
            },
            // Prompt for text color input
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color (keyword or hex):',
            },
            // Prompt for shape type input
            {
                type: 'list',
                name: 'shapeType',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square'],
            },
            // Prompt for shape color input
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color (keyword or hex):',
            },
        ]);

        console.log('User Input:', userInput);

        let shape;
        // Create an instance of the selected shape based on user input
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

        // Set the color for the selected shape
        shape.setColor(userInput.shapeColor);

        // Generate SVG content using the selected shape and user input
        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
      <text x="150" y="100" fill="${userInput.textColor}" font-size="20" text-anchor="middle">${userInput.text}</text>
    </svg>`;

        const fileName = 'examples/logo.svg';

        // Write SVG content to a file
        fs.writeFileSync(fileName, svgContent);
        console.log(`Generated ${fileName}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the generateLogo function to create the logo
generateLogo();
