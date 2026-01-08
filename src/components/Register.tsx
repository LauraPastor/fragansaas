import React from 'react'
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className='relative p-8 max-w-5xl mx-auto'>
            <button
                onClick={() => navigate(-1)}
                className="
          fixed top-24 left-48
          p-2 rounded-full
          bg-gray-300 shadow-md
          hover:bg-gray-200
          cursor-pointer
          transition
          z-10
        "
                title="Go back"
            >
                <ArrowLeft size={20} />
            </button>
            {/* Title */}
            <h1 className="text-3xl font-medium mb-10 text-center">
                Create your account
            </h1>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="What is your name?"
                        className="w-full border px-4 py-2 rounded-md"
                        required
                    />
                </div>

                {/* Surname */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Surname<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="What is your surname?"
                        className="w-full border px-4 py-2 rounded-md"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full border px-4 py-2 rounded-md"
                        required
                    />
                </div>

                {/* Country */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Country<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full border px-4 py-2 rounded-md" required>
                        <option value="">Select country</option>
                        <option>Spain</option>
                        <option>Germany</option>
                        <option>France</option>
                        <option>Italy</option>
                    </select>
                </div>

                {/* Date of birth */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Date of birth<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        className="w-full border px-4 py-2 rounded-md"
                        required
                    />
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Gender<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full border px-4 py-2 rounded-md" required>
                        <option value="">Select gender</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Non-binary</option>
                        <option>Prefer not to say</option>
                    </select>
                </div>

                {/* Work in perfumery */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Do you work in perfumery?<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full border px-4 py-2 rounded-md" required>
                        <option value="">Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>

                {/* Type of professional */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Type of professional
                    </label>
                    <select className="w-full border px-4 py-2 rounded-md">
                        <option value="">Select professional type</option>
                        <option>Perfumer</option>
                        <option>Retailer</option>
                        <option>Distributor</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter a password"
                        className="w-full border px-4 py-2 rounded-md"
                        required
                    />
                </div>

                {/* Repeat Password */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Repeat password<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Repeat password"
                        className="w-full border px-4 py-2 rounded-md"
                        required
                    />
                </div>

                {/* Full-width checkboxes */}
                <div className="md:col-span-2 space-y-4">
                    <label className="flex items-start gap-2 text-sm">
                        <input type="checkbox" />
                        <span>
                            I want to receive exclusive news by email.
                        </span>
                    </label>

                    <label className="flex items-start gap-2 text-sm">
                        <input type="checkbox" required />
                        <span>
                            By creating the account, I accept the{" "}
                            <span className="underline cursor-pointer">
                                Terms and conditions of use
                            </span>{" "}
                            and the{" "}
                            <span className="underline cursor-pointer">
                                Privacy policy
                            </span>.
                            <span className="text-red-500">*</span>
                        </span>
                    </label>

                    <p className="text-xs text-gray-500">* Required field</p>
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="
              w-full
              bg-black
              text-white
              py-4
              text-sm
              tracking-widest
              uppercase
              hover:bg-gray-900
              transition
            "
                    >
                        End registration
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register