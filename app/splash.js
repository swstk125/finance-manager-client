// app/splash.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Navigate to login screen after 5 seconds
    const timer = setTimeout(() => {
      router.replace('/login'); // Use replace to avoid going back to splash
    }, 4000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/dollardog.jpg')} // Adjust the path to your logo
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to Your Personal Finance Manager</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Change to match your design
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default SplashScreen;
