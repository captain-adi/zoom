import App from "@/App"
import Login from "@/pages/login/Login"
import SignUp from "@/pages/singup/SignUp"
import { createBrowserRouter } from "react-router-dom"

const routes = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/login",
                element : <Login/>
            },
            {
                path : "/signup",
                element : <SignUp/>
            }
        ]
    }
])
export default routes