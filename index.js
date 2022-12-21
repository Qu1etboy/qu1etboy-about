#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function about() {
  console.log(chalk.green.bold.underline("\nAbout me"));
  console.log(chalk.blue(" - My name is Weerawong Vonggatunyu"));
  console.log(chalk.cyan(" - Nickname: Non"));
  console.log(chalk.red(" - Born: 5 march 2003"));
  console.log(chalk.magenta(" - Location: Bangkok, Thailand"));
  console.log(
    chalk.green(" - Study: Computer Science, Kasetsart University\n")
  );

  console.log(chalk.green.bold.underline("Social media"));
  console.log(
    chalk.yellow(` - Github: ${chalk.underline("https://github.com/qu1etboy")}`)
  );
  console.log(
    chalk.yellow(
      ` - Instragram: ${chalk.underline(
        "https://instagram.com/nonzagreanthai"
      )}`
    )
  );
  console.log(
    chalk.yellow(
      ` - Facebook: ${chalk.underline("https://facebook.com/non.weerawong")}`
    )
  );
}

async function showTitle() {
  figlet("Qu1etboy", async function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(gradient.rainbow.multiline(data));
    await askName();
    await about();
  });
}

async function askName() {
  const answer = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Who are you?",
    default() {
      return "Name";
    },
  });

  await loading();

  const greeting = chalkAnimation.rainbow(
    `Hi! ${answer.name} 👋, Nice to meet you.`
  );

  await sleep();
  greeting.stop();
}

async function loading() {
  const spinner = createSpinner("Loading...").start();
  await sleep();
  spinner.stop();
}

showTitle();
