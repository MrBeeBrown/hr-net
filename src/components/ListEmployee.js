import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadItems } from '../features/Slice';
import Header from "./Header";
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

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.startDate}</td>
                <td>{item.department}</td>
                <td>{item.birthday}</td>
                <td>{item.street}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>

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