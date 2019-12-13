import React, { Component } from 'react';
import { Button, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class ButtonBasics extends Component {
  
  // state={
  //   colors:['green', 'blue', 'yellow', 'red'],
  //   buttonColor:'blue'
  // };
  
  // _onPressButton() {
  //   alert('You tapped the button!')
  // }

  constructor(props) {
    super(props);
    this.state = {
      boxColor1: 'red',
      boxColor2: 'red',
      boxColor3: 'red',
      boxColor4: 'red',
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.leftContainer}>
          
          <TouchableOpacity 
            style={styles.buttonStyle} 
            onPress={() => this.setState({boxColor1: 'blue'})} >
            <View >
              <Text style={styles.textStyle}>Button1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={() => this.setState({boxColor2: 'blue'})} >
            <View style={styles.buttonStyle}>
              <Text style={styles.textStyle}>Button2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle} 
            onPress={() => this.setState({boxColor3: 'blue'})} >
            <View style={styles.buttonStyle}>
              <Text style={styles.textStyle}>Button3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle} 
            onPress={() => this.setState({boxColor4: 'blue'})} >
            <View style={styles.buttonStyle}>
              <Text style={styles.textStyle}>Button4</Text>
            </View>
          </TouchableOpacity>

          

        </View>

        <View style={styles.rightContainer}>

          <View style={[styles.boxStyle, {backgroundColor: this.state.boxColor1}]}>
            <Text style={styles.textStyle}>Box1</Text>
          </View>
          <View style={[styles.boxStyle, {backgroundColor: this.state.boxColor2}]}>
            <Text style={styles.textStyle}>Box2</Text>
          </View>
          <View style={[styles.boxStyle, {backgroundColor: this.state.boxColor3}]}>
            <Text style={styles.textStyle}>Box3</Text>
          </View>
          <View style={[styles.boxStyle, {backgroundColor: this.state.boxColor4}]}>
            <Text style={styles.textStyle}>Box4</Text>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#FAEBD7', 
    borderWidth: 5,
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  leftContainer: {
    flex: 1,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 130,
  },
  rightContainer: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 110,
  },
  buttonStyle: {
    borderWidth: 3,
    borderColor: 'yellow',
    width: 80,
    height: 30,
    alignItems: 'center',
  },
  boxStyle: {
    width: 110,
    height: 60,
    paddingVertical: 20,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
