import React, { useState, useRef } from 'react';
import {
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useForm, Controller } from 'react-hook-form';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Header,
  DateText,
  Content,
  ContentTitle,
  FormArea,
  TextInput,
  TypeContainer,
  TypeButton,
  TypeButtonText,
  Button,
  ButtonText,
  TextError,
} from './styles';

import logoImg from '../../assets/logo.png';
import minorIncomingImg from '../../assets/minor_incoming.png';
import minorOutgoingImg from '../../assets/minor_outgoing.png';

enum Types {
  Incoming,
  Outgoing,
}

interface IForm {
  description: string;
  price: string;
  type?: Types;
  category: string;
}

const Register: React.FC = () => {
  const priceInput = useRef<any>(null);
  const { control, handleSubmit, setValue, errors } = useForm<IForm>();

  const [selectedType, setSelectedType] = useState<Types | null>();

  const currentDate = () =>
    format(new Date(), "dd 'de' MMMM", { locale: ptBR });

  const onSubmit = (data: IForm) => {
    Alert.alert(JSON.stringify(data));
  };

  const handleSelectType = (type: Types) => {
    setSelectedType(type);
    setValue('type', type);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header>
          <Image source={logoImg} />
          <DateText>{currentDate()}</DateText>
        </Header>
        <Content>
          <ContentTitle>Cadastro</ContentTitle>
          <FormArea>
            <Controller
              as={TextInput}
              control={control}
              name="description"
              rules={{ required: true }}
              onChange={(args) => args[0].nativeEvent.text}
              placeholder="Descrição"
              placeholderTextColor="#969CB3"
              onSubmitEditing={() => priceInput.current.focus()}
              hasError={!!errors.description}
            />
            {errors.description && (
              <TextError>Você precisa digitar uma descrição</TextError>
            )}
            <Controller
              as={
                <TextInput
                  ref={priceInput}
                  placeholder="Preço"
                  placeholderTextColor="#969CB3"
                  keyboardType="numeric"
                  hasError={!!errors.price}
                />
              }
              control={control}
              name="price"
              onChange={(args) => args[0].nativeEvent.text}
              rules={{ required: true }}
            />
            {errors.price && (
              <TextError>Você precisa digitar um preço</TextError>
            )}
            <TypeContainer>
              <TouchableOpacity
                onPress={() => handleSelectType(Types.Incoming)}
              >
                <TypeButton isSelected={selectedType === Types.Incoming}>
                  <Image source={minorIncomingImg} />
                  <TypeButtonText>Entrada</TypeButtonText>
                </TypeButton>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectType(Types.Outgoing)}
              >
                <TypeButton isSelected={selectedType === Types.Outgoing}>
                  <Image source={minorOutgoingImg} />
                  <TypeButtonText>Saída</TypeButtonText>
                </TypeButton>
              </TouchableOpacity>
            </TypeContainer>
            <Controller
              as={
                <TextInput
                  placeholder="Categoria"
                  placeholderTextColor="#969CB3"
                  hasError={!!errors.category}
                />
              }
              control={control}
              name="category"
              onChange={(args) => args[0].nativeEvent.text}
              rules={{ required: true }}
            />
            {errors.category && (
              <TextError>Você precisa digitar uma categoria</TextError>
            )}
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <Button>
                <ButtonText>Enviar</ButtonText>
              </Button>
            </TouchableOpacity>
          </FormArea>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Register;
