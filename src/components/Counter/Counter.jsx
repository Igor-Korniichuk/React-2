import React from "react";
import styles from "./Counter.module.css";


class Counter extends React.Component {
    handleEncrement = (event) => {
        console.log("кликнули в увеличить");

        const target = event.target;  
        // для получения event.target в асинхронном коде записываем в переменную
        
        setTimeout(() => { console.log(target) }, 1000);
    }

    handleDecrement = () => {}



    render() {
        return <div className={styles.Counter}>
                    <span className={styles.Counter__value}>0</span>

                    <div className="Counter__controls">
                        <button type="button" onClick={this.handleEncrement}>Увеличить на 1</button>
                        <button type="button" onClick={this.handleDecrement}>Уменшить на 1</button>
                    </div>
                </div>
    }
}


export default Counter;

