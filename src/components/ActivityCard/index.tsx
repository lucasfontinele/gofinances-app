import React from "react";

import {
  Container,
  InfoContainer,
  Wrapper,
  Description,
  Amount,
  InfoText,
  TagImage,
  TagContainer
} from "./styles";

import cashImg from "../../assets/cash.png";

export enum Types {
  Incoming = "Entradas",
  Outgoing = "Saídas",
  Total = "Total"
}

export default () => {
  return (
    <Container>
      <InfoContainer>
        <Description>Desenvolvimento de site</Description>
        <Amount>R$ 12.000,00</Amount>
      </InfoContainer>
      <Wrapper>
        <TagContainer>
          <TagImage source={cashImg} />
          <InfoText>Vendas</InfoText>
        </TagContainer>
        <InfoText>13/04/2020</InfoText>
      </Wrapper>
    </Container>
  );
};
