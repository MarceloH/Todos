import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ onChangeText, value }) => {
    return (
        <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            underlineColorAndroid="#000"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        paddingLeft: 20,
        paddingBottom: 20
    }
})

export default Input;