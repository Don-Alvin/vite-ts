import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import List from "./List"

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Heading title={'Hello'} />
      <Section title={'Hello again'}>This is my section</Section>
      <Counter count={count} setCount={setCount} />
      <List items={['Coffee', "Tacos", "Code"]} render={(item: string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App