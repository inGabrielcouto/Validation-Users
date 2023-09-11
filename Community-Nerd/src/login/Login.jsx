import { useState } from "react"
import {useNavigate} from "react-router-dom"
const Login = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const history = useNavigate();



const handleEmail = (event) =>{
    setEmail(event.target.value);
};

const handlePassword = (event) => {
    setPassword(event.target.value)
}

const handleSubmit = (e) =>{
    e.preventDefault()

    const saveUser = JSON.parse(localStorage.getItem("user"))
    
    if(!saveUser){
        alert("Usuario nao encontrado. Cadastre-se primeiro")
        history("/")
    }

    if(email === saveUser.email && password === saveUser.password) {
        alert("Login realizado com sucesso!")
        history("/home")
    }else{
        alert("Credenciais invalidas. Tente Novamente")
        history("/")
    }
}



  return (
    <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
    
  )
}

export default Login