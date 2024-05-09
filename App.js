import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import Images from './assets/assets'
import {Picker} from '@react-native-picker/picker';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          
          <Text style={styles.heading}>
            Welcome To
          </Text>

          <Image style={styles.logo} 
            source={Images.logo} 
          />
          <View style = {styles.row1}>
            <Picker style={styles.vegPicker}>
              <Picker.Item label="Select Veg" value="0" color="white"/>
              <Picker.Item label="Apple-$11" value="11" color="white"/>
              <Picker.Item label="Orange-$11" value="11" color="white"/>
              <Picker.Item label="Banana-$5" value="4" color="white"/>
              <Picker.Item label="Blueberry-$12" value="12" color="white"/>
              <Picker.Item label="Mango-$8" value="8" color="white"/>
            </Picker>
            <Picker style={styles.vegPicker}>
              <Picker.Item label="Select Amount" value="0" color="white"/>
              <Picker.Item label="1" value="1" color="white"/>
              <Picker.Item label="2" value="2" color="white"/>
              <Picker.Item label="3" value="3" color="white"/>
              <Picker.Item label="4" value="4" color="white"/>
              <Picker.Item label="5" value="5" color="white"/>
            </Picker>
          </View>

          <View style = {styles.row1}>
            <Picker style={styles.fruitPicker}>
              <Picker.Item label="Select Fruit" value="0" color="white"/>
              <Picker.Item label="Apple-$11" value="11" color="white"/>
              <Picker.Item label="Orange-$11" value="11" color="white"/>
              <Picker.Item label="Banana-$5" value="4" color="white"/>
              <Picker.Item label="Blueberry-$12" value="12" color="white"/>
              <Picker.Item label="Mango-$8" value="8" color="white"/>
            </Picker>
            <Picker style={styles.fruitPicker}>
              <Picker.Item label="Select Amount" value="0" color="white"/>
              <Picker.Item label="1" value="1" color="white"/>
              <Picker.Item label="2" value="2" color="white"/>
              <Picker.Item label="3" value="3" color="white"/>
              <Picker.Item label="4" value="4" color="white"/>
              <Picker.Item label="5" value="5" color="white"/>
            </Picker>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#097969',
    alignitems: 'center',
    display:'flex'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
  logo: {
    height: 128,
    width: 128,
    marginLeft:'36%',
    marginRight:'30%'
  },
  pickerText: {
    color:"white"
  },
  row1: {
    flexDirection:'row',
    marginTop:7
  },
    vegPicker: {
    flex:2
  },
  fruitPicker: {
    flex:2
  }
});

