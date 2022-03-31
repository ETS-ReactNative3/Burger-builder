import React from  'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });

    return(
       <Auxiliary>
           <h3 className={classes.title}>Your Order</h3>
           <p>A delicious burger with the following ingredients </p>
           <ul className={classes.summary}>
               {ingredientSummary}
           </ul>
           <p><strong>Total Price : ${props.finalPrice.toFixed(2)}</strong></p>
           <p className={classes.bottom}>Continue to check out?</p>
           <Button
               clicked = {props.purchaseCancelled}
               btnType = "Danger">CANCEL</Button>
           <Button
               clicked = {props.purchaseContinued}
               btnType = "Success">CONTINUE</Button>
       </Auxiliary>
    )
}

export default OrderSummary;