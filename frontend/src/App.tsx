import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Root</h1>
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <h1>About</h1>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
