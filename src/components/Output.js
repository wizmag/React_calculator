import React from "react";
import classes from "./Output.module.css";

const Output = (props) => {
    return (
        <div className={classes.output}>
            <p>{props.out}</p>
        </div>
    );
};

export default Output;
