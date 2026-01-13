import FloatingButtons from "./FloatingButtons";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center pt-14 mb-10">
            <div className="inline-block relative cursor-pointer" onClick={() => navigate("/")}>
                <h1 className="text-4xl font-serif font-medium text-gray-900 tracking-wide">
                    F R A G A N
                </h1>
                <h2 className="text-xl font-sans font-light text-gray-600 tracking-widest mt-2">
                    S O F T W A R E · A S · A · S E R V I C E
                </h2>
            </div>
            <FloatingButtons />
        </div>
    )
}

export default Header