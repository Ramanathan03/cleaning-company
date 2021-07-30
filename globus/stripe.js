import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './paymentForm.js'

const publicKey = 'pk_test_51JGsloKc1F4Owb91TWPAbFTYKBH4Npzx9DNURNT1jcjaOAyOb2KM6wHCfiVzKD4aX4hRfEwO6ILLXjXkF5FTS31f00sQ7tPN6v'
const stripePromise = loadStripe(publicKey);

export default function Stripecontainer () {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};
