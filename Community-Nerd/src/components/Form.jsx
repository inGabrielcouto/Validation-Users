import { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Form.css";

const Form = () => {
    const [name , setUserName] = useState('')
    const [email , setUserEmail] = useState('')
    const [password , setUserPassword] = useState('')
    const [ConfirmedPassWord , SetConfirmedPassWord] = useState('')
    const history = useNavigate();

    const handleName = (event) =>{
        setUserName(event.target.value)
        
    }
    const handleEmail = (event) => {
        setUserEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setUserPassword(event.target.value)
    }

    const handleConfirmedPassword = (event) => {
        SetConfirmedPassWord(event.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando Formulario:")
        console.log("name:", name)
        console.log("email:" , email)
        console.log("senha:", password)
        console.log("Confirmação de senha:" , ConfirmedPassWord)
        setUserEmail('')
        setUserName('')
        setUserPassword('')
        SetConfirmedPassWord('')

        if(password !== ConfirmedPassWord){
            alert("As senhas não coincidem.")
            return
        }
        const user = {
            name,
            email,
            password,
        }

        localStorage.setItem("user", JSON.stringify(user))
        
        alert("Cadastro Realizado com sucesso")
        history("/login")
    }


    return (
        <div>
            <form className="container" onSubmit={onSubmit} >
                <h1>Cadastro</h1>
                <label htmlFor="name">
                    <span>name</span>
                    <input onChange={handleName} type="text" placeholder="digite seu nome" name="name" value={name} />
                </label>
                <label>
                    <span>email</span>
                    <input onChange={handleEmail} type="text" placeholder="Digite seu email " name="email" value={email}/>
                </label>
                <label>
                    <span>Senha</span>
                    <input onChange={handlePassword} type="password" placeholder="Digite sua senha" name="senha" value={password}/>
                </label>
                <label>
                    <span>Confirme sua senha</span>
                    <input onChange={handleConfirmedPassword} type="password" placeholder="Digite sua senha novamente" name="senha" value={ConfirmedPassWord}/>
                </label>
            <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default Form