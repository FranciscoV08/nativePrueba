import { StatusBar } from 'expo-status-bar';
import Img from './icon/Img'
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <Img 
        resizeMode="cover"/>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        <TextInput 
        placeholder='tucorreo@gmail.com'
        style={styles.TextInput}
        />
        <TextInput 
        placeholder='password'
        style={styles.TextInput}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgSVG:{
    height: '100%',
    
  },
  mainContainer:{
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  containerSVG:{

    flex: 1,
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
  container: {
    height: '70%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold'
  },
  subTitle:{
    fontSize: 20,
    color: 'gray',
  },
  TextInput: {
    borderWidth: 1,
    paddingStart: 30,
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  }
});
