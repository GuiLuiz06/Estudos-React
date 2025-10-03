import './Form.css'
import { useState } from 'react'

const Form = ({userName, userEmail, userTel}) => {
  // Gerenciamento de dados (UseState)
  const [name, setName] = useState(userName)
  const [email, setEmail] = useState(userEmail)
  const [tel, setTel] = useState(userTel)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name, email)
  }
  console.log(name, email)
  return (
    <div>
        {/* criação do form */}
        {/* envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" required onChange={handleName}
                // controlled input
                value={name || ""}
                />
                <label htmlFor="tel">Telefone:</label>
                <input type="tel" name="tel" placeholder="Digite seu telefone" required onChange={(e) => setTel(e.target.value)}
                // controlled input
                value={tel || ""}
                />  
            </div>
            {/* label envolvendo input */}
            <label>
              <span>E-mail:</span>
              <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)}
              // controlled input
                value={email || ""}
              />
            </label>
            <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default Form