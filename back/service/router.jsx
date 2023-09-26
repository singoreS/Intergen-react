import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "ehpad",
				element: <Ehpad />,
			},
		],
	},
]);

export default router;
