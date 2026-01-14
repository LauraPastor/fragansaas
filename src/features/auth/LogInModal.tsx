import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "./authSlice";

interface LogInProps {
    isOpen: boolean;
    onClose: () => void;
}

const LogInModal = forwardRef<HTMLDivElement, LogInProps>(
    ({ isOpen, onClose }, ref) => {
        const navigate = useNavigate();
        const dispatch = useDispatch();

        if (!isOpen) return null;

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();

            // 🔹 TEMP fake user (until real backend)
            dispatch(
                loginSuccess({
                    id: 1,
                    email: "user@example.com",
                    name: "Laura",
                })
            );

            onClose();
            navigate("/profile");
        };

        return (
            <div className="fixed inset-0 z-[201] grid place-items-center bg-black/10 px-4 sm:px-12">
                <div
                    ref={ref}
                    role="dialog"
                    className="relative flex h-full w-full flex-col bg-white sm:h-auto md:max-w-[720px] md:flex-row rounded-2xl overflow-hidden shadow-xl z-[202]"
                >
                    {/* LEFT */}
                    <div className="hidden md:flex w-[45%] bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center">
                        <img
                            src="https://assets-v3.wikiparfum.com/api-assets/images/aaZwTs9EzP5KSQ30nuRJEoCokiWUXxqGvUJctAAc-w550-q85.png"
                            alt="flowers"
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="flex-1 p-8 sm:p-10 space-y-8">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>

                        <div className="space-y-2">
                            <h1 className="text-2xl font-medium">Log in</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="email"
                                required
                                placeholder="Write your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />

                            <input
                                type="password"
                                required
                                placeholder="Write your password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 uppercase tracking-widest text-sm hover:bg-gray-900"
                            >
                                Access
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
);

export default LogInModal;
