import React from 'react'
import Board from './Board'
import '../Styles/Holder.css'
import { EraseButton } from './EraseButton'

function Holder() {
    return (
        <div className='holder'>
            <div>
                <input type="color" />
                <EraseButton/>
            </div>
            <div className='holder__boardContainer'>
                <Board />
            </div>
        </div>
    )
}

export default Holder
