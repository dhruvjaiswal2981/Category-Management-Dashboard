import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/signup', { email, password, username });
      alert('Signup successful');
      navigate('/login');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md px-6 py-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-md animate-fadeIn"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 text-gray-800">
            Create an Account
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 text-sm sm:text-base"
            />
            <input
              type="password"
              placeholder="Password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 transform text-sm sm:text-base"
          >
            Sign Up
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <span
              className="text-purple-600 hover:underline cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Login here
            </span>
          </p>
        </form>
      </div>

  );
};

export default Signup;
