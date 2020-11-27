import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) =>{
const priceForStripe = price * 100;
const publishableKey= "pk_test_51HruRcFWN4xe8cKxkeSmRHC8LzYq5CYxbsGjm6sBNvlAHoU5WpH6Vol1toRubSuVpdlpn6VJeRX4c9mAsCL0VaLz00kRLZ3uQ6";
const onToken = token =>    {
	console.log(token);
	alert("Payment Successful!");
}

 return (
	 <StripeCheckout 
		label ="Pay Now"
		name= "CRWN Clothing"
		billingAddress
		shippingAddress
		image= "https://svgshare.com/i/CUz.svg"
		description = {`Your total is $${price}`}
		amount ={priceForStripe}
		panelLabel="Pay Now"
		token ={onToken}
		stripeKey={publishableKey}
	 />
 );

};
export default StripeCheckoutButton;





