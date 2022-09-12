const express = require("express");
const cors = require("cors");
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Halloooooooo")
})
app.listen(5000,()=>console.log("Servar Running"));


const contactEmail = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure: true,
    auth: {
        user: "ahmedgamal10122000@gmail.com",
        pass: 'iwmqztxjgzjpqvsg'
    }
});

contactEmail.verify((error)=>{
    if(error){
        console.log('Error')
    }else{
        console.log("Ready to send")
    }
})

app.post('/Contect',(req,res)=>{
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const massage = req.body.massage;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: 'ahmedgamal10122000@gmail.com',
        subject: "Contect From Portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Massage: ${massage}</p>`
    };
    contactEmail.sendMail(mail,(error)=>{
        if(error){
            res.json(error);
        }else{
            res.json({code: 200, status:"Massage Sent"})
        }
    })
})