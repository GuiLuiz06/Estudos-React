import First from './components/first'
// - importando componentes
import './App.css'

import TemplateExpression from './components/TemplateExpression'

import Events from './components/Events'

function App() {
  return (
    <div className='App'>
      {/* comentário dentro da função */}
      <h1>Meu primeiro componente</h1>
      <First/>
      <TemplateExpression/>
      <Events/>
    </div>
  )
}

export default App
