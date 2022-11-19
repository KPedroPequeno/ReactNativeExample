import * as React from 'react';

import { BackHandler, View, Text, TextInput, Button } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Api from '../core/api'



export default function Login() {
  const navigation = useNavigation()
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  })

  async function entrar() {
    let result = await Api.postResult('/api/login')
    console.log(result, "resultLogin")

    if (result.succeeded) {
      navigation.navigate("Home")
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>Teste 1</Text>
      <TextInput placeholder='Login'></TextInput>
      <TextInput placeholder='Pass' secureTextEntry={true}></TextInput>

      <Button onPress={entrar} title="Entrar">Entrar</Button>
    </View>
  );
}