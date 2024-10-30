import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItemToDB } from '../features/Slice';
import db from "../data/db";
import Header from "./Header";
import close from "../assets/close.svg";

function CreateEmployee() {

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemFirstName, setItemFirstName] = useState('');
  const [itemLastName, setItemLastName] = useState('');
  const [itemBirthday, setItemBirthday] = useState('');
  const [itemStartDate, setItemStartDate] = useState('');
  const [itemStreet, setItemStreet] = useState('');
  const [itemCity, setItemCity] = useState('');
  const [itemState, setItemState] = useState('');
  const [itemZipCode, setItemZipCode] = useState('');
  const [itemDepartment, setItemDepartment] = useState('');

  const handleAddItem = async (e) => {

    e.preventDefault();
    
    const newItem = {
      firstName: itemFirstName,
      lastName: itemLastName,
      birthday: itemBirthday,
      startDate: itemStartDate,
      street: itemStreet,
      city: itemCity,
      state: itemState,
      zipCode: itemZipCode,
      department: itemDepartment
    };

    const id = await db.items.add(newItem);

    dispatch(addItemToDB({ ...newItem, id }));

    setItemFirstName('');
    setItemLastName('');
    setItemBirthday('');
    setItemStartDate('');
    setItemStreet('');
    setItemCity('');
    setItemState('');
    setItemZipCode('');
    setItemDepartment('');

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  return (
    <>
      <Header />
      <main>
        <h1>Create a new employee</h1>

        <form>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" required onChange={(e) => setItemFirstName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" required onChange={(e) => setItemLastName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="birthday">Date of Birth</label>
            <input type="date" id="birthday" required onChange={(e) => setItemBirthday(e.target.value)} />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" required onChange={(e) => setItemStartDate(e.target.value)} />
          </div>
          <div className="address">
            <p>Address</p>
            <div>
              <label htmlFor="street">Street</label>
              <input type="text" id="street" required onChange={(e) => setItemStreet(e.target.value)} />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input type="text" id="city" required onChange={(e) => setItemCity(e.target.value)} />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <select id="state" name="state" required onChange={(e) => setItemState(e.target.value)}>
                <option value="Alabama" defaultValue={true}>Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District Of Columbia">District Of Columbia</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>
            <div>
              <label htmlFor="zip">Zip Code</label>
              <input type="number" min={1} max={99999} step={1} id="zip" required onChange={(e) => setItemZipCode(e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="department">Department</label>
            <select id="department" name="department" required onChange={(e) => setItemDepartment(e.target.value)}>
              <option value="sales" defaultValue={true}>Sales</option>
              <option value="marketing">Marketing</option>
              <option value="engineering">Engineering</option>
              <option value="human-resources">Human Resources</option>
              <option value="human-resources">Legal</option>
            </select>
          </div>
          <button type="submit" onClick={handleAddItem}>Save</button>
        </form>
        {isModalOpen && (
          <div className="modal">
            <div className="modal__content">
              <img src={close} alt="Close icon" onClick={closeModal} />
              <p>Employee created !</p>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default CreateEmployee;