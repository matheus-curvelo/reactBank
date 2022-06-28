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
      inputName: '',
      inputAge: '',

      gender: '',
      sexo: '',
      genders: [{ key: 1, genero: 'Masculino' }, { key: 2, genero: 'Feminino' }],

      estado: 300,
      estudante: true,
      statusEstudante: '',

    }

    this.cadastrar = this.cadastrar.bind(this)

  }

  cadastrar() {

    this.converter

    if (this.state.inputName === '' && this.state.inputAge === '') {
      alert('Preencha todos os dados')
      return
    }

    if (this.state.inputName === '') {
      alert('Preencha seu nome')
      return
    }

    if (this.state.inputAge === '') {
      alert('Preencha sua idade')
      return
    }

    else {

      {
        if (this.state.gender === 0) {
          this.setState({ sexo: 'Masculino' })

        } if (this.state.gender === 1) {
          this.setState({ sexo: 'Feminino' })
        }
      }

      {
        if (this.state.estudante === true) {
          this.setState({ statusEstudante: 'Sim' })

        } if (this.state.estudante === false) {
          this.setState({ statusEstudante: 'Não' })
        }
      }



      return (
        alert(

          'Nome: ' + this.state.inputName + ' \nIdade: ' + this.state.inputAge + '\nSexo: ' + this.state.sexo + '\nLimite: ' + this.state.estado.toFixed(0) + ' Reais' + '\nEstudante: ' + this.state.statusEstudante

        )
      )




    }

  }

  render() {

    let generoItem = this.state.genders.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.genero} />
    })

    return (
      <View style={styles.container}>

        <View style={styles.titleArea}>
          <Text style={styles.titleText}>React</Text>
        </View>

        <View style={styles.contentArea}>
          <TextInput style={styles.input} placeholder='Digite seu nome' onChangeText={(name) => this.setState({ inputName: name })} />

          <TextInput style={styles.input} placeholder='Digite sua idade' keyboardType='numeric' onChangeText={(age) => this.setState({ inputAge: age })} />

          <View style={styles.pickerArea}>
            <Picker style={styles.pickerItem} selectedValue={this.state.gender} onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}>
              {generoItem}
            </Picker>
          </View>

          <View style={styles.sliderArea}>
            <Slider
              minimumValue={300}
              maximumValue={5000}
              value={this.state.estado}
              onValueChange={(valor) => this.setState({ estado: valor })}
            />
            <Text style={styles.sliderText} > {this.state.estado.toFixed(0)} </Text>
          </View>

          <View style={styles.switchArea}>
            <Switch
              value={this.state.estudante}
              onValueChange={(valorSwitch) => this.setState({ estudante: valorSwitch })}
            />
            <Text style={styles.switchText}>
              Estudante
            </Text>
          </View>

          <TouchableOpacity style={styles.buttonArea} onPress={this.cadastrar}>
            <Text style={styles.buttonText} >Cadastrar</Text>
          </TouchableOpacity>

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
    alignItems: 'center',
    justifyContent: 'center',
    margin: 48
  },

  titleText: {
    fontSize: 36,
    color: '#F2F200',
    fontWeight: 'bold',
    backgroundColor: '#003091',
    paddingHorizontal: 12,
    paddingVertical: 32,
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
    alignItems: 'center',
    flexDirection: 'row'

  },

  switchText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingHorizontal: 10
  },
});

export default App;
