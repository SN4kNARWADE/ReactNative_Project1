import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import courses from '../API/Courses';

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const renderCourseCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setSelectedCourse(selectedCourse === item.id ? null : item.id)}
      >
        <Text style={styles.buttonText}>Course Details</Text>
      </TouchableOpacity>
      {selectedCourse === item.id && (
        <View style={styles.details}>
          <Text style={styles.detailText}>Course 1: {item.course1}</Text>
          <Text style={styles.detailText}>Course 2: {item.course2}</Text>
          <Text style={styles.detailText}>Course 3: {item.course3}</Text>
          <Text style={styles.detailText}>Price: ${item.price}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  details: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  detailText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Course;
