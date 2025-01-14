import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );

      const realData = await response.json();
      setMyData(realData);
      setIsLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}>Bio-Data</Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
            </Text>
          </View>

          <View style={styles.mainContainer}>
            <Text style={styles.myName}>Name: {item.name}</Text>
            <Text style={styles.myName}>Email: {item.email}</Text>
            <Text style={styles.myName}>Mobile: {item.mobile}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>List of Students</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={myData}
        renderItem={showUserData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20,
  },
  bioDataContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    // fontFamily: "JosefinSans_400Regular"
  },
  mainHeader: {
    fontSize: 30,
    color: "#a18ce5",
    textAlign: "center",
    // fontFamily: "JosefinSans_400Regular",
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    // color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    // fontFamily: "JosefinSans_400Regular",
  },
});

export default UserData;
