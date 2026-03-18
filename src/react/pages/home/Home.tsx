import { useState } from 'react'
import {ItemList} from '../../components/ItemList'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>

      </header>
      <h1>Albion Helper</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ItemList />
      </div>
    </>
  )
}

export default Home
