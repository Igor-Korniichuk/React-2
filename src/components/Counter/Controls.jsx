const Controls = ({onEncrement, onDecrement}) => (
    <div className="Counter__controls">
        <button type="button" onClick={onEncrement}>Увеличить на 1</button>
        <button type="button" onClick={onDecrement}>Уменшить на 1</button>
    </div>
)


export default Controls;