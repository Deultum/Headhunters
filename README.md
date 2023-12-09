# Headhunters

React endcourse project
Project uses SoftUni Practice server .
To start the project write in the console :
node server.js
npm run dev

1. Project structure
   The project follows a standard React application structure with the following main directories:
   "client" contains the main application code and assets
   "src" contains components, hooks, services and utils.
   -components - contains various components used in the application

- context - gives access to the data throughout the app components
- hooks -
  useForm - manages the form onSubmit and onChange
  usePersistedState hook - keeps the login status of the user and makes it accessible wherever needed
- services -
  authService - responsible for login , logout and register of the user
  villanService - requests the data needed in the components fillment

2. Features

**User Authentication:**

- The application provides user authentication using custom `AuthGuard`.
- New users can sign up and existing users can log in to access protected routes.

**Villan List**

- The application allows users to view a catalog of villans fetched from the backend API.
- Villans are displayed in a grid format, and users can click on a villan's card to view its details.

  **Captured list**
- Loged in users are able to access captured villans list with info who captured it.


  **Villan Details:**

  - The application provides a separate page to display detailed information about a selected villan.
  - Users can view the villan's name, crime, cover image, and other relevant details.

  **Villan Management (Protected Routes):**

  - Authenticated users have access to additional features for villan management.
  - Users can add new villans to the catalog by providing villan details through a form.
  - Users can edit existing villans and update their details.
  - Users can delete villans from the catalog.

  **API Integration:**

  - The application communicates with a backend API to fetch book data and manage books.
  - API interactions are handled using React fetch and custom service methods.

  **Responsive Design:**

  - The application is designed to be responsive and work seamlessly on various devices and screen sizes.

**Note:**
This documentation provides an overview of the key features and structure of the React Headhunters project. Additional details, such as API endpoints, authentication methods, and specific implementation details, may be present in the actual project files. For a complete understanding, developers are encouraged to review the source code and comments within the project files.
