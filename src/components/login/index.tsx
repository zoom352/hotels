import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context";
import useInput from "../../hooks/useValidation";
import { RouteNames } from "../../router";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const router = useHistory()
    const email = useInput('', {isEmpty: true, minLengthError: 3, maxLengthError: 30, emailError: true})
    const password = useInput('', {isEmpty: true, minLengthError: 5, maxLengthError: 20, })

    const enter = () => {
      router.push(RouteNames.PAGE)
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      email.emailError ? null : setIsAuth(true)
      localStorage.setItem('auth', 'true')
    }

    return <div>
      <h1>регистрация</h1>
        {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>поле не может быть пустым</div>}
        {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>некоректная длинна</div>}
        {(email.isDirty && email.maxLengthError) && <div style={{color: 'red'}}>много символов</div>}
        {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>некоректный емаил</div>}
      <input onChange={e => (email.onChange(e))} onBlur={e => (email.onBlur(e))} value={email.value} name='email' type='text'/>
        {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>поле не может быть пустым</div>}
        {(password.isDirty && password.minLengthError) && <div style={{color: 'red'}}>некоректная длинна</div>}
        {(password.isDirty && email.maxLengthError) && <div style={{color: 'red'}}>много символов</div>}
      <input onChange={e => (password.onChange(e))} onBlur={e => (password.onBlur(e))} value={password.value} name='password' type='password'/>
      <button onClick={enter}>войти</button>
    </div>
}

export default Login;
