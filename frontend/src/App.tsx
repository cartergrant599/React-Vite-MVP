import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Todo = lazy(() => import("./pages/TodoList"));

const App = () => {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <div className="p-20">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </Suspense>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
