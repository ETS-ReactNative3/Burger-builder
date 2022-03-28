import React from 'react'; 
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : 'Salad', type:'salad'},
    {label : 'Bacon', type:'bacon'},
    {label : 'Cheese', type:'cheese'},
    {label : 'Meat', type:'meat'},
];

const BuildControls = (props) => {
    
    return(
        <div className={classes.BuildControls}>
            <p className={classes.Price}><strong>Current Price: ${props.price.toFixed(2)}</strong></p>
            {controls.map((ctrl)=>{
                return (<BuildControl 
                    key= {ctrl.label} 
                    label ={ctrl.label}
                    added ={() => props.ingredientAdded(ctrl.type)}
                    deducted ={() => props.ingredientDeducted(ctrl.type)}
                    disabled = {props.disabled[ctrl.type]}
                    
                    />)
            })}
            <button disabled={!props.purchasable}
                    className={classes.OrderButton}
                    onClick = {props.ordered}>ORDER NOW</button>
        </div>
    )
}



export default BuildControls; 