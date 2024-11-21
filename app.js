const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// app.post('/nic', (req, res) => {
//     const userInput = req.body.nic;
//     const result = calculation(userInput.length, userInput);
//     res.json({ message: result });
// });


app.post('/nic', (req, res) => {
    const { nic } = req.body;

    const counter = nic.length;
    let resultMessage;

    if (counter === 10) {
        const year = `19${nic.slice(0, 2)}`;
        const genderNo = parseInt(nic.slice(2, 5));
        const gender = genderNo > 500 ? 'Female' : 'Male';
        resultMessage = `Your birth year is: ${year}. You are a ${gender}!`;
    } else if (counter === 12) {
        const year = nic.slice(0, 4);
        const genderNo = parseInt(nic.slice(4, 7));
        const gender = genderNo > 500 ? 'Female' : 'Male';
        resultMessage = `Your birth year is: ${year}. You are a ${gender}!`;
    } else {
        resultMessage = "Please enter your NIC Number correctly.";
    }

    setTimeout(() => {
        res.json({ message: resultMessage });
    }, 5250); 
});


// app.post('/nic',(req,res) => {
//     const userInput = req.body.nic;
//     const counter = userInput.length;

//     const result = calculation(counter, userInput);
//     res.json({ message: result });
// });


// const readline = require('readline');

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// rl.question("Enter your NIC Number : ",(userInput) => {
//     console.log(`${userInput}`);
//     const counter = userInput.length;  
    // console.log(`${counter}`);
   

    // access(userInput,counter);
    // calculation(counter,userInput);

    // rl.close();
// });





// function access(userInput,counter) {
//     for (let i = 0; i < counter; i++) {
//         const char = userInput[i];
        
//     }   
// }; 

// function calculation(counter, userInput) {
//     if (counter === 10) {
//         const year = `19${userInput.slice(0, 2)}`;
//         const genderNo = parseInt(userInput.slice(2, 5));
//         const gender = genderNo > 500 ? 'Female' : 'Male';
//         return `Your birth year is: ${year}. You are a ${gender}!`;
       

//     } else if (counter === 12) {
//         const year = userInput.slice(0, 4);
//         const genderNo = parseInt(userInput.slice(4, 7));
//         const gender = genderNo > 500 ? 'Female' : 'Male';
//         return `Your birth year is: ${year}. You are a ${gender}!`;
      

//     } else {
//         return "Please enter your NIC Number correctly.";
//     }
// }


// function calculation(counter,userInput){
//     if(counter == 10){
      
//         const firstNo = parseInt(userInput.slice(0,2));
//         console.log(`Your birth year is : 19${firstNo}`);

//         const genderNo1 = parseInt(userInput.slice(3,6));
      
//         if(genderNo1>500){
//             console.log(`You are a Female! Girls Power!!`);
//         }else{
//             console.log(`You are a Male! So Sad!!`);
//         }

//     }else if(counter == 12){
      
//         const firstNo = userInput.slice(0,4);
//         console.log(`Your birth year is : ${firstNo}`);

//         const genderNo2 = userInput.slice(5,8);
     
//         if(genderNo2>500){
//             console.log(`You are a Female! Girls Power!!`);
//         }else{
//             console.log(`You are a Male! So Sad!!`);
//         }
//     }else{
//         console.log("Please Enter your NIC Number correctly without keeping any spaces...");
//     }
// }

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});