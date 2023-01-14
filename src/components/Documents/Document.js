import React, {useState, useEffect} from "react";
import './style.css';
import {Link} from "react-router-dom";

import Plus from '../../assets/plus.png';
import Logo from '../HeaderLogo/Logo';
import Edit from "./EditFile/EditFile";
import Dots from '../../assets/dots.svg';
import Garbage from '../../assets/garbage.svg';


const Document = () => {

    const Docs = [
        {
            'id': 1,
            'text': '1 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their',
            'open': false
        },
        {
            'id': 2,
            'text': '2 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their',
            'open': false
        },
        {
            'id': 3,
            'text': '3 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their',
            'open': false
        },
        {
            'id': 4,
            'text': '4 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their',
            'open': false
        },
        {
            'id': 5,
            'text': '5 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their',
            'open': false
        },
        {
            'id': 6,
            'text': '6 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their',
            'open': false
        },
        {
            'id': 7,
            'text': '7 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their',
            'open': false
        },
        {
            'id': 8,
            'text': '8 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their',
            'open': false
        },
        {
            'id': 9,
            'text': '9 Lorem Ipsum and others are simply dummy pictures and videos with caption and details of their',
            'open': false
        }
    ];

    const [listOfDocs, setListOfDocs] = useState(Docs);
    const [isDelete, setIsDelete] = useState(false);

    console.log('***************8888****************')
    console.log(listOfDocs)
    console.log('***************8888****************')

    const handleClick = (id) => {
        setIsDelete(isDelete === id ? -1 : id );
    }

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
                    listOfDocs.map((val, index) =>
                        <section className={'general_block'}>
                            <Link to={'/edit'}>
                                <section className={'listOfDocs'} key={index}>
                                    <p>{val.text.split(' ', 5).join(' ') + '...'}</p>

                                </section>
                            </Link>
                            <img src={Dots}
                                 alt={'dots'}
                                 className={'listOfDocs_dots'}
                                 onClick={(e) => {
                                     // setIsDelete(!isDelete)
                                     handleClick(val.id)
                                     console.log(e, val)
                                 }}
                            />


                                <section className={'listOfDocs_delete'}
                                         style={{opacity: isDelete === val.id ? '1' : '0'}}
                                         key={val.id}
                                         onClick={(e) => {
                                             // setIsDelete(!isDelete)
                                             handleClick(val.id)
                                             console.log(e, val)
                                         }}
                                >
                                    <p>Delete</p>
                                    <img src={Garbage}
                                         alt={'garbage bucket'}
                                    />
                                </section>

                        </section>)
                }
            </section>
        </main>
    )

}

export default Document;