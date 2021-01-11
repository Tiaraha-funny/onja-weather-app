import React from 'react'

function Modal({search}) {
    const classModalName = search ? "displayBlock" : "displayNone"  
    return (
        <form className={classModalName}>
            <input type="text"/>
        </form>
    )
}

export default Modal
