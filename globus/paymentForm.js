import React, {usestate} from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios'
import $ from "jquery";

const Card_options = {
	iconStyle:'solid',

	style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
}
export default function PaymentForm(){
   
   const stripe = useStripe();
   const elements = useElements();
   
   const handleSubmit = async (event) => {
    event.preventDefault();

  

    
    const cardElement = elements.getElement(CardElement);

  
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if(!error){
    	try{
    		const {id} = paymentMethod
    		const response = await axios.post('http://localhost:4000/payment',{
    			amount:$('#input-currency').val() + '00',
          name:$('#fullname-input').value,
    			id
    		})
    		if(response.data.success){
    			console.log(sucess)
          console.log($('#fullname-input').value)
          window.location.reload();
    			
    		}
    	}catch(error){
    		console.log('error',error)
    	}
    }else{
    	console.log(error)
    }
}
return (
    <form onSubmit={handleSubmit} className="stripe-cardform">
      <CardElement options={Card_options} />
      <button className="btn btn-success button-stripe">
        Pay
      </button>
    </form>
  );
}