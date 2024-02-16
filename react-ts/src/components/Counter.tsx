type CounterProps = {
    count: number,
    setCount(count: number):void
}

const Counter = ({count, setCount}: CounterProps) => {
  return (
    <div>
        <h1>Count is {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter