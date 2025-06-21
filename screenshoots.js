const puppeteer = require('puppeteer');
const fs = require('fs');

const projects = [
  { name: 'Portfolio Website', url: 'Portfolio Website/index.html', img: 'Portfolio Website Image.jpg' },
  { name: 'Science from Quran', url: 'Science from Quran/index.html', img: 'Quran-Image.png' },
  { name: 'NoteNest', url: 'NoteNest/index.html', img: 'NoteNest Image.jpg' },
  { name: 'Expense Tracker', url: 'Expense Tracker/index.html', img: 'Expense Tracker Image.jpg' },
  { name: 'Currency Converter', url: 'Currency Converter/index.html', img: 'Currency Converter Image.jpg' },
  { name: 'Compound Information', url: 'Compound Information/index.html', img: 'Compound Information Image.jpg' },
  { name: 'Fitness Tracker', url: 'Fitness Tracker/index.html', img: 'Fitness Tracker Image.jpg' },
  { name: 'Recipe Finder', url: 'Recipe Finder/index.html', img: 'Recipe Finder Image.jpg' },
  { name: 'Gallery', url: 'Gallery/index.html', img: 'Gallery.jpg' },
  { name: 'Quiz App', url: 'Quiz App/index.html', img: 'Quiz App image.jpg' },
  { name: 'to-do app', url: 'to-do app/index.html', img: 'to-do app image.jpg' },
  { name: 'Calculator', url: 'Calculator/index.html', img: 'Calculator Image.jpg' },
  { name: 'BMI Calculator', url: 'BMI Calculator/index.html', img: 'BMI Calculator Image.jpg' },
  { name: 'Temprature Converter', url: 'Temprature Converter/index.html', img: 'Temprature Converter Image.jpg' },
  { name: 'Weather app', url: 'Weather app/index.html', img: 'Weather app image.jpg' },
  { name: 'Countdown Timer', url: 'Countdown Timer/index.html', img: 'Countdown Timer image.jpg' },
  { name: 'Random Quote Generator', url: 'Random Quote Generator/index.html', img: 'Random Quote Generator image.jpg' },
  { name: 'Tic-Tac-Toe', url: 'Tic-Tac-Toe/index.html', img: 'Tic-Tac-Toe image.jpg' },
  { name: 'Planets', url: 'Planets/index.html', img: 'Planets image.jpg' }
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const project of projects) {
    const filePath = `file://${__dirname}/${project.url}`;

    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: `images/${project.img}`, fullPage: true });

    console.log(`✅ ${project.name} screenshot saved as ${project.img}`);
  }

  await browser.close();
})();
