import React from "react";

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChanged = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <React.Fragment>
            <input 
                className="TodoSearch"
                placeholder="Cebolla"
                value={searchValue}
                onChange={onSearchValueChanged}
            />
            <p>{ searchValue }</p>
        </React.Fragment>
    )
}

export {TodoSearch};