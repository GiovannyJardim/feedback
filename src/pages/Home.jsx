import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";

import iconStaring from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"

export function Home() {  
  let aparacerResultado = true

  return (
    aparacerResultado === false ? (
      <CardContainer>
        <IconContainer>
          <img src={iconStaring} alt="" />
        </IconContainer>

        <h1>como foi o atendimento?</h1>
        <p>conte nos blah blah blah conte nos blah blah blahconte nos blah blah blahconte nos blah blah blahconte nos blah blah blahconte nos blah blah blahconte nos blah blah blahconte nos blah blah blahconte nos blah blah blahconte nos blah blah</p>

        <ButtonContainer>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </ButtonContainer>

        <button>enviar</button>
      </CardContainer>
    ) : (
      <CardContainer>
        <img src= {thankYouImg} alt="iaen de agradecimento ao cliente" />

        <ResultContainer>
          <p>Voc^seliciuo 4 de 5</p>
        </ResultContainer>

        <h1>obrigaod</h1>

        <p>agradecmeeos por deidicar um momento para nos avalair. se preicsar de mais supirt nao exite em entrar en contato</p>
      </CardContainer>
    )
  )
}
