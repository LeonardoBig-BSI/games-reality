import Button from "../Button/Button"
import NavBar from "../NavBar/NavBar"

const Header = () => {
    return (
        <div
            className="w-full h-[640px] bg-cover bg-no-repeat bg-center relative text-white"
            style={{ backgroundImage: "url('/ps.jpg')" }}
        >
            <NavBar />

            <div className="flex justify-center items-end h-full px-4 text-center">
                <div className="flex flex-col items-center mb-56 sm:mb-20 max-w-xl">
                    <h1 className="scale-up-center font-bold text-white text-2xl sm:text-4xl">
                        Bem-vindo a Games Reality!
                    </h1>

                    <Button
                        type="button"
                        className="mt-4 px-4 py-1 sm:px-6 sm:py-2 slide-top border border-white text-white rounded hover:bg-colorButtonHover hover:text-white duration-300"
                    >
                        CONHEÇA NOSSA LOJA
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header