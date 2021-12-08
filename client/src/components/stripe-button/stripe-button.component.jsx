import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Logo from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JtlnCAWDQHPZyRGAyakuM9x1js72tzR1RJz3J1fwMLG8kDZDzKNfDUGvx4KIdTEFeb6unzuwTngIKz7RmN0tSHo00xrsKZVIn";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        // alert(
        //   "There was an issue with your payment! Please make sure you use the provided credit card."
        // );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="All Goods Ltd."
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
