import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';



function Dialogs(props) {
    
    let dialogElements = props.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
    let messageElements = props.messages.map(message => <Messages message={message.message} id={message.id}/>)
    
    
    return (
        <div className={s.dialogs}>
           <div> {dialogElements} </div>
           <div> {messageElements} </div>
        </div>
    );
}

export default Dialogs;
