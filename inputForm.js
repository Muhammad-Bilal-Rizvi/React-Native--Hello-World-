import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputForm = () => {
    const [text, setText] = useState('');
    console.log(text);
    return(
        <View>
            <TextInput 
            style={styles.input} 
            placeholder='Enter Input Text'
            onChangeText={(val)=> setText(val) } 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        padding: 20
    }
})

export default InputForm;