import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadItems } from '../features/Slice';
import Header from "./Header";
import DataTable from "./DataTable";
import { Link } from "react-router-dom";

function ListEmployees() {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <h1>Current Employees</h1>
        <div className="select__filter">
          <div className="select__filter__entries">
            <p>Show</p>
            <select>
              <option defaultValue={true}>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <p>entries</p>
          </div>
          <div className="select__filter__search">
            <p>Search :</p>
            <input type="text" />
          </div>
        </div>

        {items && items.length > 0 ? (
          <DataTable headers={['First Name', 'Last Name', 'Date of Birth', 'Start Date', 'Street', 'City', 'State', 'Zip Code', 'Department']} data={items} />
        ) : (
          <p>No employees found</p>
        )}

        <div className="table__footer">
          <div className="table__footer__entries">
            <p>Showing {items.length} to {items.length} of {items.length} entries</p>
          </div>

          <div className="table__footer__pagination">
            <p>Previous</p>
            <p>Next</p>
          </div>
        </div>
        <Link to="/">Home</Link>
      </main>
    </>
  )
}

export default ListEmployees;