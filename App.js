import { SafeAreaView, Text, View, StyleSheet, Image, Button } from 'react-native';
import {useState} from "react";
import Images from './assets/assets.js';
import {Picker} from '@react-native-picker/picker';


export default function App() {
  const [selectedP1, setSelectedP1] = useState('');
  const [selectedP2, setSelectedP2] = useState('');
  const [selectedP3, setSelectedP3] = useState('');
  const [selectedP4, setSelectedP4] = useState('');

  const devTeam = [
    "Yuyang Su",
    "Marcus Greenfield",
    "Anas Rasul",
    "Rudraksh Tripathi",
  ];

  const credits = devTeam.join(", ");

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          
          <Text style={styles.heading}>
            Welcome To POGS
          </Text>

          <Image style={styles.logo} 
            source={Images.logo} 
          />
          <View style = {styles.row1}>
            <Picker style={styles.vegPicker}
            selectedValue={selectedP1}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedP1(itemValue)
            } itemStyle={styles.pickerItem}>
              <Picker.Item label="Select Veg" value="0" />
              <Picker.Item label="Potato-$11" value="11" />
              <Picker.Item label="Carrot-$11" value="11" />
              <Picker.Item label="Cabbage-$5" value="4" />
              <Picker.Item label="Lettuce-$12" value="12" />
              <Picker.Item label="Green Peas-$8" value="8" />
            </Picker>
            <Picker style={styles.vegPicker}
            selectedValue={selectedP2}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedP2(itemValue)
            } itemStyle={styles.pickerItem}>
            
              <Picker.Item label="Select Amount" value="0"/>
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5"/>
            </Picker>
          </View>

          <View style = {styles.row1}>
            <Picker style={styles.fruitPicker}
            selectedValue={selectedP3}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedP3(itemValue)
            } itemStyle={styles.pickerItem}>
              <Picker.Item label="Select Fruit" value="0"/>
              <Picker.Item label="Apple-$11" value="11" />
              <Picker.Item label="Orange-$11" value="11" />
              <Picker.Item label="Banana-$5" value="4" />
              <Picker.Item label="Blueberry-$12" value="12" />
              <Picker.Item label="Mango-$8" value="8" />
            </Picker>
            <Picker style={styles.fruitPicker}
            selectedValue={selectedP4}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedP4(itemValue)
            } itemStyle={styles.pickerItem}>
              <Picker.Item label="Select Amount" value="0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
      </View>

      <View>
        <Button title="CALCULATE"/>
        <Text style={styles.heading}> Placeholder </Text>
      </View>

      <View style={styles.devBanner}>
        <Text style={styles.devTitle}>Developed By: </Text>
        <Text style={styles.devText}>{credits}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F7FFF6',
    alignItems: 'center',
    display:'flex',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
    margin: 10,
  },
  logo: {
    height: 128,
    width: 128,
  },
  row1: {
    flexDirection:'row',
    marginTop:5,
  },
    vegPicker: {
    flex:2,
  },
  fruitPicker: {
    flex:2,
  },
  pickerItem: {
    height: 160,
    paddingVertical: 0,
  },
  devBanner: {
    backgroundColor: '#685147',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 20,
    padding: 5,
  },
  devTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'Bold',
    padding: 5,
  },
  devText: {
    color: 'white',
    padding: 5,
  },
});

