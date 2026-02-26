import { Home, LogIn } from "lucide-react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Layout/MainLayout";
import HomePages from "./Pages/HomePages";
import Desitnations from "./Pages/Desitnations";
import Hotels from "./Pages/Hotels";
import Flights from "./Pages/Flights";
import Bookings from "./Pages/Bookings";
import ErrorPage from "./Pages/ErrorPage";
import Customization from "./ComponentPages/Customization";
import LocalEvents from "./ComponentPages/LocalEvents";
import CalculatedWeather from "./ComponentPages/CalculatedWeather";
import BestFlight from "./ComponentPages/BestFlights";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SingUp";
import PublicRoute from "./route/PublicRoute";
import AuthLayout from "./Layout/AuthLayout";
import ProtectedRoute from "./route/ProtectedRoute";
import DashBord from "./user/DashBord";
import PrivacySetting from "./user/PrivacySetting";
import PersonalDetails from "./user/UserDetails/PersonalDetails";
import PasswordChange from "./user/UserDetails/PasswordChange";
import SettingsDropdown from "./ComponentPages/SettingsDropdown";
import FavoriteBooking from "./ComponentPages/FavoriteBooking";
import Vehicle from "./ComponentPages/Vehicle";

const router = createBrowserRouter([

   {
    path: "/auth",
    Component: () => {
      return (
        <PublicRoute>
          <AuthLayout/>
        </PublicRoute>
      )
    } ,
    children: [
      {path:"/auth/login", Component: Login },
      {path:"/auth/signup", Component: SignUp },
    ]
  },

  {
    path: "/",
     Component: () => {
      return (
        <ProtectedRoute>
          <MainLayout/>
        </ProtectedRoute>
      )
    } ,
    children: [
      {index: true, Component: HomePages },
      {path:"/desitnations", Component: Desitnations },
      {path:"/hotels", Component: Hotels },
      {path:"/flights", Component: Flights },
      {path:"/bookings", Component: Bookings },
      {path:"/dashboard", Component: DashBord },
      {path:"/privacysetting", Component: PrivacySetting },
      {path:"/personaldetails", Component: PersonalDetails },
      {path:"/passwordchange", Component: PasswordChange },
      {path:"/settingsdropdown", Component: SettingsDropdown },
      {path:"/favoritebooking", Component: FavoriteBooking },
      {path:"/vehicle", Component: Vehicle },
    ]
  },

  {
    path: "*",
    Component: ErrorPage,
  },

  {
    path: "localevents",
    Component: LocalEvents,
  },

  {
    path: "weather",
    Component: CalculatedWeather ,
  },
  {
    path: "customization",
    Component: Customization ,
  },
  {
    path: "bestflight",
    Component: BestFlight ,
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
