import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ExplorePage from './pages/Explore';
import ProfilePage from './pages/Profile';
import RootLayout from './pages/Root';
import {OwnerActivitiesPage} from './pages/OwnerActivities';
import LogInPage from './pages/LogIn/LogIn';
import  ProtectedRoute  from './pages/LogIn/ProtectedRoute';
import { Auth } from 'firebase/auth';
import Activity from './components/Activity';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LogInPage/>,
    
  },
  {
    path: '/root', 
    element: 
      <ProtectedRoute>
        <RootLayout/>
      </ProtectedRoute>,
        
      
    children: [
      {index:true, element: <ExplorePage/>}, 
      {path:'profil', element: <ProfilePage/>},
      {path:'profil/duzenlenen-aktiviteler', element: <OwnerActivitiesPage/>}, 
      {path:'profil/katilinan-aktiviteler', }, 
      
    ]
  }
  
  
])

function App() {
  return (
    <>
    
      <RouterProvider router={router}/>
      {/*<Routes>
        <Route path="/" element={<LogInPage />} />
        <Route
          path="/root"
          element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          }
          
        />
        </Routes>*/}
      
      
    </>
  )
  
}

export default App;
