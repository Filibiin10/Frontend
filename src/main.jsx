import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Evoting from './Pages/Evoting.jsx';
import Donation from './Pages/Donation.jsx';
import Events from './Pages/Events.jsx';
import Results from './Pages/Results.jsx';
import OurBlogs from './Pages/OurBlogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home/> },
      { path: "/evoting", element: <Evoting/> },
      { path: "/donation", element: <Donation/> },
      { path: "/events", element: <Events/> },
      { path: "/results", element: <Results/> },
      { path: "/blogs", element: <OurBlogs/> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
