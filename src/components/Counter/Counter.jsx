import React from "react";
import styles from "./Counter.module.css";


class Counter extends React.Component {
    render() {
        return <div className={styles.Counter}>
                    <span className={styles.Counter__value}>0</span>

                    <div className="Counter__controls">
                <button type="button" onClick={() => {console.log("кликнули в увеличить");}}>Увеличить на 1</button>
                        <button type="button">Уменшить на 1</button>
                    </div>
                </div>
    }
}


export default Counter;

