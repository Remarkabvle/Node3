import React from "react";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../context/api/userApi";
import "./users.scss";

const Users = () => {
  const { data } = useGetUsersQuery();
  const [handleDelete] = useDeleteUserMutation();

  if (!data || !data.payload) return <div>Yuklanmoqda...</div>;

  const handleDeleteFunc = (id) => {
    if (window.confirm("O'chirmoqchimisiz?")) {
      handleDelete(id);
    }
  };

  return (
    <div className="users-container">
      <h2>Foydalanuvchilar</h2>
      <div className="users-cards">
        {data.payload.map((user) => (
          <div key={user._id} className="user-card">
            <img src={user.url} alt={user.fname} className="user-avatar" />
            <div className="user-info">
              <h3 className="user-name">{user.fname}</h3>
              <p className="user-username">@{user.username}</p>
              <p className="user-age">Yosh: {user.age}</p>
              <p className={`user-status ${user.isActive ? "active" : "inactive"}`}>
                Holat: {user.isActive ? "Faol" : "Nofaol"}
              </p>
              <div className="user-actions">
                <button className="edit-btn">Tahrirlash</button>
                <button className="delete-btn" onClick={() => handleDeleteFunc(user._id)}>O'chirish</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
