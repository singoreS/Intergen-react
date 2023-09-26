import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../Layout/RouteLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Contacte from "../Pages/contact/Contacte";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <RouteLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "",
				element: <Contacte /> ,
			},
		],
	},
]);

export default Router;