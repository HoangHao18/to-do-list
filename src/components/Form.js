import { useState, useEffect } from "react";


function Form({onClickCancel, itemSelected, onClickSubmit}){
    const [task, setTask] = useState({
        id: '',
        name: '',
        level: 0
    });

    useEffect(()=>{
        if(itemSelected){
            setTask({
                id: itemSelected.id,
                name: itemSelected.name,
                level: itemSelected.level
            })
        }
    }, [itemSelected])

    function handleChange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setTask({
            ...task,
            [event.target.name]: value
        });

        // const target = event.target;    // input selectbox
        // const value  = target.type === 'checkbox' ? target.checked : target.value;
        // const name   = target.name;
    
        // setTask({
        //   ...task,
        //   [name]: value
        // });
    }

    

    function handleSubmit(event) {
        let item = {
            name: task.name,
            id: task.id,
            level: Number(task.level)
        };
        onClickSubmit(item);
        event.preventDefault();
    }

    return(
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form onSubmit={handleSubmit}  className="form-inline">
            
                    <div className="form-group">
                        <label className="sr-only" >label</label>
                        <input value={task.name} onChange={handleChange} name="name" type="text" className="form-control" placeholder="Task Name" />
                    </div>

                    <div className="form-group">
                        <label className="sr-only" htmlFor>label</label>
                        <select value={task.level} onChange={handleChange} name="level" className="form-control" required="required" >
                    Small
                            <option value={0}>Small</option>
                            <option value={1}>Medium</option>
                            <option value={2}>High</option>
                        </select>
                    </div>
                    <button  type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={onClickCancel} type="button" className="btn btn-default">Cancel</button>
                </form>
            </div>
        </div>
    );
}
export default Form;