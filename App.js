import React, {useState} from 'react';
import {
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ];

  const [Daata, setDaata] = useState(DATA);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    const addNumber = Daata.length + 1;
    setDaata([
      ...Daata,
      {
        title: 'Title' + ' ' + addNumber,
        data: [
          'Item' + ' ' + addNumber + '-1',
          'Item' + ' ' + addNumber + '-2',
        ],
      },
    ]);
    setRefreshing(false);
  };

  return (
    <SectionList
      keyExtractor={index => index.toString()}
      sections={Daata}
      renderItem={({item}) => (
        <View style={styles.boxItem}>
          <Text style={styles.textItem}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />

    // <View style={styles.body}>
    //   <View style={styles.boxHeader}>
    //     <Text style={styles.textHeader}>App</Text>
    //   </View>
    //   <View style={styles.boxItem}>
    //     <Text style={styles.textItem}>App</Text>
    //   </View>
    //   <View style={styles.boxHeader}>
    //     <Text style={styles.textHeader}>App</Text>
    //   </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  boxHeader: {
    backgroundColor: '#42C2FF',
    height: 70,
    justifyContent: 'center',
    borderWidth: 2,
  },
  boxItem: {
    height: 70,
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  textHeader: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '600',
    color: '#0F0E0E',
  },
  textItem: {
    fontSize: 32,
    textAlign: 'center',
    color: '#0F0E0E',
    fontWeight: '500',
  },
});

export default App;
