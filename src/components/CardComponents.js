import React from 'react';



const Card = (props) => {

    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{props.user.name}</h5>
                <h6 className='card-subtitle'>{props.user.company.name}</h6>
                <p className='card-text'>{props.user.company.catchPhrase}</p>
            </div>
        </div>
    );
}

export default Card;