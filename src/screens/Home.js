import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Menu from "../components/Menu";

const Home = ({ channelName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Home Page, {channelName}</Text>
      <Image
        source={{ uri: 'https://st3.depositphotos.com/3051589/36128/i/450/depositphotos_361286638-stock-photo-load-backup-live-streaming-backup.jpg' }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Our online education app offers a comprehensive learning experience with a wide range of courses to help you excel in your studies. Whether you're looking to improve your skills or learn something new, we provide high-quality content designed by experts to ensure your success.
      </Text>
      
      <Menu/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});
