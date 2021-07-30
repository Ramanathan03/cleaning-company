const express = require('express')
let router = express.Router();
let cors = require("cors");
const env = require("dotenv");
const path = require("path");
env.config({ path: path.join(__dirname, ".env") });
const bodyParser = require('body-parser')

const stripe = require('stripe')(process.env.STRIPE_SCERET_TEST)

const app = express();



router.post('/payment', cors(), async(req,res)=>{
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
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/", router);
app.listen(process.env.PORT || 4000, ()=>{
	console.log("server is running")
})
app.use(express.static(path.join(__dirname, "globus/out")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "globus/out")));
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname , "globus/out/index.html")));
  });
} else {
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname , "globus/pages/_app.js")));
  });
}
