
import './App.css'

import MyComponents from './components/MyComponents'

import Title from './components/title'

function App() {
  const n = 22
  const redTitle = true
  return (
    
    <div className='App'>
      {/*css global*/}
      <h1>CSS no react</h1>
      {/*css no componente*/}
      <MyComponents />
      <p>Pegou o css no componente</p>
      {/*style line*/}
      <p style={{ color: "aqua", padding: "25px", fontFamily: "sans-serif", borderTop: "1px dotted blue" }}>este elemento tem estilo</p>
      {/* style inline dinâmico */}
      <h2 style={n >= 5 ? { color: "lime" } : { color: "black" }}>dinamicidade com css</h2>
      {/*classes dinamicas*/}
      <h2 className={redTitle ? "red-title" : "title"}>classes dinamicas</h2>
      <h2>Atualizações para testar a branch!!!</h2>
      {/* css modules */}
      <Title/>
    </div>

  )
}

export default App
