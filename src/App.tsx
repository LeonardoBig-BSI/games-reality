import { useNavigate } from "react-router-dom";
import Button from "./components/Button/Button"
import Header from "./components/Header/Header"
import SectionGiveaway from "./components/Sections/SectionGiveaway/SectionGiveaway"
import Footer from "./components/Footer/Footer";
import SectionPromotion from "./components/Sections/SectionPromotion/SectionPromotion";
import SectionAboutUs from "./components/Sections/SectionAboutUs/SectionAboutUs";
import SectionContact from "./components/Sections/SectionContact/SectionContact";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/registerGiveaway');
  }

  return (
    <div>
      <Header />

      <SectionGiveaway>
        <section className="mt-32 md:mt-64">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
            <img
              src="/ps5-pro.jpg"
              alt="PS5 PRO"
              className="sm:ml-8 rounded-md"
            />

            <div className="flex flex-col items-center gap-8">
              <h2 className="text-xl sm:text-3xl md:text-4xl text-center text-black font-bold">
                Participe já do nosso sorteio e <br /> concorra a um PlayStation 5 Pro!
              </h2>
              <p className="text-sm sm:text-base text-center">
                Divirta-se com vários jogos de última geração e também com os clássicos dos videogames, além de possuir vários serviços Streams para aproveitar! <br /><br />
                Inscreva-se já clicando no botão abaixo e boa sorte gamer!
              </p>

              <Button
                type="button"
                className="mt-2 sm:mt-8 px-8 py-2 text-sm sm:text-base border border-colorButton bg-colorButton text-white rounded hover:bg-colorButtonHover hover:text-white duration-300"
                onClick={handleClick}
              >
                INSCREVER-SE
              </Button>
            </div>

          </div>
        </section>
      </SectionGiveaway>

      <SectionPromotion>
        <section className="mt-48 sm:mt-64">
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <img
              src="/ghost-image.jpg"
              alt="Call Of Duty"
              className="sm:ml-8 rounded"
            />

            <div className="flex flex-col justify-start items-center gap-8">
              <h2 className="text-xl sm:text-3xl md:text-4xl text-center text-black font-bold">
                Fique ligado nas nossas <br /> promoções!
              </h2>
              <p className="text-sm sm:text-base text-center">
                Aqui na Games Reality, possuímos o maior repertório de jogos multiplataformas para você que sempre teve o sonho de comprar! Temos jogos desde o PlayStation 1 até o PlayStation 5, também contamos com jogos para as plataformas Xbox 360, Xbox One, Xbox One Series S e X, Nintendo Swift, Super Nintendo, Nintendo 64, Mega Drive e muito mais! <br /><br />
                Então, realize o LogIn ou cadastre-se e fique ligado nas nossas promoções que serão enviadas no seu e-email que estão sempre imperdíveis e por tempo limitado!
              </p>

              <Button
                type="button"
                className="mt-2 ml-4 px-8 py-2 border border-colorButton bg-colorButton text-white rounded hover:bg-colorButtonHover hover:text-white duration-300"
                onClick={handleClick}
              >
                ENTRAR
              </Button>
            </div>

          </div>
        </section>
      </SectionPromotion>

      <SectionAboutUs>
        <section className="mt-48 sm:mt-64">
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <img
              src="/about-us.jpg"
              alt="About Us"
              className="sm:ml-8 rounded"
            />

            <div className="flex flex-col justify-start items-center gap-8">
              <h2 className="text-xl sm:text-3xl md:text-4xl text-center text-black font-bold">
                Quem somos <br /> nós?
              </h2>
              <p className="text-sm sm:text-base text-center">
                A Games Reality nasceu da paixão pelos jogos e da vontade de conectar pessoas através de experiências inesquecíveis no universo gamer. Somos uma empresa especializada no comércio de jogos multiplataformas, oferecendo títulos para consoles, PCs e dispositivos móveis, sempre com foco em qualidade, variedade e preços justos. <br /><br />
                Nossa missão é proporcionar aos jogadores o melhor do entretenimento digital, com um catálogo constantemente atualizado, suporte dedicado e um compromisso real com a satisfação do cliente. Na Games Reality, entendemos que cada jogo é uma nova realidade — e estamos aqui para ajudar você a explorá-las todas!
              </p>
            </div>

          </div>
        </section>
      </SectionAboutUs>

      <SectionContact>
        <section className="mt-48 sm:mt-64">
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <img
              src="/contact.jpg"
              alt="Contact"
              className="sm:ml-8 rounded"
            />

            <div className="flex flex-col justify-start items-center gap-8">
              <h2 className="text-xl sm:text-3xl md:text-4xl text-center text-black font-bold">
                Entre em contato <br /> com a gente!
              </h2>
              <p className="text-sm sm:text-base text-center">
                Estamos sempre a disposição para te atender sempre que precisar!
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left px-8">
                <div className="text-sm sm:text-base font-semibold">Atendimento:</div>
                <div className="text-sm sm:text-base break-words px-2">contato@gamesreality.com.br</div>

                <div className="mt-2 text-sm sm:text-base font-semibold">Suporte:</div>
                <div className="mt-2 text-sm sm:text-base break-words px-2">suporte@gamesreality.com.br</div>

                <div className="mt-2 text-sm sm:text-base font-semibold">Parcerias:</div>
                <div className="mt-2 mr-4 text-sm sm:text-base break-words px-2">parcerias@gamesreality.com.br</div>

                <div className="mt-2 text-sm sm:text-base font-semibold">WhatsApp:</div>
                <div className="mt-2 text-sm sm:text-base px-2">(11) 1111-1111</div>

                <div className="mt-2 text-sm sm:text-base font-semibold">Endereço:</div>
                <div className="mt-2 text-sm sm:text-base px-2">Av. John Doe, Rua Tom Doe, 245 - Centro.</div>
              </div>
            </div>

          </div>
        </section>
      </SectionContact>

      <Footer />
    </div>
  )
}

export default App
