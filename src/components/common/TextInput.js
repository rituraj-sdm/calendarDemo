import React from 'react';
import ReactNative from 'react-native';
import { Image, View, TextInput, StyleSheet } from 'react-native';

const TextInputComponent = props => {
    let {
        placeHolderText,
        placeHolderColor,
        inputStyle,
        value,
        image,
        onChangeText,
        maximumLength,
        autoFocus,
        secureTextEntry
    } = props;
    return (
        <View style={{
            backgroundColor:"white",
            top: 20,
        }}> 
        {image&& <Image source={image} />}
            <TextInput
                autoFocus={autoFocus}
                inputStyle={[styles.inputStyle, inputStyle]}
                style={styles.styleGlobal}
                value={value}
                placeholder={placeHolderText}
                placeHolderTextColor={placeHolderColor}
                onChangeText={onChangeText}
                maxLength={maximumLength}
                secureTextEntry={secureTextEntry}
                // {...props}
            />
        </View>
    );
};
export default TextInputComponent;

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        color: 'white',
        fontSize: 20,
    },
    styleGlobal: {
        width: "100%",
        borderBottomWidth: 0.5,
        marginVertical:10,
        height: 40,
        borderBottomColor: "lightgray",
        paddingHorizontal: 10,
      },
})