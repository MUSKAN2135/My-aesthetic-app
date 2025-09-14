import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaKey, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
    const [formData, setFormData] = useState({ Email: '', Password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        try {
            // const response = await axios.post("http://localhost:4000/api/v1/Loginuser", formData);
            navigate('/');
            toast.success('login successfully')
        } catch (error) {
            toast.error('login failed')
            setError('Login failed. Please check your Email and Password.');
            setSuccess('');
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="border-t-8 border-[#b18b5e]">
            <div className="flex flex-col items-center justify-center mt-24 px-4">
                <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="mb-6 text-center text-2xl font-semibold">Login</h2>
                    <form >
                        <div>
                            {error && <div className="mb-4 p-3 bg-red-500 text-white rounded">{error}</div>}
                            {success && <div className="mb-4 p-3 bg-green-500 text-white rounded">{success}</div>}
                            <div className="mb-6">
                                <label className="py-2 block font-medium">Email</label>
                                <div className="flex flex-row justify-center relative">
                                    <div className="p-3 bg-[#b18b5e] text-white rounded-l">
                                        <FaUser />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        name="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-[#b18b5e] rounded-r focus:outline-none focus:ring-1 focus:ring-[#b18b5e]" />
                                </div>
                            </div>
                            <div className="mb-6 relative">
                                <label className="py-2 block font-medium">Password</label>
                                <div className="flex flex-row justify-center relative">
                                    <div className="p-3 bg-[#b18b5e] text-white rounded-l flex items-center">
                                        <FaKey />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your Password"
                                        name="Password"
                                        value={formData.Password}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-[#b18b5e] focus:outline-none focus:ring-1 focus:ring-[#b18b5e]"
                                    />
                                    <div
                                        onClick={togglePasswordVisibility}
                                        className="px-3 py-2 cursor-pointer absolute right-0 top-1/2 flex justify-center items-center transform -translate-y-1/2"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6" onSubmit={handleSubmit} >
                                <button onClick={() => navigate('/')}
                                    type="submit"
                                    className="w-full cursor-pointer max-w-xs py-2 bg-[#b18b5e] text-white rounded font-semibold hover:bg-transparent focus:outline-none focus:ring-1 focus:ring-[#b18b5e]"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="text-center mt-6">
                        Don't have an account?
                        <button
                            className="text-blue-600 underline ml-1"
                            onClick={() => navigate('/signup')}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
