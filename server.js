const express = require('express')
let cors = require("cors");
const env = require("dotenv");
const path = require("path");
env.config({ path: path.join(__dirname, ".env") });
const bodyParser = require('body-parser')

const stripe = require('stripe')(process.env.STRIPE_SCERET_TEST)

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/payment', cors(), async(req,res)=>{
     let {amount, id, name} = req.body
     console.log(amount)
     try{
          const payment = await stripe.paymentIntents.create({
          	amount,
               customer:name,
          	currency:"GBP",
          	description:name +' made a payment',
          	payment_method:id,
          	confirm:true

          })
          console.log('sucessfull')
     }
     catch(error){
     	console.log(error)

     }
})

app.listen(process.env.PORT || 4000, ()=>{
	console.log("server is running")
})