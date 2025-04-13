import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login Successful');
      navigate('/');
    } catch (err) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md px-6 py-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-md animate-fadeIn"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 text-gray-800">
          Welcome Back 👋
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 transform text-sm sm:text-base"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
