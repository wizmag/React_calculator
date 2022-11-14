import React from "react";
import classes from "./Buttons.module.css";

const Buttons = (props) => {
    const numbers = (event) => {
        // let current = event.target.value
        const inputNumber = event.target.value;
        props.input(inputNumber);
    };

    const signa = (event) => {
        const inputSign = event.target.value;
        props.operations(inputSign);
    };

    return (
        <div className={classes.main}>
            <button
                className={`${classes.button} ${classes.button_operations}`}
                value=""
                onClick={props.reset}
            >
                C
            </button>
            <button
                className={`${classes.button} ${classes.button_operations}`}
                onClick={props.plusminus}
            >
                +/-
            </button>
            <button
                className={`${classes.button} ${classes.button_operations}`}
                onClick={props.percent}
            >
                %
            </button>
            <button
                className={`${classes.button} ${classes.button_operations}`}
                value="/"
                onClick={signa}
            >
                /
            </button>
            <button className={classes.button} value="7" onClick={numbers}>
                7
            </button>
            <button className={classes.button} value="8" onClick={numbers}>
                8
            </button>
            <button className={classes.button} value="9" onClick={numbers}>
                9
            </button>
            <button
                className={`${classes.button} ${classes.button_operations}`}
                value="*"
                onClick={signa}
            >
                X
            </button>
            <button className={classes.button} value="4" onClick={numbers}>
                4
            </button>
            <button className={classes.button} value="5" onClick={numbers}>
                5
            </button>
            <button className={classes.button} value="6" onClick={numbers}>
                6
            </button>
            <button
                className={`${classes.button} ${classes.button_operations}`}
                value="-"
                onClick={signa}
            >
                -
            </button>
            <button className={classes.button} value="1" onClick={numbers}>
                1
            </button>
            <button className={classes.button} value="2" onClick={numbers}>
                2
            </button>
            <button className={classes.button} value="3" onClick={numbers}>
                3
            </button>
            <button
                className={`${classes.button} ${classes.button_operations}`}
                value="+"
                onClick={signa}
            >
                +
            </button>
            <button
                className={`${classes.button} ${classes.button_wide}`}
                value="0"
                onClick={numbers}
            >
                0
            </button>
            <button className={classes.button} onClick={props.coma}>
                ,
            </button>
            <button
                className={`${classes.button} ${classes.button_operations}`}
                onClick={props.result}
            >
                =
            </button>
        </div>
    );
};

export default Buttons;
