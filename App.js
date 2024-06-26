import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import UserData from './src/screens/UserData';
import Course from './src/screens/Course';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <Home {...props} channelName="Sanika Narwade" />}
        </Stack.Screen>

  <Stack.Screen
  name="Course"
  component={Course}
  options={{
    headerTitleStyle: {
      fontSize: 25,  
    },
    headerTitle: "COURSE CARDS",
    headerTitleAlign: "center",
  }}
/>
<Stack.Screen
  name="Student"
  component={UserData}
  options={{
    headerTitleStyle: {
      fontSize: 25, 
    },
    headerTitle: "Students",
    headerTitleAlign: "center",
  }}
/>
<Stack.Screen
  name="About"
  component={About}
  options={{
    headerTitleStyle: {
      fontSize: 25,  
    },
    headerTitle: "About",
    headerTitleAlign: "center",
  }}
/>
<Stack.Screen
  name="Contact"
  component={Contact}
  options={{
    headerTitleStyle: {
      fontSize: 25,  
    },
    headerTitle: "Contacts",
    headerTitleAlign: "center",
  }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
