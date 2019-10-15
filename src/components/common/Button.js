import React, { Component } from 'react';
import { TouchableOpacity, Text, View , ViewPropTypes} from 'react-native';
import PropTypes from "prop-types";
import TextInput from './TextInput';

const Button = props => {
    let {
        onPress
    } = props;
    return (
    <TouchableOpacity 
    style={[{top: 50,alignSelf: 'center', justifyContent: 'center',borderRadius: 20,},props.style]}
    onPress={onPress}
    >
    <View style={[
        {
          width: 200,
          height: 50,
          borderRadius: 20,
          justifyContent: 'center',
          alignSelf: 'center',
        },
    ]} >
     <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
         {props.Text}
     </Text>
    </View>
    </TouchableOpacity>
    );
};

Button.defaultProps={
    style:ViewPropTypes.style
}

export default Button;