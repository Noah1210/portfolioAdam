import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../home/Home";
import PresentationPage from "../presentation/PresentationPage";
import LanguagesPage from "../languages/LanguagesPage";
import ProjectsPage from "../projects/ProjectsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/me',
        element: <PresentationPage />
    },
    {
        path: '/languages',
        element: <LanguagesPage />
    },
    {
        path: '/projects',
        element: <ProjectsPage />
    }
]);

export default function Router()
{
    return (
        <RouterProvider router={router} />
    );
}