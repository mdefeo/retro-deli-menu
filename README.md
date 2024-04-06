# Retro Scrolling Credits

This is a basic guide to setting up and running the Retro Scrolling Credits on a Raspberry Pi.

This project was created as a menu for a deli and run on a CRT TV through a Raspberry Pi. The goal was to create something similar to 8-bit video game credits.

## Prerequisites

Before you begin, ensure you have the following installed on your Raspberry Pi:

- Node.js
- npm or yarn (npm comes with Node.js)
- Git (optional, if you're cloning a repository)

## Installation

Follow these steps to install the project on your Raspberry Pi:

### Update your Raspberry Pi

```bash
sudo apt update && sudo apt upgrade -y
```

### Install Node

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Clone Repository

```bash
git clone https://github.com/mdefeo/retro-deli-menu
```

### Navigate to Repository Directory

```bash
cd retro-deli-menu
```

### Install Project Dependencies

```bash
npm install
```

### Editing the Menu

To edit the menu, hook up your API and pull in your JSON. Or, you can edit the placeholder JSON fiole located at /data/menu.ts.

## Running the Project

### To run in development mode

```bash
npm run dev
```

### Or if you're using yarn

```bash
yarn dev
```

### To build the project for production

```bash
npm run build
```

or

```bash
yarn build
```

### To start the project in production mode

```bash
npm start
```

or

```bash
yarn start
```

## Troubleshooting

Ensure all the dependencies are correctly installed if you encounter any errors during installation or runtime.
Check that your Raspberry Pi's Node.js version is compatible with the project.
Verify that your Raspberry Pi has a stable internet connection during installation.

## Author

- **Marcello De Feo** - *Initial work* - [mdefeo](https://github.com/mdefeo)

## MIT License

Copyright (c) [2024] [Marcello De Feo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
