import { ArrowLeft, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FavoritesGrid from "./FavoritesGrid";
import Tab from "./Tab";
import ListsCard from './ListsCard'
import FavouritesCard from './FavouritesCard'

type ProfileTab = "dashboard" | "favorites" | "lists";

const Profile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<ProfileTab>("dashboard");

    return (
        <div className="min-h-screen ">
            {/* HEADER */}
            <header className="relative text-center py-8 pb-16 px-6">
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

                <div className="absolute right-8 top-8 flex gap-3">
                    <button className="p-2 rounded-full border" title="settings">
                        <Settings size={18} />
                    </button>
                    <button className="p-2 rounded-full border" title="log out">
                        <LogOut size={18} />
                    </button>
                </div>

                <h1 className="text-4xl font-serif mb-4">My profile</h1>
                <p className="max-w-xl mx-auto text-gray-600 text-sm">
                    Welcome to your personal area. From here you can manage your account
                    and consult your lists and favourite fragrances.
                </p>
            </header>

            {/* TABS */}
            <div className="border-b border-gray-200">
                <div className="flex justify-center gap-10 text-sm uppercase tracking-widest" >
                    <Tab
                        label="Dashboard"
                        active={activeTab === "dashboard"}
                        onClick={() => setActiveTab("dashboard")}
                    />
                    <Tab
                        label="My favourites"
                        active={activeTab === "favorites"}
                        onClick={() => setActiveTab("favorites")}
                    />
                    <Tab
                        label="My lists"
                        active={activeTab === "lists"}
                        onClick={() => setActiveTab("lists")}
                    />
                </div>
            </div>
            <section className="max-w-7xl mx-auto px-8 py-10">
                {activeTab === "dashboard" &&
                    <main className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <FavouritesCard onSeeMore={() => setActiveTab("favorites")} />
                            <ListsCard />
                        </div>
                    </main>
                }

                {activeTab === "favorites" && <FavoritesGrid />}

                {activeTab === "lists" && (
                    <div className="text-center text-gray-500 text-sm">
                        Coming soon
                    </div>
                )}
            </section>
        </div>
    );
};

export default Profile;
