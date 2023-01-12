import React from "react";
import { Link } from "react-router-dom";
import './style.css';

import Logo from '../HeaderLogo/Logo';

import Google from '../../assets/google.svg';
import Linkedin from '../../assets/linkedin.svg';
import Facebook from '../../assets/facebook.svg';
import Apple from '../../assets/apple.svg';

const LogIn = () => {

    return (
        <main>
            <Logo />
            <section className={'login_block'}>
                <h1 className={'login_text'}>Log in</h1>

                <section className={'login_inputs'}>
                    <input className={'email'} type={'email'} placeholder={'Email'}/>
                    <input className={'password'} type={'password'} placeholder={'Password'}/>
                    <Link to={'/upload'}><button className={'login_button'}>Log in</button></Link>
                </section>

                <section className={'login_with'}>
                    <p>Log in with</p>
                    <section className={'login_companies'}>
                        <img src={Google} alt={'google'}/>
                        <img src={Linkedin} alt={'linkedin'}/>
                        <img src={Facebook} alt={'facebook'}/>
                        <img src={Apple} alt={'apple'}/>
                    </section>
                </section>
                <footer className={'login_footer'}>
                    <p>Don't have an account?</p>
                    <Link to={'/signup'} className={'signup_link'}>Sign up</Link>
                </footer>
            </section>
        </main>
    )

}

export default LogIn;