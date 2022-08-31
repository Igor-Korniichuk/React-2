import React from "react";
import Controls from "./Controls";
import styles from "./Counter.module.css";


class Counter extends React.Component {

    static defaultProps = {
        initialValue: 0,
    }

    static propTypes = {

    }
            state = {
            value: this.props.initialValue,
        };


    handleEncrement = () => {
        // const target = event.target;
        // // для получения event.target в асинхронном коде записываем в переменную        
        // setTimeout(() => { console.log(target) }, 1000);
        this.setState(prevState => ({value: prevState.value + 1,}))       
    }

    handleDecrement = () => {
        this.setState(prevState => ({value: prevState.value - 1,}))
    }



    render() {
        return <div className={styles.Counter}>
                    <span className={styles.Counter__value}>{this.state.value}</span>
            <Controls onEncrement={this.handleDecrement} onDecrement={this.handleEncrement } />                    
                </div>
    }
}


export default Counter;

