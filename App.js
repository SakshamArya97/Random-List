import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [inputItem, setItem] = useState(''); 
  const [listNames, addListNames] = useState([]);

  const textBind = (searchTerm) =>{
    setItem(searchTerm)
    };

  const addValue = () => { 
   addListNames([...listNames, generator()]); 
   };
  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Search" onChangeText={textBind} 
        value={inputItem}
        style={styles.input}
        />
        <Button title="+" onPress={addValue}/>
      </View>
      <ScrollView>

       {listNames.filter((value)=>{
          if(inputItem == ''){
            return value; 
          }   else if(listNames.toString().toLowerCase().includes(inputItem.toLowerCase())){
                return value.match(inputItem);
          }
          }).map(goal => (<View key={Math.random()} style={styles.itemList}>
          <Text>{goal}</Text>
       </View>
       ))}
      </ScrollView>
    </View>
  );
}

//to create a neat look and put aside all the styling in one place
const styles= StyleSheet.create({
  screen: {padding: 60},
  inputContainer: {flexDirection:"row", justifyContent: "space-between", alignItems:"center"},
  input: {width:"86%", borderColor: "purple", borderBottomWidth:3, padding: 7, borderRadius: 5},
  itemList: {padding: 10, backgroundColor: `#AFBAFA`, borderColor:'white', borderWidth: 2, marginVertical: 10},
  });



//random word generator
const generator = () => {
  var word = ['Milk','Coffee','Oranges','Bread','Tea','Sugar','Chocolate','Pen','Pencil','Sandwich',
  'Cheese','Cucumber','Apple','Tomato','Carrot','Jaggery','Butter','Cashew','Pista','Bhujia','Herbal Tea','Dark Chocolate',
  'Pizza','Onion','Water','Coconut Water','Nachos','Taco Bell','Pudding','Eggs','Soap bars','Plain aspirin','Squirty soap',
  'Washing tablets','Dishwasher tablets','Mouthwash','Tissues','Box','Tissues packet','Olive oil','Pepper','Dishwasher salt',
  'Cheese Biscuits','Yoghurts','Margarine','Freezer bags','Beans','Washing tablets','Kitchen towel','Gravy granules',
  'Assorted beans','Small tin of salmon','Crisps','Weetabix','Decaf coffee grounds','White Chocolate'];
  var selection = word[Math.floor(Math.random()*word.length)];
  return selection;
}
