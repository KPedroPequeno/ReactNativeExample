import * as React from 'react';
import { View, Text, TextInput, Button  } from "react-native";
// import Api from '../../core/api';^



export default function ProfileScreen() {

    async function componentDidMount() {
        // console.log("teste123", "test ")
        // let result = await Api.getResult("api/movies")
        // console.log(result)
      }

    return (

        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput placeholder='Digite'  style={{ fontSize: 16, fontWeight: '700' }}></TextInput >
            <Button onPress={componentDidMount} title='Teste 123'>Teste</Button>
        </View>
    );
}