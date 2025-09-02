import { useSignup } from "@/hooks/query";
import type { IUser } from "@/type/types";
import { User } from "lucide-react";
import { useForm } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit } = useForm<IUser>();
  const { mutate } = useSignup();

  const onSubmit = (data: IUser) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <User className="w-12 h-12 rounded-full border-4 border-pink-600 p-1 text-pink-600 bg-pink-100" />
          <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 text-sm">Sign up to get started</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Name
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              placeholder="JohnDoe"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Sign Up
          </button>
        </form>

        {/* Bottom Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-pink-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
