import React, {useState, useEffect} from "react";
import './style.css';

import Plus from '../../assets/plus.png';
import Logo from '../HeaderLogo/Logo';
import Edit from "./EditFile/EditFile";
import {Link} from "react-router-dom";

const Document = () => {

    const Docs = [
        {
            'text': '1 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their'
        },
        {
            'text': '2 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their'
        },
        {
            'text': '3 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their'
        },
        {
            'text': '4 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their'
        },
        {
            'text': '5 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their'
        },
        {
            'text': '6 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their'
        },
        {
            'text': '7 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their'
        },
        {
            'text': '8 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their'
        },
        {
            'text': '9 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their'
        }
    ];

    const [listOfDocs, setListOfDocs] = useState(Docs);

    return (
        <main className={'document_page'}>
            <header className={'document_header'}>
                <Logo className={'document_logo'}/>
                <p>Documents</p>
            </header>
            <section className={'documents_list_of_blocks'}>
                <label htmlFor="upload-photo" className={'document_add'}>
                    <img src={Plus} alt={'plus'}/>
                    <p>New</p>
                </label>
                <input type="file" name="photo" id="upload-photo"/>

                {
                    listOfDocs.map((val, index) => <Link to={'/edit'}>
                        <section className={'listOfDocs'} key={index}>
                            <p>{val.text.split(' ', 5).join(' ') + '...'}</p>
                        </section>
                    </Link>)
                }
            </section>
        </main>
    )

}

export default Document;