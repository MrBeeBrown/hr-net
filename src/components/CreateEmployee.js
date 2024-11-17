import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItemToDB } from '../features/Slice';
import db from "../data/db";
import Header from "./Header";
import DatePicker from './DatePicker';
import Dropdown from "./Dropdown";
import Modal from "./Modal";

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
  const stateOption = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]
  const departmentOption = [
    'Sales',
    'Marketing',
    'Engineering',
    'Human Resources',
    'Legal',
  ]

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
      department: itemDepartment,
    };

    const id = await db.items.add(newItem);
    dispatch(addItemToDB({ ...newItem, id }));

    setIsModalOpen(true);
    resetForm();
  };

  const resetForm = () => {
    setItemFirstName('');
    setItemLastName('');
    setItemBirthday('');
    setItemStartDate('');
    setItemStreet('');
    setItemCity('');
    setItemState('');
    setItemZipCode('');
    setItemDepartment('');
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

        <form onSubmit={handleAddItem}>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" required onChange={(e) => setItemFirstName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" required onChange={(e) => setItemLastName(e.target.value)} />
          </div>
          <DatePicker
            id="birthday"
            label="Date of Birth"
            value={itemBirthday}
            onDateChange={setItemBirthday}
          />
          <DatePicker
            id="startDate"
            label="Start Date"
            value={itemStartDate}
            onDateChange={setItemStartDate}
          />
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
            <Dropdown options={stateOption} label="State" onSelect={(option) => setItemState(option)} />
            <div>
              <label htmlFor="zip">Zip Code</label>
              <input type="number" min={1} max={99999} step={1} id="zip" required onChange={(e) => setItemZipCode(e.target.value)} />
            </div>
          </div>
          <Dropdown options={departmentOption} label="Department" onSelect={(option) => setItemDepartment(option)} />
          <button type="submit">Save</button>
        </form>
        <Modal isOpen={isModalOpen} onClose={closeModal} children={<p>Employee created!</p>} />
      </main>
    </>
  );
}

export default CreateEmployee;