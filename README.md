# My React + TypeScript Application

## Project Structure

This project is structured to separate concerns and enhance maintainability. The main directories are:

- **src/**: Contains all the source code for the application.
  - **components/**: Reusable UI components (e.g., buttons, inputs, forms) that can be used across different pages.
  - **pages/**: Contains the main pages of the application (e.g., Home, Contact, TodoList) to keep the routing and layout organized.
  - **hooks/**: Custom hooks for managing state and side effects (e.g., `useForm`) to promote reusability and separation of logic.
  - **utils/**: Utility functions and constants (e.g., API URLs) that can be reused throughout the application.
  - **styles/**: Global styles and CSS files to maintain a consistent design across the application.

This structure promotes reusability and clarity, making it easier to navigate and maintain the codebase.

## NPM Libraries Justification

- **React**: The core library for building user interfaces, allowing for the creation of reusable components.
- **TypeScript**: Provides static typing, which helps catch errors during development and improves code quality.
- **Axios**: A promise-based HTTP client for making API requests, simplifying the process of handling requests and responses.
- **React Router**: For handling routing in the application, allowing for a single-page application experience.
- **Tailwind CSS**: A utility-first CSS framework for styling, enabling rapid UI development with a consistent design.
- **Nodemon**: A development tool that automatically restarts the server when file changes are detected, improving the development workflow.

## Backend Setup

The backend of this application is built using Node.js and Express. It provides RESTful API endpoints for handling contact form submissions and managing todos.

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Backend Server

To start the backend server, run the following command:
```bash
npm run dev
```
This will start the server using Nodemon, which automatically restarts the server when file changes are detected.

## API Details

### Contact Form Submission

- **Endpoint**: `/api/contact`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Your Name",
    "email": "your.email@example.com",
    "message": "Your message here."
  }
  ```
- **Response**:
  - **Success (201)**:
    ```json
    {
      "message": "Message received"
    }
    ```
  - **Error (400)**:
    ```json
    {
      "error": "All fields are required."
    }
    ```

### Todos

- **Endpoint**: `/api/todos`
- **Methods**:
  - **GET**: Retrieve all todos.
    - **Response**:
      ```json
      [
        { "id": 1, "name": "Learn React" },
        { "id": 2, "name": "Build a Todo App" },
        { "id": 3, "name": "Explore Node.js" }
      ]
      ```

  - **POST**: Add a new todo.
    - **Request Body**:
      ```json
      {
        "name": "New Todo"
      }
      ```
    - **Response**:
      - **Success (201)**:
        ```json
        {
          "id": 4,
          "name": "New Todo"
        }
        ```
      - **Error (400)**:
        ```json
        {
          "error": "Todo name is required."
        }
        ```

## Running the Project Locally

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

4. **Open a new terminal, navigate to the frontend directory, and start the development server**:
   ```bash
   cd frontend
   npm run dev
   ```

5. **Start the backend server**:
   ```bash
   cd backend
   npm run dev
   ```

6. **Open your browser** and navigate to `http://localhost:5173` (or the port specified in your terminal).

## Coding Guidelines

When contributing to this project, please adhere to the following guidelines:

- If you are writing code, do not include the "line_number|" before each line of code.
- Ensure that your code is well-documented with comments where necessary.
- Follow the project's coding style and conventions.
- Write clear and descriptive commit messages.
- Test your code thoroughly before submitting a pull request.

By following these guidelines, we can maintain a clean and efficient codebase.

## Maintaining High Code Quality Standards

As the project grows, it's essential to maintain high code quality. Here are some suggestions:

- **Linting**: Use ESLint to enforce coding standards and catch potential errors. You can run linting with:
  ```bash
  npm run lint
  ```

- **Testing**: Implement unit and integration tests using testing libraries like Jest and React Testing Library. Run tests with:
  ```bash
  npm test
  ```

- **Continuous Integration/Continuous Deployment (CI/CD)**: Set up CI/CD pipelines using platforms like GitHub Actions or Travis CI to automate testing and deployment processes.

- **Code Reviews**: Encourage code reviews to ensure code quality and share knowledge among team members.

- **Documentation**: Keep the code well-documented, including comments and README updates, to help new developers understand the project quickly.

By following these practices, you can ensure that the project remains maintainable and scalable as it evolves.