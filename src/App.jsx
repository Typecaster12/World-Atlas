import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Country from './Pages/Country';
import Contact from './Pages/Contact';
import AppLayout from './Components/Layout/AppLayout';
import ErrorPage from './Pages/ErrorPage';
import CountryDetails from './Components/Layout/CountryDetails';

//for routing, we need to create router;
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, //heder and footer will be same, middle sections is dynamic
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "country",
        element: <Country />
      },

      // for dynamic routing
      {
        path: "country/:id", //:id means => visit page whose id is (given id);
        element: <CountryDetails /> //which component we have to visit, is written here;
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }

]);



const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;