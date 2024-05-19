# Express-Mongoose-Typescript Project

This project is a boilerplate for setting up an Express server with Mongoose and TypeScript. It includes configurations for ESLint and Prettier for code quality and formatting.

## Project Setup/Installation Steps

### Initialize the Project

1. Initialize a new Node.js project:
   ```sh
   npm init -y
Install dependencies:

sh
Copy code
npm install express mongoose cors dotenv
npm install typescript @types/node @types/express ts-node-dev --save-dev
Initialize TypeScript:

sh
Copy code
npx tsc --init
Configure TypeScript
Update the tsconfig.json file:
json
Copy code
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    // Other configurations as needed
  }
}

##Project Structure
-Create a src folder.
-Inside the src folder, create two files: app.ts and server.ts.

##MongoDB Atlas Setup
-Go to MongoDB Atlas and create a new cluster if you haven't already.
-Click Connect, then select Drivers, and copy the connection string to your .env file.
-Create a new user:
-Navigate to Database Access and click ADD NEW DATABASE USER.
-Set the role to atlasAdmin.
-Create .env File
-Add your MongoDB connection string and other environment variables:
php
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=3000
ESLint and Prettier Setup
Install ESLint and Prettier packages:

sh
Copy code
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
npm install --save-dev prettier
Create an eslint.config.mjs file:

js
Copy code
import { Linter } from 'eslint';

/** @type {Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // Add your custom rules here
  },
};

export default config;
Create a .prettierrc file:

json
Copy code
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
Code Structure
app.ts:

typescript
Copy code
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
server.ts:

typescript
Copy code
import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
Running the Project
Add scripts to your package.json:

json
Copy code
"scripts": {
  "start": "ts-node-dev src/server.ts",
  "lint": "eslint . --ext .ts"
}
Run the project:

sh
Copy code
npm start
Additional Resources
TypeScript ESLint Guide
Linting TypeScript with ESLint and Prettier
License
This project is licensed under the MIT License. See the LICENSE file for details.

css
Copy code

This README file provides a clear setup guide, including all necessary configurations, code structure, and commands to get the project running. It also includes additional resources and a license section.
