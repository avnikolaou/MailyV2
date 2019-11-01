import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <div>
                <StripeCheckout
                    name={"Emaily"} // Application Name!
                    description={"5 Euro for 5 credits"}
                    amount={"500"}
                    currency={"EUR"}
                    token={token => this.props.handleToken(token)}
                    stripeKey={process.env.REACT_APP_STRIPE_KEY}
                >
                    <a className={"btn btn-info m-1 d-flex text-light"}>Add Credits!</a>
                </StripeCheckout>
            </div>
        );
    }
}

export default connect(null, actions)(Payments)
