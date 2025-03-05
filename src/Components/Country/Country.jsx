import { useState } from "react";
import "./Country.css"
const Country = ({country}) => {
    const {name,flags}=country
    // console.log(country)
    const [Visit,setVisit]=useState(false)
    function handleVisited(){
        setVisit(!Visit)
    }
    return (
        <div className="country">
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <button onClick={handleVisited} className="btn">{Visit?'visited':'visit'}</button>
            
        </div>

            
    );
};

export default Country;