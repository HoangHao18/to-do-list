

import Item from "./Item";


function List({ listTask, onClickDelete, onClickEdit}){
    return(
        <div className="panel panel-success">
                <div className="panel-heading">List Task</div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th style={{width: '10%'}} className="text-center">#</th>
                            <th>Task</th>
                            <th style={{width: '20%'}} className="text-center">Level</th>
                            <th style={{width: '20%'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listTask.map(function(item, index){
                                return (
                                    <Item
                                        task = {item}
                                        stt = {index + 1}
                                        key = {item.id}
                                        onClickDelete = {onClickDelete}
                                        onClickEdit ={onClickEdit}
                                    />
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
    );
}
export default List;