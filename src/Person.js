import React, { useState, useEffect } from 'react';

export default function Person(props) {
    console.log(props.data.phone)
    const { title, first, last } = props.data.name
    const {thumbnail} =props.data.picture;
    const {email} = props.data;
    const {phone} = props.data;
    const {age} = props.data.dob;
    
    const [isClicked, setIsClicked] = useState(false)

    useEffect(()=>{
        console.log(isClicked)
    },[isClicked])
   
   
    const handleClick=() =>{

        setIsClicked(!isClicked)

    }

    const buttonText = isClicked ? 'See Less' : 'See more';
    
    return( <li className="person-info">
        
         <img src={thumbnail} alt='thumbnail picture'/>   
            <h3>{`${title}. ${first} ${last}`}</h3>
            {isClicked && <ul className="person-data">
                <li>{`Age: ${age}`}</li>
                <li>{`Phone: ${phone}`}</li>
                <li>{`Email: ${email}`}</li>
                </ul>}
            <button onClick={handleClick}>{buttonText}</button>


        
        </li>)
}