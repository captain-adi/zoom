import { useLogin } from "@/hooks/query"
import { User } from "lucide-react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";

type LoginFormInputs = {
  email: string;
  password: string;
};

function Login() {
  const {register,handleSubmit,reset} = useForm<LoginFormInputs>()
  const {mutate,isPending} = useLogin()
  const navigate = useNavigate();
  const onSubmit = (data: LoginFormInputs) => {
    mutate(data , {
      onSuccess: () => {
       navigate("/")
      }
    });
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 px-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <User className="w-12 h-12 rounded-full border-4 border-pink-600 p-1 text-pink-600 bg-pink-100" />
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Login to your account</p>
        </div>

        {/* Form */}
  <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium  mb-1">
              Email
            </label>
            <input
              disabled={isPending}
              {...register("email",{required : true})}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">
              Password
            </label>
            <input
              disabled={isPending}
              {...register("password",{required : true})}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none"
            />
          </div>


          <button
          disabled={isPending}
            type="submit"
            className="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md transition cursor-pointer"
          >
           {isPending ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Bottom Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-pink-600 hover:underline">
              Sign up
            </Link>
          </p>
          <Link
            to="/forgot-password"
            className="text-pink-500 hover:underline block mt-2"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
