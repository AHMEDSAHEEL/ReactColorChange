import React from 'react'
 //import colornames from 'colornames'
 import colornames from 'colornames'
const Mincont = ({ color, setColor,setHexValue,handle}) => {



    return (
        <form className='addForm' onSubmit={(e) => e.preventDefault()}>

            <input
                type='text'
                id='input'
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    setHexValue(colornames(e.target.value)) 
                }
                
                }
                placeholder='enter color name:' />
               
               <button onClick={handle} >change Text color</button>
        </form>
    )
}

export default Mincont