import React, { useState } from "react";
import "./UserForm.css";

const UserForm = ({ userIndex, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    mobile: "",
    gender: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userIndex, formData);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h3>Person {userIndex + 1} Details</h3>

      <div className="user-form__group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="user-form__group">
        <label>CNIC:</label>
        <input
          type="text"
          name="cnic"
          value={formData.cnic}
          onChange={handleChange}
          required
        />
      </div>

      <div className="user-form__group">
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>

      <div className="user-form__group">
        <label>Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="user-form__group">
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="user-form__button">Save Person</button>
    </form>
  );
};

export default UserForm;
