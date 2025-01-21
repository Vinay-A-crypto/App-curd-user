User CRUD Application

This project is a simple web application that allows users to view, add, edit, and delete user details using a mock backend API (JSONPlaceholder).

Features

View Users: Displays a list of users with details like ID, First Name, Last Name, Email, and Department.

Add User: Allows adding a new user to the list.

Edit User: Enables editing details of an existing user.

Delete User: Removes a user from the list.

Error Handling: Handles errors gracefully and displays error messages when API calls fail.

Technologies Used

Frontend: React.js

HTTP Requests: Axios

Mock Backend API: JSONPlaceholder

Setup and Installation

Clone the Repository:

git clone https://github.com/Vinay-A-crypto/App-curd-user.git
cd App-curd-user

Install Dependencies:
Make sure you have Node.js installed. Then, run:

npm install

Run the Application:
Start the development server:

npm start

This will open the application in your default browser at http://localhost:3000/.

Folder Structure

App-curd-user/
|-- src/
|   |-- components/
|   |   |-- UserList.js  // Displays the list of users
|   |   |-- UserForm.js  // Form for adding/editing users
|   |-- App.js          // Main application file
|   |-- index.js        // Entry point
|-- package.json        // Project configuration
|-- README.md           // Project documentation

JSONPlaceholder Endpoints Used

GET /users: Fetches a list of users.

POST /users: Simulates adding a new user.

PUT /users/:id: Simulates updating user details.

DELETE /users/:id: Simulates deleting a user.

How to Use

View Users: The homepage displays a list of users fetched from the API.

Add User:

Click the "Add User" button.

Fill in the form with the user's details.

Click "Submit" to add the user.

Edit User:

Click the "Edit" button next to a user.

Modify the user details in the form.

Click "Save" to update the user.

Delete User:

Click the "Delete" button next to a user.

Confirm the action to remove the user.

Challenges Faced

Merging unrelated histories while pushing to GitHub.

Resolving dependency issues with npm install.

Configuring Axios for proper error handling.

Future Improvements

Implement pagination or infinite scrolling for the user list.

Add client-side validation for the user input form.

Enhance styling for better user experience.
