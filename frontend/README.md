# 🔍 Search App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A simple **search application** built with **React.js** frontend and **Node.js/Express** backend that stores and retrieves queries from a database.

---

## **Table of Contents**

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Prerequisites](#prerequisites)  
4. [Backend Setup](#backend-setup)  
5. [Frontend Setup](#frontend-setup)  
6. [Running the App](#running-the-app)  
7. [Available Scripts](#available-scripts)  
8. [Learn More](#learn-more)  
9. [License](#license)  

---

## **Features**

- Enter search queries in the frontend.  
- Display **recent queries** before saving them.  
- Save queries in the backend **after every 10 searches**.  
- View saved queries in a **styled table**.  

---

## **Tech Stack**

- **Frontend:** React.js, Axios, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** JSON / MongoDB / SQLite (as configured)  

---

## **Prerequisites**

- Node.js (v18+)  
- npm or yarn  
- Git  

---

## **Backend Setup**

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-repo-folder>/backend
```

2. Install backend dependencies:

```bash
npm install
```

3. Configure environment variables (if using a database). Example `.env`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/search-app
```

4. Start the backend server:

```bash
npm start
```

Backend will run on **http://localhost:5000**.

**API Endpoints:**

| Method | Endpoint          | Description                  |
|--------|-----------------|------------------------------|
| GET    | /get-queries     | Fetch saved queries          |
| POST   | /save-queries    | Save queries (`{ queries: [] }`) |

---

## **Frontend Setup**

1. Open a new terminal and navigate to the frontend folder:

```bash
cd ../frontend
```

2. Install frontend dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm start
```

Frontend will run on **http://localhost:3000**.

---

## **Running the App**

1. Make sure backend is running on **http://localhost:5000**.  
2. Make sure frontend is running on **http://localhost:3000**.  
3. Open the frontend in your browser.  
4. Enter queries in the input field.  
5. After every 10 queries, they will be automatically saved to the backend.  

---

## **Available Scripts**

In the **frontend project directory**, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.  
See the [running tests](https://facebook.github.io/create-react-app/docs/running-tests) section for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!  

See the [deployment](https://facebook.github.io/create-react-app/docs/deployment) section for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**  
It copies all configuration files and dependencies (webpack, Babel, ESLint, etc.) into your project so you can customize them. All other commands will still work.  

---

## **Learn More**

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).  

To learn React, check out the [React documentation](https://reactjs.org/).  

Other useful links:  

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)  
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)  
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)  
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)  
- [Troubleshooting Build Errors](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)  

---

## **License**

This project is licensed under the **MIT License**.
