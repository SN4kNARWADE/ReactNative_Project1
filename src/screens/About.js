import { Linking, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Sanika Narwade</Text>
      <Text style={styles.paraStyle}>I am a React native Developer !..</Text>

      <View>
        <Image style={styles.imgStyle}
            source={{
                uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }}
        />
        </View>
        
            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}>About me</Text>
                <Text style={styles.paraStyle}>A React developer specializes in building user interfaces and front-end applications using the React.js library. They create reusable components, manage application state, and ensure efficient rendering of UI elements. React developers work closely with back-end developers to integrate APIs and optimize performance. They are skilled in JavaScript, HTML, CSS, and often use tools like Redux, Webpack, and Babel. Their expertise also includes testing, debugging, and ensuring cross-browser compatibility.</Text>
            </View>
        
        <Text style={styles.mainHeader}>Follow me on Social Network</Text>
        <View style={styles.menuContainer}>
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=>
            Linking.openURL("https://www.linkedin.com/in/sanika-narwade-11a649222/")
            } >

            <Image
                style={styles.iconStyle}
                source={{uri:"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"}}
            />
                
            </TouchableOpacity>

            <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://discord.gg/AN8ThRBXtY")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
            }}
          />
        </TouchableOpacity>


        </View>
      </View>
    

  );
};



const styles = StyleSheet.create({
     aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
    // fontFamily: "JosefinSans_700Bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    // color:"#fff",
    paddingBottom: 10,
  },
  aboutLayout: {
    // backgroundColor: "#4c5dab",
    backgroundColor:"black",
    // paddingHorizontal: 30,
    marginVertical: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    // marginVertical: 15,
    // fontFamily: "JosefinSans_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});


export default About