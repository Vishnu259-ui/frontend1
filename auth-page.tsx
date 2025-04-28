import { useState } from "react";
import { useAuth } from "../hooks/use-auth";

export default function AuthPage() {
  const { loginMutation, registerMutation } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("donor");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      loginMutation.mutate({ username, password });
    } else {
      registerMutation.mutate({ username, password, userType });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">{isLogin ? "Login" : "Register"}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="input w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <select
              className="select w-full"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="donor">Donor</option>
              <option value="ngo">NGO</option>
            </select>
          )}
          <button
            type="submit"
            className="btn w-full bg-primary text-white hover:bg-primary-dark"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary hover:underline"
          >
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
