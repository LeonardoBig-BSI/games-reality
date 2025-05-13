import Button from "../Button/Button"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-2">
            {/* Logo */}
            <Button
                type="button"
                className="cursor-pointer"
                onClick={handleClick}
            >
                <img 
                src="/gamesReality-logo.png" 
                alt="Games Reality"
                className="w-12 h-12 rounded-full"
            />
            </Button>

            {/* Buton Actions */}
            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center gap-3 sm:gap-2">
                <Button
                    type="button"
                    className="mx-2 px-4 py-1 border border-white text-white rounded hover:bg-colorButtonHover hover:text-white duration-300"
                    onClick={handleLogin}
                >
                    Entrar
                </Button>

                <Button
                    type="button"
                    className="mx-2 px-4 py-1 border border-white text-white rounded hover:bg-colorButtonHover hover:text-white duration-300"
                    onClick={handleClick}
                >
                    Sobre Nós
                </Button>

                <Button
                    type="button"
                    className="mx-2 px-4 py-1 border border-white text-white rounded hover:bg-colorButtonHover hover:text-white duration-300"
                    onClick={handleClick}
                >
                    Contato
                </Button>
            </div>
        </div>
    )
}

export default NavBar