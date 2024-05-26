import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24}}>My name is <Text style={{fontWeight:700}}>Adjei Rapheal</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4e4f7',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:24
  },

});
