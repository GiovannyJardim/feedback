import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";

import iconStaring from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"
import { useState } from "react";

export function Home() {  
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [feedbackNote, setfeedbackNote] = useState(false)

  function handleFeedbackButtonClick(event) {
    const feedback = Number(event.target.innerText)

    setfeedbackNote(feedback)
  }

  function handleSubmit() {
    if (feedbackNote === 0) return

    setMostrarResultado(true)
  }

  return (
    mostrarResultado === false ? (
      <CardContainer>
        <IconContainer>
          <img src={iconStaring} alt="" />
        </IconContainer>

        <h1>Como foi o atafknafaito?</h1>
        <p>conte nos blah blah bh conte nlah blah blahconteblah nos blah blah blahconte nos blah blah blha blhalnah contenos amazing</p>

        <ButtonContainer>
          <button onClick={handleFeedbackButtonClick}>1</button>
          <button onClick={handleFeedbackButtonClick}>2</button>
          <button onClick={handleFeedbackButtonClick}>3</button>
          <button onClick={handleFeedbackButtonClick}>4</button>
          <button onClick={handleFeedbackButtonClick}>5</button>
        </ButtonContainer>

        <button onClick={handleSubmit}>enviar</button>
      </CardContainer>
    ) : (
      <CardContainer>
        <img src= {thankYouImg} alt="iaen de agradecimento ao cliente" />

        <ResultContainer>
          <p>Voc^seliciuo {feedbackNote} de 5</p>
        </ResultContainer>

        <h1>obrigaod</h1>

        <p>agradecmeeos por deidicar um momento para nos avalair. se preicsar de mais supirt nao exite em entrar en contato</p>
      </CardContainer>
    )
  )
}
