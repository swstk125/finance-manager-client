// app/index.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/splash'); // Redirect to splash screen
    }, 0); // Immediate redirect

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}