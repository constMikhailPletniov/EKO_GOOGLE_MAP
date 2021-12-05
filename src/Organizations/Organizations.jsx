import './organizations.css';
import { companies } from './companies';
import { useState } from 'react';


export default function Organizations() {

    const [company] = useState(companies);

    return (
        <>
            <aside className="sideBar">
                <div className="containerHeaderTwo"><h2>Organizations List</h2></div>
                <div className="containerList">
                    <ul>{Object.entries(company).map(elem => {
                        return <div className="containerLiItems"><li><button key={elem[0].toString()}>{elem[0]}</button></li><a href={elem[1].href}>{elem[1].href}</a></div>
                    })}</ul>
                </div>

            </aside>
        </>
    );
}

