import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import Pagination from './components/Pagination';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
   <h1 className="text-center mb-4 text-primary">Dashboard</h1>


      <div className="mb-4 ">
      <input
      type="text"
      placeholder="Search users by name"
      className="form-control border-primary"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />

      </div>

      {currentUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}

      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredUsers.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
