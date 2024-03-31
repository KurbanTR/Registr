import { useState } from 'react'
import s from '../style/LoginIn.module.css'
import { Link } from 'react-router-dom'
import { newUsers } from './SignUp'

const LoginIn = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(false)
  const [ok, setOk] = useState('')

  const [notPassword, setNotPassword] = useState(false)
  const [notName, setNotName] = useState(false)

  const onHandleClick = () => {
    if(name == ''|| password == ''){
        setError(true), setOk(''), setNotPassword(false), setNotName(false)
    } else { 
      let nameFound = false;
      newUsers.forEach(item => {
        if(name == item.name){
          if(password == item.password){
            setOk('o');
            setNotPassword(false)
          } else setNotPassword(true);
          nameFound = true;
        }
      });
      if (!nameFound){ setNotName(true)} else setNotName(false);
      setError(false);
    } 
  }

  console.log(newUsers);
  return (
    <div className={s.center}>
      <div className={s.block}>
        <h1 className={s.block_text}>Регистрация аккаунта</h1>
        <div className={s.block_form}>
            <div className={s.block_form_input}>
                <p>Имя</p>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Введите имя...' type="text"/>
                {notName ? <p className={s.error}>Это имя не зарегистрировано</p> : false}
            </div>
            <div className={s.block_form_input}>
                <p>Пароль</p>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Введите пароль...' type="password"/>
                {notPassword ? <p className={s.error}>Не верный пароль</p> : false}
            </div>
        </div>
        <Link onClick={onHandleClick} to={ok == 'o' ? '/profil' : '/login-in'} className={s.block_button}>Войти</Link>
        <p className={s.error}>{error ? 'Заполните все бланки' : false}</p>
      </div>
    </div>  
  )
}

export default LoginIn
