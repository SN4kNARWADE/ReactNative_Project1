import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity 
        style={styles.buttonstyle} 
        onPress={() => navigation.navigate("Course")}
      >
        <Text>Course</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonstyle} 
        onPress={() => navigation.navigate("Student")}
      >
        <Text>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonstyle} 
        onPress={() => navigation.navigate("About")}
      >
        <Text>About</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonstyle} 
        onPress={() => navigation.navigate("Contact")}
      >
        <Text>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
   flexDirection:"row",
   margin:25,
   padding:10,

  },
  buttonstyle: {
    padding: 10,
    margin: 5,
    backgroundColor: "lightblue",
    borderWidth:0.5,
    borderColor:"gray",
    borderRadius: 10,
  },
});

export default Menu;
