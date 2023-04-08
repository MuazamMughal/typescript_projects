#!/usr/bin/env node

//firsly importing all npm modules
import chalk from "chalk"
import inquirer from "inquirer";
import chalkanimation from "chalk-animation"

//making  the delay function

const timeDelay =  () => {
    return new Promise((res)=>{
        setTimeout(res , 3000)
    })
}    


//making the chalk animation functin

async function Animation () {

    let animi = chalkanimation.karaoke(`Vowels Gussing is Ready Now `)

    await timeDelay()

    animi.stop()

    
}

await Animation();

async function DetectionV () {

    await inquirer.prompt(
        
        {
            type :"input",
            name :"alph",
            message:"Please type an Alphabet"
        }

    ) .then((answer)=>
    {

     if(answer.alph == "a" ||answer.alph == "e" ||answer.alph == "i" ||answer.alph == "o"||answer.alph == "u"){
        console.log(chalk.yellow(`you typed the Vowel ${answer.alph}`))
     }else if (answer.alph == "A" ||answer.alph == "E" ||answer.alph == "I" ||answer.alph == "O"||answer.alph == "U") {
        console.log(chalk.yellow(`you typed the Vowel ${answer.alph}`))
     } else{
        console.log(chalk.red(`You typed Consonent ${answer.alph}`))
    }
   })
    
}



async function Repeat () {

    do{
        await DetectionV()

        var Ans = await inquirer.prompt({
            type :"input",
            name:"again",
            message: "Do you wanna Guss again 'yes' or 'no' ?"
           }) 
           

        } while (Ans.again == "Yes"||Ans.again == "yes"||Ans.again == "Y"||Ans.again == "y")
}
Repeat();