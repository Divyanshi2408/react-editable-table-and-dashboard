import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="card mb-3">
      <div className="card border-primary p-2">
        <h5 className="card-title text-primary">{user.name}</h5>
        <p className="card-text"><strong className="text-primary">Email:</strong> {user.email}</p>
        <p className="card-text"><strong className="text-primary">Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
