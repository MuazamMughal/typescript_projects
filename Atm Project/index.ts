#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalk_animation from "chalk-animation"

//first of all creating the promise function for time delying in animation

const Delay = () => {

    return new Promise((res) => {
        setTimeout(res , 2000)
    })
}


async function AtmAnimation() {

    let animi =  chalk_animation.karaoke("Wellcome to ATM");
    await Delay()
    animi.stop()
}

 await AtmAnimation()
 
async function AtmCal() {
    let usrInput = await inquirer.prompt([
        
        {
            type :"input",
            name : "userid",
            message : " Please enter your user id"

        },
        {
            name:"userpass",
            type:"password",
            message:"Please enter your Password"

        }

    ])
     
    let userAmount =Math.floor( Math.random()*100000 +1);
    await console.log(`This is your Amount ${userAmount}`)

    let userData = {
        userid : usrInput.userid,
        userpass : usrInput.userpass,
        userAmount :userAmount
    }

     console.log(userData)

    let functionailty = await inquirer.prompt([
        {
            name : "trans",
            type : "list",
            message :"Please selecte What you want to do ",
            choices: ["Withdraw","Deposite","transaction","exit"] 


        }
    ])
    if(functionailty.trans  === "Withdraw" )
    { 
        let WithdrawAmmount = await inquirer.prompt ([
            {
                name: "amount",
                type: "input",
                message:" please enter amount, You wanna Withdraw"
            }
        ])
        let AmountAfterWithdraw = userAmount - WithdrawAmmount.amount

        console.log(`this is your remaining ammount after withdraw ${AmountAfterWithdraw}`)
        
    }else if(functionailty.trans  === "Deposite" )
    { 
        let DepositeAmmount = await inquirer.prompt ([
            {
                name: "amount",
                type: "input",
                message:" please enter amount, You wanna Deposite"
            }
        ])
        let AmounAfterDeposite = userAmount - DepositeAmmount.amount

        console.log(`this is your New ammount after Deposite ${AmounAfterDeposite}`)
        
    }else if(functionailty.trans  === "transaction" )
    { 
        let TransactonData = await inquirer.prompt ([
            {
                name: "amount",
                type: "input",
                message:" please enter amount, You wanna Transact"
            },
            {
                name: "email",
                type:"input",
                message:"Please enter userid , You wanted to transact"
            }
        ])

        let AmounAfterTransaction = userAmount - TransactonData.amount

        console.log(`this is your remaining ammount ${AmounAfterTransaction} after transaction to ${TransactonData.email}`)
    }  else if(functionailty.trans  === "exit")
    {
        console.log(`thank you for using Atm`)

    }
    
}


async function Restarting () {
    
    do 
    {
        await AtmCal();
       var restart = await inquirer.prompt(
            {
                type: "input",
                name: "again",
                message:" Do you wanna ATM more 'Y' or 'N' "
            }  
        )

        
    } while (restart.again == 'Y'||restart.again == 'y'||restart.again == 'Yes'||restart.again == 'yes' );

}    

await Restarting()