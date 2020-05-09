import styled from 'styled-components/native';

interface IListTitle {
  register?: boolean;
}

export const ScrollView = styled.ScrollView`
  background: #f0f2f5;
`;

export const HeaderContainer = styled.View`
  height: 245px;
  background: #5636d3;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin: 25px 25px;
`;

export const DateText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  opacity: 0.6;
`;

export const ScrollCards = styled.ScrollView`
  padding: 10px 0;
  margin: 0 0 -45px 0;
`;

export const ListContainer = styled.View``;

export const ListTitle = styled.Text<IListTitle>`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  line-height: 30px;
  color: #000000;

  ${(props) =>
    props.register &&
    `
    font-family: 'Poppins-Medium';
    color: #FF872C;
  `}
`;

export const ListHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 85px;
  padding: 0 25px;
`;
