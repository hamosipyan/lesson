import React, {useState} from 'react';
import css from './header.module.scss'

const menu = [
    {
        id:1,
        name: 'Home',
    }   ,
    {
        id:2,
        name: 'About',
    } ,
    {
        id:3,
        name: 'Skills',
    } ,
    {
        id:3,
        name: 'Contacts',
    }
]



const Header = () => {
const [activeLink, setActiveLink] = useState('Home')


    return (
        <div className={css.header}>
            <ul className={css.menu}>
                {
                    menu.map(({id, name}) => {
                        return (
                            <li>
                                <a className={activeLink === name ? css.activeLink : undefined} href="#" onClick={() => setActiveLink(name)}>
                                    {name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Header;