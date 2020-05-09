import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import format from 'date-fns/format';

import { Transactions } from '../../pages/Dashboard';

import {
  Container,
  InfoContainer,
  Wrapper,
  Description,
  Amount,
  InfoText,
  TagImage,
  TagContainer,
} from './styles';

import cashImg from '../../assets/cash.png';

export enum Types {
  Incoming = 'Entradas',
  Outgoing = 'Saídas',
  Total = 'Total',
}

export default (props: Transactions) => {
  const [animation] = useState(new Animated.Value(0));
  const animatedStyles = {
    opacity: animation,
  };

  function startAnimation() {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Animated.View style={animatedStyles}>
      <Container>
        <InfoContainer>
          <Description>{props?.description}</Description>
          <Amount type={props.type}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(props.price)}
          </Amount>
        </InfoContainer>
        <Wrapper>
          <TagContainer>
            <TagImage source={cashImg} />
            <InfoText>{Types[props.type]}</InfoText>
          </TagContainer>
          <InfoText>{format(new Date(props.createdAt), 'dd/MM/yyyy')}</InfoText>
        </Wrapper>
      </Container>
    </Animated.View>
  );
};
