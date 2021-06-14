import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51J2MVEEsr8uVb8u3oBHFAJZVuqoZa80WHa4y88eIuR30LB7eDaTwWDgIQ7XPmD6q2mJzCBzYN3F26amucut8Emrq00Vb11DocI';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name = 'Crown Clothing Store'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total Price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;