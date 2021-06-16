import Search from "./Search";
import Sort from "./Sort";
import classN from 'classnames';

function Control({
    onClickAdd,
    isShowForm,
    onClickSearchGo,
    orderBy,
    orderDir,
    onClickSort
}){
    return(
        <div className="row">
            {/* SEARCH : START */}
              <Search  onClickGo = {onClickSearchGo} />
              {/* SEARCH : END */}

            {/* SORT : START */}
            <Sort
                 orderBy={orderBy}
                 orderDir={orderDir}
                 onClickSort={onClickSort}
            />
            {/* SORT : END */}

             {/* ADD : START */}
             <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                {/* {returnForm(props.open)} */}
                <button onClick={onClickAdd} 
                    type="button" 
                    className={classN('btn btn-block', {
                        'btn-info': !isShowForm,
                        'btn-success': isShowForm,
                    })}>
                        {
                            isShowForm ? 'Close Form' : 'Add Task'
                        }
                </button>;
            </div>
            {/* ADD : END */}

        </div>
    );
}
export default Control;