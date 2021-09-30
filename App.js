
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert
} from 'react-native';




export default function App() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [nota4, setNota4] = useState('');
  const [result, setResult] = useState('');
  const [conceito,setConceito] = useState('');
  const calcularNotas = () => {
    setResult((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4)
      if(result < 40){
        setConceito('D');
      }else if(result < 60 && result > 40){
        setConceito('C');
      }else if(result < 80 && result > 60){
        setConceito('B');
      }else if(result < 100 && result > 80){
        setConceito('A');
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
      <Text style = {styles.result}>{result??""}</Text>
      <Text style = {styles.conceito}>Conceito {conceito ?? ""}</Text>
        <Text style={styles.text}>Informe a nota 1</Text>
        <TextInput
          style={styles.input}
          placeholder={'Insira a nota 1'}
          keyboardType={'numeric'}
          onKeyPress ={function({nativeEvent,target}){
            if(nativeEvent.key != "Backspace"){
              if(nota1){
                setNota1(nota1 + nativeEvent.key);
              }else{
                setNota1(nativeEvent.key);
              }
            }else{
              setNota1(nota1.substring(0, nota1.length - 1));
            }
            
            
          }}
          defaultValue = {nota1}
        />

        <Text style={styles.text}>Informe a nota 2</Text>
        <TextInput
          style={styles.input}
          placeholder={'Insira a nota 2'}
          keyboardType={'numeric'}
          onKeyPress ={function({nativeEvent}){
            if(nativeEvent.key != "Backspace"){
              if(nota2){
                setNota2(nota2 + nativeEvent.key);
              }else{
                setNota2(nativeEvent.key);
              }
            }else{
              setNota2(nota2.substring(0, nota2.length - 1));
            }
            
            
          }}
      
          defaultValue={nota2}
        />

        <Text style={styles.text}>Informe a nota 3</Text>
        <TextInput
          style={styles.input}
          placeholder={'Insira a nota 3'}
          keyboardType={'numeric'}
          onKeyPress ={function({nativeEvent}){
            if(nativeEvent.key != "Backspace"){
              if(nota3){
                setNota3(nota3 + nativeEvent.key);
              }else{
                setNota3(nativeEvent.key);
              }
            }else{
              setNota3(nota3.substring(0, nota3.length - 1));
            }
  
          }}
          defaultValue={nota3}
        />

        <Text style={styles.text}>Informe a nota 4</Text>
        <TextInput
          style={styles.input}
          placeholder={'Insira a nota 4'}
          keyboardType={'numeric'}
          onKeyPress ={function({nativeEvent}){
            if(nativeEvent.key != "Backspace"){
              if(nota4){
                setNota4(nota4 + nativeEvent.key);
              }else{
                setNota4(nativeEvent.key);
              }
            }else{
              setNota4(nota4.substring(0, nota4.length - 1));
            }
          }}
          defaultValue={nota4}
        />

        <Button
          title="Calcular"
          onPress={calcularNotas}
        />


        
      </View>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: "#fff",
    alignContent: 'center'
  },

  text: {
    color: '#fff'
  },

  view: {
    flex: 0.4,
    marginTop: 40,
    alignItems: 'center'
  },

  input: {
    backgroundColor: '#fff',
    width: '80%',
    height: '20%',
    margin: 5,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor : '#333333'
  },

  result : {
    fontSize : 20,
    color: '#333333'
  },
  conceito : {
    fontSize : 30,
    color: '#333333'
  }
})

