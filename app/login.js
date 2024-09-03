import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();

  const LoginScreen = () => {
    
  }

  return (

    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput 
        placeholder="Enter your email" 
        style={{ borderBottomWidth: 1, marginBottom: 10 }} 
      />
      <Text>Password</Text>
      <TextInput 
        placeholder="Enter your password" 
        secureTextEntry 
        style={{ borderBottomWidth: 1, marginBottom: 20 }} 
      />
      <Button title="Login" onPress={() => { /* Handle login */ }} />
      <Button 
        title="Don't have an account? Sign up" 
        onPress={() => router.push('/signup')} 
      />
    </View>
  );
};

export default Login;
