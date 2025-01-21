import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);  // State to store user data
  const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", department: "" });  // New user form state
  const [editingUser, setEditingUser] = useState(null);  // State to handle editing

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch all users from the mock API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Add new user (POST request)
  const addUser = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      setUsers([...users, response.data]);  // Add new user to the list
      setNewUser({ firstName: "", lastName: "", email: "", department: "" });  // Clear input fields
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Edit existing user (PUT request)
  const editUser = (user) => {
    setEditingUser(user);  // Set the user to be edited
    setNewUser({ firstName: user.name, lastName: user.username, email: user.email, department: "" });  // Pre-fill the form with user data
  };

  // Save edited user (PUT request)
  const saveEditedUser = async () => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${editingUser.id}`, newUser);
      setUsers(users.map(user => (user.id === editingUser.id ? response.data : user)));  // Update the user in the list
      setEditingUser(null);  // Reset editing state
      setNewUser({ firstName: "", lastName: "", email: "", department: "" });  // Clear input fields
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  // Delete user (DELETE request)
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter(user => user.id !== id));  // Remove the deleted user from the list
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="App">
      <h1>User Management</h1>

      {/* Form for adding/editing users */}
      <div>
        <input
          type="text"
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
          placeholder="First Name"
        />
        <input
          type="text"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          placeholder="Last Name"
        />
        <input
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="text"
          value={newUser.department}
          onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
          placeholder="Department"
        />
        {/* Conditionally render Add or Save button */}
        {editingUser ? (
          <button onClick={saveEditedUser}>Save</button>
        ) : (
          <button onClick={addUser}>Add User</button>
        )}
      </div>

      {/* Display the list of users */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              {user.name} ({user.email}) - {user.department}
            </div>
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
