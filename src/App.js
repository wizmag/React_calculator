import React, { Fragment, useReducer } from "react";
import HeaderState from "./components/header";
import Card from "./components/Card";
import Output from "./components/Output";
import Buttons from "./components/Buttons";

const defaultNumState = {
    num1: "0",
    operator: "",
    num2: "",
    flag: "inactive",
};

const numReducer = (state, action) => {
    if (action.type === "RESET") {
        return defaultNumState;
    }

    if (action.type === "MINUS") {
        if (state.flag === "preactive") return state;

        const num = state.flag === "inactive" ? "num1" : "num2";
        return {
            ...state,
            [num]: -state[num],
        };
    }

    if (action.type === "PERCENT") {
        if (state.flag === "inactive") {
            return {
                ...state,
                num1: state.num1 / 100,
            };
        }

        let op1 = state.num2 ? state.num2 : state.num1;
        let op2 =
            state.operator === "+" || state.operator === "-" ? state.num1 : 1;
        let res = {
            ...state,
            num2: (op1 / 100) * op2,
            flag: "active",
        };
        return res;
    }

    if (action.type === "RESULT") {
        if (state.num2 === "" && state.flag === "inactive") {
            return state;
        }

        const op1 = state.num1;
        const op2 = state.num2 ? state.num2 : state.num1;
        let res = {
            ...state,
            num1: eval(op1 + " " + state.operator + " " + op2),
            flag: "inactive",
            num2: op2,
        };
        return res;
    }

    if (action.type === "SIGN") {
        let temp;
        if (state.flag === "active") {
            temp = eval(state.num1 + " " + state.operator + " " + state.num2);
        }
        return {
            ...state,
            operator: action.payload,
            num1: temp ? temp : state.num1,
            num2: "",
            flag: "preactive",
        };
    }

    if (action.type === "DIGIT") {
        if (state.num1 === "0") {
            return { ...state, num1: action.payload };
        }

        if (state.flag === "inactive") {
            return { ...state, num1: state.num1 + action.payload };
        }
        return {
            ...state,
            flag: "active",
            num2: state.num2 + action.payload,
        };
    }

    if (action.type === "POINT") {
        const num = "num" + (state.flag === "inactive" ? "1" : "2");
        const hasPoint = state[num].includes(".");
        return hasPoint ? { ...state } : { ...state, [num]: state[num] + "." };
    }
};

function App() {
    const [numState, dispathCalculate] = useReducer(
        numReducer,
        defaultNumState
    );

    const signHandler = (item) => {
        dispathCalculate({ type: "SIGN", payload: item });
    };

    const resetHandler = () => {
        dispathCalculate({ type: "RESET" });
    };

    const numberInput = (item) => {
        dispathCalculate({ type: "DIGIT", payload: item });
    };

    const comaHandler = (item) => {
        dispathCalculate({ type: "POINT", payload: item });
    };

    const resultHandler = () => {
        dispathCalculate({ type: "RESULT" });
    };

    const percentHandler = () => {
        dispathCalculate({ type: "PERCENT" });
    };

    const minusHandler = () => {
        dispathCalculate({ type: "MINUS" });
    };

    let out = numState.num1;
    if (numState.flag === "active") {
        out = numState.num2;
    }

    if (out.length > 20) out = out.substring(0, 20);

    return (
        <Fragment>
            <HeaderState />
            <Card>
                <Output out={out} />
                <Buttons
                    input={numberInput}
                    reset={resetHandler}
                    coma={comaHandler}
                    operations={signHandler}
                    result={resultHandler}
                    percent={percentHandler}
                    plusminus={minusHandler}
                />
            </Card>
        </Fragment>
    );
}

export default App;
