import React from "react";

import { SkeletonLayout } from "react-native-skeleton-loader-pulse";

import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";

import {
  Container,
  Image,
  Title,
  InfoContainer,
  Amount,
  LastAction,
} from "./styles";

import incomingImg from "../../assets/incoming.png";
import outgoingImg from "../../assets/outgoing.png";
import totalImg from "../../assets/total.png";

export enum Types {
  Incoming = "Entradas",
  Outgoing = "Saídas",
  Total = "Total",
}

interface IProps {
  value: number | null;
  type: Types;
  lastAction: Date;
  isLoading: boolean;
}

export default (props: IProps) => {
  const getLastAction = () => {
    switch (props.type) {
      case Types.Incoming:
        return format(
          new Date(props.lastAction),
          "'Última entrada dia' dd 'de' MMMM",
          { locale: ptBR }
        );
      case Types.Outgoing:
        return format(
          new Date(props.lastAction),
          "'Última saída dia' dd 'de' MMMM",
          { locale: ptBR }
        );
      case Types.Total:
        return "06 à 08 de abril";
    }
  };

  return (
    <Container cardType={props.type}>
      {Types.Incoming === props.type && <Image source={incomingImg} />}
      {Types.Outgoing === props.type && <Image source={outgoingImg} />}
      {Types.Total === props.type && <Image source={totalImg} />}
      <Title cardType={props.type}>{props.type}</Title>
      <InfoContainer>
        {(props.isLoading && (
          <SkeletonLayout
            items={[
              {
                height: 20,
                width: 180,
                borderRadius: 10,
              },
              {
                height: 20,
                width: 175,
                borderRadius: 10,
                marginTop: 20,
              },
            ]}
          />
        )) || (
          <>
            <Amount cardType={props.type}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(props.value)}
            </Amount>
            <LastAction cardType={props.type}>{getLastAction()}</LastAction>
          </>
        )}
      </InfoContainer>
    </Container>
  );
};
