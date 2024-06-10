import { ButtonContainer, CardContainer, IconContainer } from "./Home.styles";

import iconStaring from "../assets/icon-star.svg"

export function Home() {
  return (
    <CardContainer>
        <IconContainer>
          <img src={iconStaring} alt="" />
        </IconContainer>

        <h1>como foi o atendimento?</h1>
        <p>conte nos blah blah blah</p>

        <ButtonContainer>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </ButtonContainer>
        <button>enviar</button>
    </CardContainer>
  )
}
