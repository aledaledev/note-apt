import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAll, filterImportant, filterNoImportant } from "../reducers/noteReducer";

const Filters = () => {

    const dispatch = useDispatch()

  return (
    <div>
        <div>
            <label htmlFor="all">all</label>
            <input
                type="radio"
                name="filter"
                value='all'
                id="all"
                onChange={() => dispatch(filterAll())}
                defaultChecked
                />
        </div>
        
        <div>
            <label htmlFor="important">important</label>
            <input
                type="radio"
                name="filter"
                id="important"
                value='important'
                onChange={(e) => dispatch(filterImportant())}
            />
        </div>

        <div>
            <label htmlFor="no-important">no important</label>
            <input
                type="radio"
                name="filter"
                id="no-important"
                value='no important'
                onChange={() => dispatch(filterNoImportant())}
            />
        </div>

    </div>
  );
};

export default Filters;
