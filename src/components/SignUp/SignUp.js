import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import '../LogIn/style.css';

import Logo from '../HeaderLogo/Logo';

const LogIn = () => {

    return (
        <main>
            <Logo />
            <section className={'login_block'}>
                <h1 className={'login_text'}>Sign up</h1>

                <section className={'register_inputs'}>
                    <input className={'email'} type={'email'} placeholder={'Email'}/>
                    <input className={'password'} type={'password'} placeholder={'Password'}/>
                    <input className={'password'} type={'password'} placeholder={'Repeat password'}/>
                    <Link to={'/'}><button className={'login_button'}>Sign up</button></Link>
                </section>

                <footer className={'signup_footer'}>
                    <p>Already registered?</p>
                    <Link to={'/'} className={'signup_link'}>Log in</Link>
                </footer>
            </section>
        </main>
    )

}

export default LogIn;