import React, {useState} from 'react';
import css from './skills.module.scss'

const skills = [
    {id: 1, name: 'HTML'},
    {id: 2, name: 'CSS'},
    {id: 3, name: 'Java Script'},
    {id: 4, name: 'React JS'},
]


const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(null)

    return (
        <div className={css.container}>
            <ul className={css.skills}>
                {
                    skills.map(({id, name}) => {
                        return <li
                            key={id}
                            onClick={() => setActiveSkill(name)}
                            className={name === activeSkill ? css.active : undefined}
                        >
                            {name}
                        </li>
                    })
                }
            </ul>
            <h1>{activeSkill}</h1>
        </div>
    );
};

export default Skills;