'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { useEffect } from "react";
import { isAuthenticated } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  useEffect(() => {
  if (isAuthenticated()) router.push("/items");
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email,password);
    if (!success) return setError("Invalid credentials");
    router.push("/items");
  };
const handleLogout = () => {
  logout();
  router.push("/login");
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-[350px] space-y-4">
        <h2 className="text-2xl font-black text-center">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input className="w-full border p-3 rounded-lg" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full border p-3 rounded-lg" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700">
          Login
        </button>
        <p className="text-xs text-center text-slate-500">
          admin@example.com | 123456
        </p>
      </form>
    </div>
  );
}
