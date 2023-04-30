import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ user }) => {
  if (!user) {
    return <Navigate to="/Login" replace />;
  }
  return <Outlet />;
};

function AppRoute() {
  const notes = useSelector(state => state);
  const user = useSelector(state => state.user);
  console.log(notes);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute user={user} />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
