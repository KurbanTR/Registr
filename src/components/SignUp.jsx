import { useState } from 'react'
import s from '../style/SignUp.module.css'
import { Link } from 'react-router-dom'
import { users } from '../store/users'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [andpassword, setAndPassword] = useState('')
    const [offPassword, setOffPassword] = useState(false)

    const [error, setError] = useState(false)
    const [ok, setOk] = useState('')

    const id = users.length++

    const onHandleClick = () => {
        if(name == ''|| email == ''|| password == ''|| andpassword == ''){
            setError(true)
            setOk('')
        } else { 
            if(password !== andpassword){
                setOffPassword(true)
            } else {
                setError(false)
                setOffPassword(false)
                
                users.push({
                    id: id,
                    name: name,
                    email: email,
                    password: password,
                })
                setOk('o') 
            } 
        } 
    }


  return (
    <div className={s.center}>
      <div className={s.block}>
        <h1 className={s.block_text}>Регистрация аккаунта</h1>
        <div className={s.block_form}>
            <div className={s.block_form_input}>
                <p>Имя</p>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Введите имя...' type="text"/>
            </div>
            <div className={s.block_form_input}>
                <p>Почта</p>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Введите почту...' type="email"/>
            </div>
            <div className={s.block_form_input}>
                <p>Пароль</p>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Введите пароль...' type="password"/>
            </div>
            <div className={s.block_form_input}>
                <p>Повторите пароль</p>
                <input value={andpassword} onChange={e => setAndPassword(e.target.value)} placeholder='Введите пароль...' type="password"/>
                <p className={s.error}>{offPassword ? 'Повторный пароль не похож на предыдущий' : false}</p>
            </div>
        </div>
        <Link onClick={onHandleClick} className={s.block_button} to={ok == 'o' ? '/profil' : '/'}>Зарегистрироваться</Link>
        <p className={s.error}>{error ? 'Заполните все бланки' : false}</p>
        <Link to={'/login-in'} className={s.ok}>Войти</Link>
      </div>
    </div>  
  )
}
export const newUsers = users
export default SignUp