import './Form.css'
import { useState } from 'react'

const Form = ({userName, userEmail, userTel}) => {
  // Gerenciamento de dados (UseState)
  const [name, setName] = useState(userName)
  const [email, setEmail] = useState(userEmail)
  const [tel, setTel] = useState(userTel)
  const [desc, setBio] = useState("")
  const [pu, setPu] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name, email, tel, desc, pu)
    setEmail("")
    setName("")
    setTel("")
    setBio("")
    setPu("")
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
            {/* textArea */}
            <label>
              <span>descrição:</span>
              <textarea name="desc" placeholder='Digite sua descrição' onChange={(e) => setBio(e.target.value)} value={desc}></textarea>
            </label>
            {/* select */}
            <label>
              <span>função no sistema</span>
              <select name="pu" onChange={(e) => setPu(e.target.value)} value={pu}>
                <option value="user">Usuário</option>
                <option value="developer">programador</option>
                <option value="rules">regras</option>
              </select>
            </label>
            <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default Form