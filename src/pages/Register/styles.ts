import styled from 'styled-components/native';

interface IButtonTypes {
  isSelected: boolean;
}

interface ITextInput {
  hasError: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #f0f2f5;
`;

export const Header = styled.View`
  height: 80px;
  background: #5636d3;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 25px;
`;

export const DateText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  opacity: 0.6;
`;

export const Content = styled.View`
  padding: 24px;
`;

export const ContentTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

export const FormArea = styled.View`
  margin-top: 24px;
`;

export const TextInput = styled.TextInput<ITextInput>`
  margin-bottom: 16px;
  padding-left: 16px;

  height: 50px;
  background: #ffffff;
  border-radius: 5px;

  color: #969cb3;

  ${(props) =>
    props.hasError &&
    `
  border: 1px solid #e74c3c;
  margin-bottom: 0;
  `}
`;

export const TypeContainer = styled.View`
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
  margin-bottom: 16px;
`;

export const TypeButton = styled.View<IButtonTypes>`
  width: 160px;
  height: 50px;

  border: 1.5px solid #969cb3;
  border-radius: 5px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${(props) =>
    props.isSelected &&
    `
    background: #fff;
  `}
`;

export const TypeButtonText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  line-height: 21px;
  color: #363f5f;

  margin-left: 12px;
`;

export const Button = styled.View`
  height: 50px;
  background: #ff872c;
  border-radius: 5px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;

export const TextError = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #e74c3c;

  margin-bottom: 16px;
`;
