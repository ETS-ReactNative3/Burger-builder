import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css'
// import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
const Burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredient)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_, i) =>{
                return (<BurgerIngredients key={igKey + 1} type={igKey} />);
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredient.length === 0) {
        transformedIngredient = <p>Please start adding ingredients</p>
    }
    // console.log(transformedIngredient)
    return(
        <div className = {classes.Burger}>
            <BurgerIngredients type ="bread-top"/>
            {transformedIngredient}
            <BurgerIngredients type ="bread-bottom"/>
        </div>
    )
}
export default Burger;