#!usr/bin/env node

//noow adding thee chebang path, that in which envorment it runs

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import { types } from "util";
import { log } from "console";
import { start } from "repl";

//adding the function for time sync

const  delaytime = () => {

    return new Promise( (res) => {
        setTimeout(res , 2000);
    })
}

// adding the calculator animation in the first


async function welcome () {

   let rainbow =  chalkAnimation.rainbow(`LET THE CALCULATOR STARTS`)
   await delaytime();
   rainbow.stop();
   console.log(`
    _____________________
   |  _________________  |
   | | 10           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|
   `)
}

 await welcome();

// Now using the Inqurier for the inputs

async function  Computing() {

   await inquirer.prompt([
    {   type : "list",
        name : "operator",
        message :"chosse an operator first ? \n",
        choices: ["addition","Subtraction","Multiplication","Division"]
    },

    {
        type: "number",
        name: "num1",
        message : " Please enter first number",
    },

    {
        type:"number",
        name:"num2",
        message: "Please enter Second number"
    }
    ])

    .then((answers) => {
        if(answers.operator == "addition") 
        {
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1+ answers.num2}`)
        
        }else if( answers.operator == "subtraction")
        {
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1- answers.num2}`)
       
        }else if( answers.operator == "Multiplication")
        {
            console.log(`${answers.num1} * ${answers.num2} = ${answers.num1* answers.num2}`)
       
        }else if( answers.operator == "Division")
        {
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`)
        }

    })

    
}
// now making the restart function

async function Restarting () {
    
    do 
    {
        await Computing();
       var restart = await inquirer.prompt(
            {
                type: "input",
                name: "again",
                message:" Do you wanna compute more 'Y' or 'N' "
            }  
        )

        
    } while (restart.again == 'Y'||restart.again == 'y'||restart.again == 'Yes'||restart.again == 'yes' );

    
}


Restarting();






