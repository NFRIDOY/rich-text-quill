import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RichTextEditor from './components/RichTextEditor'
import AdminPanel from './components/AdminPanel'
import OrderList from './components/OrderList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>Welcome</div>
        <AdminPanel />
        {/* <RichTextEditor /> */}
        
        {/* <OrderList /> */}
      </div>
    </>
  )
}

export default App
