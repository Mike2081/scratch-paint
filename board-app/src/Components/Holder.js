import React from 'react'
import Board from './Board'
import '../Styles/Holder.css'

function Holder() {
    return (
        <div className='holder'>
            <div>
                <input type="color" />
            </div>
            <div className='holder__boardContainer'>
                <Board />
            </div>
        </div>
    )
}

export default Holder
