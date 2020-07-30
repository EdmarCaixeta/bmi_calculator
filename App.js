import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {height:0, mass:0, result: 0, resultText: ""}
    this.calcular = this.calcular.bind(this)
  }
  
  calcular() {
    let bmi = (this.state.mass) / Math.pow(this.state.height * 0.01, 2)
    let s = this.state
    s.result = bmi

    if(s.result < 16){
      s.resultText = 'Very severely underweight '
    }

    else if (s.result < 17){
      s.resultText = 'Severely underweight '
    }
    
    else if (s.result < 18.5){
      s.resultText = 'Underweight '
    }
    
    else if (s.result < 25) {
      s.resultText = 'Normal (Healthy Weight)'
    }
    
    else if (s.result < 30) {
      s.resultText = 'Overweight'
    }
    
    else if (s.result < 35) {
      s.resultText = 'Obese Class I (Moderately Obese)'
    }
    
    else if (s.result < 40) {
       s.resultText = 'Obese Class II (Severely Obese)'
    }
    
    else{
       s.resultText = 'Obese Class III (Very Severely Obese)'
    }

    this.setState(s)
  }

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
        <TextInput placeholder="Height" keyboardType="numeric" style={styles.input}
        onChangeText={(height)=>{this.setState({height})}}></TextInput>
        <TextInput placeholder="Mass" keyboardType="numeric" style={styles.input}
        onChangeText={(mass)=>{this.setState({mass})}}></TextInput>  
      </View>
      <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calculate</Text></TouchableOpacity> 
      <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
      <Text style={styles.resultText}>{this.state.resultText}</Text>
    </View>
  );}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  entradas: {
    flexDirection: 'row',
  },

  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },

  button: {},

  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold',
  },

  result: {
    padding: 5,
    fontSize: 25,
    color: "#9f9f9f",
  },

  resultText: {
    fontSize: 20,
    color: "#9f9f9f",
    fontWeight: "bold",
  }

});