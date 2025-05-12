import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="mt-40 p-5 bg-black">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                <p className="text-sm sm:text-base text-left text-zinc-50">
                    Copyright 2025 - Todos os direitos reservados.
                </p>

                <div className="flex flex-row justify-center gap-4 sm:gap-6">
                    <FontAwesomeIcon icon={faTiktok} className="cursor-pointer text-sm sm:text-2xl text-white" />
                    <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-sm sm:text-2xl text-white" />
                    <FontAwesomeIcon icon={faFacebook} className="cursor-pointer text-sm sm:text-2xl text-white" />
                    <FontAwesomeIcon icon={faYoutube} className="cursor-pointer text-sm sm:text-2xl text-white" />
                </div>
            </div>
        </div>
    )
}

export default Footer