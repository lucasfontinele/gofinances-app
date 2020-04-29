import styled from "styled-components/native";

export const Container = styled.View`
  height: 130px;
  background: #ffffff;
  border-radius: 5px;

  padding: 20px 24px;
  margin: 15px 0;

  justify-content: space-between;
`;

export const InfoContainer = styled.View``;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.Text`
  font-family: "Poppins-Regular";
  font-size: 14px;
  line-height: 21px;
  color: #363f5f;
`;

export const Amount = styled.Text`
  font-size: 20px;
  line-height: 30px;
  color: #12a454;
`;

export const InfoText = styled.Text`
  font-family: "Poppins-Regular";
  font-size: 14px;
  line-height: 21px;
  color: #969cb3;
`;

export const TagImage = styled.Image`
  margin-right: 10px;
`;

export const TagContainer = styled.View`
  flex-direction: row;
`;