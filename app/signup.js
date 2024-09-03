import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

const Signup = () => {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text>Name</Text>
      <TextInput 
        placeholder="Enter your name" 
        style={{ borderBottomWidth: 1, marginBottom: 10 }} 
      />
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
      <Button title="Sign Up" onPress={() => { /* Handle signup */ }} />
      <Button 
        title="Already have an account? Login" 
        onPress={() => router.push('/login')} 
      />
    </View>
  );
};

export default Signup;
