import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

interface LogInProps {
    isOpen: boolean;
    onClose: () => void;
}

const LogIn = forwardRef<HTMLDivElement, LogInProps>(({ isOpen, onClose }, ref) => {
    const navigate = useNavigate();
    if (!isOpen) return null;
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: connect to auth logic
        console.log("Login submitted");
    };

    return (
        <div

            className="
        fixed inset-0 z-[201]
        grid place-items-center
        bg-black/10
        px-4 sm:px-12
      "
        >
            <div
                ref={ref}
                role="dialog"
                className="
          relative
          flex h-full w-full
          flex-col
          bg-white
          sm:h-auto
          md:max-w-[720px]
          md:flex-row
          rounded-2xl
          overflow-hidden
          shadow-xl
          z-[202]
        "
            >
                {/* LEFT — IMAGE / BRAND BLOCK */}
                <div
                    className="
            hidden md:flex
            w-[45%]
            bg-gradient-to-br
            from-gray-200 to-gray-300
            items-center
            justify-center
        
          "
                >

                    <img src="https://assets-v3.wikiparfum.com/api-assets/images/aaZwTs9EzP5KSQ30nuRJEoCokiWUXxqGvUJctAAc-w550-q85.png" alt="flowers" />

                </div>

                {/* RIGHT — FORM */}
                <div className="flex-1 p-8 sm:p-10 space-y-8">
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="
              absolute top-4 right-4
              text-gray-400
              hover:text-gray-600
              transition
            "
                        aria-label="Close"
                    >
                        ✕
                    </button>

                    {/* Header */}
                    <div className="space-y-2">
                        <h1 className="text-2xl font-medium">Log in</h1>
                        <p className="text-sm text-gray-500">
                            Don’t have an account?{" "}
                            <button onClick={() => { onClose(); navigate("/register"); }} className="underline hover:text-black transition">
                                Register
                            </button>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Write your email"
                                required
                                className="
                w-full
                border
                border-gray-300
                rounded-lg
                px-4 py-3
                text-sm
                focus:outline-none
                focus:border-black
              "
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Write your password"
                                required
                                className="
                w-full
                border
                border-gray-300
                rounded-lg
                px-4 py-3
                text-sm
                focus:outline-none
                focus:border-black
              "
                            />
                        </div>

                        {/* Forgot password */}
                        <div className="text-right">
                            <button className="text-xs text-gray-500 hover:text-black transition">
                                I forgot my password
                            </button>
                        </div>

                        {/* CTA */}
                        <button onClick={() => { onClose(); navigate("/profile"); }}
                            className="
              w-full
              bg-black
              text-white
              py-3
              uppercase
              tracking-widest
              text-sm
              hover:bg-gray-900
              transition
            "
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
export default LogIn;
