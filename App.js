import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputName: 'Matheus', name: '',
      inputAge: '27', age: '',
      gender: '',
      genders: [{key: 1, genero: 'Homem'}, {key: 2, genero: 'Mulher'}],
      estado: 30,
      statusEstudante: true
     }

     this.cadastrar = this.cadastrar.bind(this)

  }

  cadastrar() {

    if (this.state.inputName ==='' && this.state.inputAge ==='') {
      alert('Preencha todos os dados')
      return
    }
    
    if(this.state.inputName === '') {
      alert('Preencha seu nome')
      return
    }  

    if (this.state.inputAge ==='') {
      alert('Preencha sua idade')
      return
    }
    
    else {
      alert(
        'Funciona !'
      )

      this.setState({name: 'Seu nome é: ' + this.state.inputName })
      this.setState({age: 'Você tem: ' + this.state.inputAge + ' anos'})
      
      this.setState({gender: 'Você é: ' + this.state.gender })

    }
    
  }

  render() { 

    let generoItem = this.state.genders.map ( (v,k) => {
      return <Picker.Item key={k} value={k} label={v.genero} />
    })

    return ( 
      <View style={styles.container}>

        <View style={styles.titleArea}>
          <Text style={styles.titleText}>React</Text>
        </View>

        <View style={styles.contentArea}>
          <TextInput style={styles.input} placeholder='Digite seu nome' onChangeText={ (name) => this.setState({inputName: name}) } />

          <TextInput style={styles.input} placeholder='Digite sua idade' keyboardType='numeric' onChangeText={ (age) => this.setState({inputAge: age}) } />

          <View style={styles.pickerArea}>
            <Picker style={styles.pickerItem} placeholder='Sexo' selectedValue={this.state.gender} onValueChange={ (itemValue, itemIndex) => this.setState({gender: itemIndex}) }>
              {generoItem}
            </Picker>
          </View>

          <View style={styles.sliderArea}>
            <Slider
            minimumValue={300}
            maximumValue={5000}
            value={this.state.estado}
            onValueChange={(valor) => this.setState({estado: valor})}
            />
            <Text style={styles.sliderText} > {this.state.estado.toFixed(0)} </Text>
          </View>

          <View style={styles.switchArea}>
            <Switch
            value={this.state.statusEstudante}
            onValueChange={(valorSwitch) => this.setState({statusEstudante: valorSwitch})}
            />
            <Text style={styles.switchText}>
              Estudante
            </Text>
          </View>

          <TouchableOpacity style={styles.buttonArea} onPress={this.cadastrar}>
            <Text style={styles.buttonText} >Cadastrar</Text>
          </TouchableOpacity>

          <Text>{this.state.name}</Text>
          <Text>{this.state.age}</Text>
        </View>
        
      </View>
     );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E06A00',
  },

  titleArea: {
    alignItems: 'center' ,
    justifyContent: 'center' ,
    margin: 48
  },

  titleText: {
    fontSize: 36,
    color: '#F2F200' ,
    fontWeight: 'bold',
    backgroundColor: '#003091',
    paddingHorizontal: 12,
    paddingVertical: 32 ,
    borderRadius: 16
  },

  contentArea: {
    marginHorizontal: 58

  },

  input: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },

  buttonArea: {
    backgroundColor: '#003091',
    padding: 14,
    borderRadius: 10,
    maxWidth: 200,
    alignSelf: 'center',
    margin: 20
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },

  pickerArea: {
    marginVertical: 5,
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#bdc3c7', 
    overflow: 'hidden',
  },

  pickerItem: {
    backgroundColor: 'white',
  },

  sliderArea: {
    marginVertical: 15
  },

  sliderText: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center'
  },

  switchArea: {
    alignItems:'center',
    flexDirection:'row'
    
  },

  switchText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    textTransform:'uppercase',
    paddingHorizontal: 10
  },
});

export default App;
