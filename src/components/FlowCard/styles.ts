import styled, { css } from 'styled-components/native';

import { Types } from '.';

interface IContainer {
  cardType: string;
}

export const Container = styled.View<IContainer>`
  position: relative;

  width: 300px;
  height: 200px;

  background: ${(props) =>
    props.cardType === Types.Total ? '#FF872C;' : '#FFFFFF'};
  border-radius: 5px;

  margin-left: 15px;
  padding: 20px;
`;

export const Title = styled.Text<IContainer>`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
  color: ${(props) =>
    props.cardType === Types.Total ? '#FFFFFF;' : '#363f5f;'};
`;

export const Image = styled.Image`
  position: absolute;
  right: 0;
  margin: 20px 20px 0 0;
`;

export const InfoContainer = styled.View`
  margin-top: 55px;
`;

export const Amount = styled.Text<IContainer>`
  font-family: 'Poppins-Medium';
  font-size: 30px;
  line-height: 45px;
  color: ${(props) =>
    props.cardType === Types.Total ? '#FFFFFF;' : '#363f5f;'};
`;

export const LastAction = styled.Text<IContainer>`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  line-height: 18px;
  color: ${(props) =>
    props.cardType === Types.Total ? '#FFFFFF;' : '#969cb3;'};
`;
