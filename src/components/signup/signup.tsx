import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const [formData, setFormData] = useState({
        First_Name: '',
        Last_Name: '',
        Email: '',
        Password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        try {
            // const response = await axios.post("http://localhost:4000/api/v1/SignupUser", formData);
            navigate("/login");
            toast.success('Signup successfully!');
        } catch (err) {
            if (err) {
                toast.error('Email already exist!');
            }
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className=" border-t-8 border-[#b18b5e] p-5 px-8">
            <div className="flex justify-center w-full items-center my-10">
                <div className="md:w-96 w-full p-5 bg-white rounded-lg shadow-lg">
                    <h2 className="mb-4 text-center text-2xl font-semibold">Sign Up</h2>
                    <form>
                        <div className="mb-5">
                            <label className="block mb-1 font-medium">First Name</label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                name="First_Name"
                                value={formData.First_Name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-[#b18b5e] rounded-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-1 font-medium">Last Name</label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                name="Last_Name"
                                value={formData.Last_Name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border [#b18b5e] rounded-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border [#b18b5e] rounded-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-1 font-medium">Password</label>
                            <div className="flex items-center border border-[#b18b5e] rounded-md">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your Password"
                                    name="Password"
                                    value={formData.Password}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 rounded-l-md"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="px-3 text-gray-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div onSubmit={handleSubmit}>
                        <button
                            type="submit"
                            className="w-full bg-[#b18b5e] hover:bg-transparent text-white font-medium py-2 rounded-md mt-5"
                        >
                            Sign Up
                        </button>
                        </div>
                    </form>
                    <p className="text-center mt-5">
                        If you already have an account?
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="text-blue-600 underline ml-1"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>

    );
};
export default Signup;

