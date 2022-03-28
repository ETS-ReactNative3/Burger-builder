import React from  'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './OrderSummary.css'
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
           <p className={classes.bottom}>Continue to check out?</p>
       </Auxiliary>
    )
}

export default OrderSummary;