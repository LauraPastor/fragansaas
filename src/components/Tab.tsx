import React from "react";

interface TabProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active = false, onClick }) => {
    return (
        <div role="tablist" aria-label="Profile sections">
            <button
                type="button"
                role="tab"
                onClick={onClick}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onClick?.();
                    }
                }}
                className={`
        pb-4 border-b-2 transition
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-black/20
        ${active
                        ? "border-black text-black"
                        : "border-transparent text-gray-500 hover:text-black"}
      `}
            >
                {label}
            </button>
        </div>
    );
};

export default Tab;
