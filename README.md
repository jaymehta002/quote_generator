# Quote Generator Website

A simple quote generator website built using Node.js and Express. This website allows users to generate random quotes based on different categories. The project utilizes the `node-quotegen` package for retrieving quotes.

## Features

- Generate random quotes
- Select quotes based on different categories
- Copy quotes to the clipboard

## Installation

1. Clone the repository: `git clone https://github.com/your-username/quote-generator.git`
2. Navigate to the project directory: `cd quote-generator`
3. Install dependencies: `npm install`

## Usage

1. Run the server: `node app.js`
2. Open the browser and navigate to `http://localhost:3000` to access the website.

## Dependencies

- Express
- node-quotegen

## API Endpoints

- `/api/quote` - Retrieves a random quote.
- `/api/quote/:category` - Retrieves a random quote from the specified category.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [node-quotegen](https://www.npmjs.com/package/node-quotegen) - Used for generating random quotes.

## Author

[Your Name](https://github.com/your-username)
