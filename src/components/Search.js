import { useState } from 'react';


function Search({onClickGo}){
    const [strS, setStrS] = useState('');

    function handleSearch() {
        onClickGo(strS);
    }

    function handleChange(evt) {
        setStrS(evt.target.value);
    }

    function handleClear() {
        setStrS('');
        onClickGo('');
    }

    return(
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input value={strS} onChange={handleChange} type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                    <button onClick={handleSearch} className="btn btn-info" type="button">Go!</button>
                    <button onClick={handleClear} className="btn btn-warning" type="button">Clear</button>
                </span>
            </div>
        </div>
    );
}
export default Search;