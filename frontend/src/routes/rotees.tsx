import App from "@/App"
import Video from "@/components/video/Video"
import Dashboard from "@/pages/dashboard/Dashboard"
import Login from "@/pages/login/Login"
import SignUp from "@/pages/singup/SignUp"
import { createBrowserRouter } from "react-router-dom"

const routes = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Dashboard/>
            },
            {
                path : "/login",
                element : <Login/>
            },
            {
                path : "/signup",
                element : <SignUp/>
            },
            {
                path : "/video",
                element : <Video/>
            }
        ]
    }
])
export default routes