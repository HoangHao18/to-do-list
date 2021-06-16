import React from 'react';
import classN from 'classnames';


const nameLevel = {
    0: 'Small',
    1: 'Medium',
    2: 'Hight'
}



function Item({task, stt, onClickDelete, onClickEdit}){

    const classNLevel = classN('label', {
        'label-default': task.level === 0,
        'label-info': task.level === 1,
        'label-danger': task.level === 2
    });

    return(
        <tr>
            <td className="text-center">{stt}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <span className={classNLevel}>{nameLevel[task.level]}</span></td>
                {console.log(task)}
            <td>
                <button onClick={()=>onClickEdit(task)} type="button" className="btn btn-warning">Edit</button>
                <button onClick={()=>onClickDelete(task.id)} type="button" className="btn btn-danger">Delete</button>
            </td>   
        </tr>
    ); 
}

export default Item;
