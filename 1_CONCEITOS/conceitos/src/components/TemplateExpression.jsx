import First from "./first"

// - template expression
const TemplateExpression = () => {
    const name = "guilherme"

    const info = {
        age: 31,
        job: "programador"
    }
  return (
    <div>
        <p>A soma é {9 + 28}</p>
        <p>bem vindo {name}</p>
        <p>Olá, {name} você tem {info.age} anos e é {info.job}</p>
        <First/>
    </div>
  )
}

export default TemplateExpression