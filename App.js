import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>Aarogya bhoomi</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.3702,
          longitude: 77.6835,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.3702,
          longitude: 77.6835,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '80%',
    height: '40%', 
    padding: 20,
    margin: 20, 
    // Adjust height as needed
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  }
});