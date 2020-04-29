import React from 'react';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  DateText,
  HeaderContainer,
  ScrollCards,
  ListContainer,
  ListTitle,
  ListWrapper,
  ListHeaderContainer,
} from './styles';
import FlowCard, { Types } from '../../components/FlowCard';
import ActivityCard from '../../components/ActivityCard';

import logoImg from '../../assets/logo.png';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const currentDate = () =>
    format(new Date(), "dd 'de' MMMM", { locale: ptBR });

  return (
    <Container showsVerticalScrollIndicator={false}>
      <SafeAreaView />
      <HeaderContainer>
        <Header>
          <Image source={logoImg} />
          <DateText>{currentDate()}</DateText>
        </Header>
        <ScrollCards horizontal showsHorizontalScrollIndicator={false}>
          <FlowCard
            type={Types.Incoming}
            value={17400}
            lastAction={new Date()}
          />
          <FlowCard
            type={Types.Outgoing}
            value={1259}
            lastAction={new Date()}
          />
          <FlowCard type={Types.Total} value={16141} lastAction={new Date()} />
        </ScrollCards>
      </HeaderContainer>
      <ListContainer>
        <ListHeaderContainer>
          <ListTitle>Listagem</ListTitle>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <ListTitle register>Cadastrar</ListTitle>
          </TouchableOpacity>
        </ListHeaderContainer>
        <ListWrapper>
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </ListWrapper>
      </ListContainer>
    </Container>
  );
};

export default Dashboard;
