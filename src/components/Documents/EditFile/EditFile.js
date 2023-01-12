import React, {useState, useEffect, useRef} from "react";
import './style.css';

import Arrow from '../../../assets/arrow.png';
import Send from '../../../assets/send.png';
import {Link} from "react-router-dom";

const Edit = () => {

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };
    return (<main className={'edit_page'}>
            <header className={'edit_header'}>
                <Link to={'/upload'}>
                    <section className={'edit_back'}>
                        <img src={Arrow} alt={'arrow'}/>
                        <p>Back</p>
                    </section>
                </Link>
                {document.queryCommandSupported('copy') &&
                    <img src={Send} alt={'send'} className={'edit_send'} onClick={copyToClipboard}/>}
            </header>
            <form className={'text_block'}>
                <textarea className={'text_area'} ref={textAreaRef}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
qui officia deserunt
                </textarea>
            </form>
        </main>)

}

export default Edit;