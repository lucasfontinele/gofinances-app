import React, { useState, useEffect } from 'react';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Header,
  DateText,
  HeaderContainer,
  ScrollCards,
  ListTitle,
  ListHeaderContainer,
} from './styles';
import FlowCard, { Types } from '../../components/FlowCard';
import ActivityCard from '../../components/ActivityCard';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

interface Dashboard {
  total: number;
  incoming: number;
  outgoing: number;
}

export interface Transactions {
  id: string;
  description: string;
  price: number;
  type: Types;
  category: string;
  createdAt: string;
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [infoDashboard, setInfoDashboard] = useState<Dashboard | null>(null);
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const currentDate = () =>
    format(new Date(), "dd 'de' MMMM", { locale: ptBR });

  async function getDashboard() {
    try {
      setLoading(true);
      const response = await api.get('/transactions/dashboard');

      if (response.status === 200) {
        setInfoDashboard(response.data);
      }
    } catch (error) {
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 350);
    }
  }

  const getTransactions = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('/transactions');

      if (response.status === 200) {
        setTransactions(response.data);
      }
    } catch ({ response }) {
    } finally {
      setRefreshing(false);
    }
  };

  function getData() {
    Promise.all([getDashboard(), getTransactions()]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <FlatList
      ListHeaderComponent={
        <View>
          <SafeAreaView />
          <HeaderContainer>
            <Header>
              <Image source={logoImg} />
              <DateText>{currentDate()}</DateText>
            </Header>
            <ScrollCards horizontal showsHorizontalScrollIndicator={false}>
              <FlowCard
                type={Types.Incoming}
                value={infoDashboard && infoDashboard?.incoming}
                lastAction={new Date()}
                isLoading={loading}
              />
              <FlowCard
                type={Types.Outgoing}
                value={infoDashboard && infoDashboard?.outgoing}
                lastAction={new Date()}
                isLoading={loading}
              />
              <FlowCard
                type={Types.Total}
                value={infoDashboard && infoDashboard?.total}
                lastAction={new Date()}
                isLoading={loading}
              />
            </ScrollCards>
          </HeaderContainer>
          <ListHeaderContainer>
            <ListTitle>Listagem</ListTitle>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <ListTitle register>Cadastrar</ListTitle>
            </TouchableOpacity>
          </ListHeaderContainer>
        </View>
      }
      ListEmptyComponent={
        <Text style={{ marginTop: 100, textAlign: 'center' }}>
          Você ainda não possui transações 😔
        </Text>
      }
      data={transactions}
      extraData={transactions}
      renderItem={({ item }) => (
        <ActivityCard
          key={item.id}
          id={item.id}
          category={item.category}
          description={item.description}
          price={item.price}
          type={item.type}
          createdAt={item.createdAt}
        />
      )}
      refreshing={refreshing}
      onRefresh={getData}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Dashboard;
