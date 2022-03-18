import React from 'react'

const Item = ({item,className}) => {
    return (
            <div className={className}>
                <div>
                    <h4 className='city'>{item[4]} - {item[5]}</h4>
                    <p className='name'>{item[0]} - {item[3]}</p>
                </div>
                <h4 className='email'>Email: {item[2]}</h4>
            </div>
    )
}

export default Item