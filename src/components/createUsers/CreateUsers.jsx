import React, { useState } from "react";
import { useCreateUserMutation } from "../../context/api/userApi";
import "./createUser.scss";

const initialState = {
  fname: "",
  lname: "",
  username: "",
  password: "",
  age: "",
  url: "",
  gender: "male",
  isActive: "true",
  budget: "",
};

const CreateUsers = () => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [handleCreate] = useCreateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCreate(formData);
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <div className="create-user-container">
      <h2 className="create-user-title">Yangi Foydalanuvchi Qo'shish</h2>
      <form className="create-user-form" onSubmit={handleSubmit}>
        <label>
          <span>Ism</span>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Ism"
          />
        </label>
        <label>
          <span>Familiya</span>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Familiya"
          />
        </label>
        <label>
          <span>Foydalanuvchi nomi</span>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Foydalanuvchi nomi"
          />
        </label>
        <label>
          <span>Parol</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Parol"
          />
        </label>
        <label>
          <span>Yosh</span>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Yosh"
          />
        </label>
        <label>
          <span>Profil URL</span>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Profil URL"
          />
        </label>
        <label>
          <span>Jinsi</span>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Erkak</option>
            <option value="female">Ayol</option>
          </select>
        </label>
        <label>
          <span>Faollik Holati</span>
          <select
            name="isActive"
            value={formData.isActive}
            onChange={handleChange}
          >
            <option value="true">Faol</option>
            <option value="false">Nofaol</option>
          </select>
        </label>
        <label>
          <span>Budjet</span>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budjet"
          />
        </label>
        <button type="submit" className="create-user-submit">
          Yaratish
        </button>
      </form>
    </div>
  );
};

export default CreateUsers;
