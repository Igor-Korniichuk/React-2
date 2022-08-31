import React from "react";
import styles from './TodoList.module.css';

const TodoList = ({ todos }) => (
    <ul className={styles.TodoList}>
        {todos.map(({ id, text }) => (
            <li key={id} className={styles.TodoList__item}>
                <p className={styles.TodoList__text}>{text}</p>
            <button>Удалить</button>
            </li>
        ))}
    </ul>
);


export default TodoList;
