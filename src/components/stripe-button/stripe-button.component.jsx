import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pubKey =
    "pk_test_51JtlnCAWDQHPZyRGAyakuM9x1js72tzR1RJz3J1fwMLG8kDZDzKNfDUGvx4KIdTEFeb6unzuwTngIKz7RmN0tSHo00xrsKZVIn";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="All Goods"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pubKey}
    />
  );
};

export default StripeCheckoutButton;
