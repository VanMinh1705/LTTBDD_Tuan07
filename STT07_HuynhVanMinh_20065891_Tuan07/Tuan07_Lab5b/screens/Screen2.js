import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";

const Screen2 = ({ navigation }) => {
  const arr = [
    {
      id: 1,
      image: require("../assets/a-bike.png"),
      name: "Pinarello",
      price: 1800,
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 2,
      image: require("../assets/b-bike.png"),
      name: "Pina Mountain",
      price: 1700,
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 3,
      image: require("../assets/c-bike.png"),
      name: "Pina Bike",
      price: 1500,
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 4,
      image: require("../assets/d-bike.png"),
      name: "Pinarello",
      price: 1900,
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 5,
      image: require("../assets/c-bike.png"),
      name: "Pinarello",
      price: 2700,
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 6,
      image: require("../assets/b-bike.png"),
      name: "Pinarello",
      price: 1350,
      description:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
  ];
  const [bike, setBike] = useState(arr);
  function filterBikes(category) {
    if (category === null) {
      setBike(arr); // Sho+w all bikes
    } else if (category == "Mountain" || category == "Bike") {
      const fill = arr.filter((item) => item.name.includes(category));
      setBike(fill);
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#E94141",
          textAlign: "center",
          fontSize: "25px",
          fontWeight: 700,
          right: "50px",
          marginTop: "30px",
        }}
      >
        The world’s Best Bike
      </Text>
      <View style={{ flexDirection: "row", marginTop: "30px" }}>
        <Pressable
          onPress={() => {
            filterBikes(null);
          }}
          style={{
            width: "99px",
            height: "32px",
            borderRadius: "5px",
            border: "1px solid rgba(233, 65, 65, 0.53)",
            backgroundColor: "rgba(196, 196, 196, 0.00)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#BEB6B6",
              fontSize: "20px",
              fontWeight: 400,
            }}
          >
            All
          </Text>
        </Pressable>
        <Pressable
          onPress={() => filterBikes("Bike")}
          style={{
            width: "99px",
            height: "32px",
            borderRadius: "5px",
            border: "1px solid rgba(233, 65, 65, 0.53)",
            backgroundColor: "rgba(196, 196, 196, 0.00)",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <Text
            style={{
              color: "#BEB6B6",
              fontSize: "20px",
              fontWeight: 400,
            }}
          >
            Roadbike
          </Text>
        </Pressable>
        <Pressable
          onPress={() => filterBikes("Mountain")}
          style={{
            width: "99px",
            height: "32px",
            borderRadius: "5px",
            border: "1px solid rgba(233, 65, 65, 0.53)",
            backgroundColor: "rgba(196, 196, 196, 0.00)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#BEB6B6",
              fontSize: "20px",
              fontWeight: 400,
            }}
          >
            Mountain
          </Text>
        </Pressable>
      </View>

      <FlatList
        numColumns={2}
        data={bike}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Screen3", item);
            }}
            style={{
              width: "167px",
              height: "200px",
              borderRadius: "10px",
              backgroundColor: "rgba(247, 186, 131, 0.15)",
              shadowOffset: { width: "6px", height: "6px" },
              shadowColor: "lightgray",
              margin: 6,
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Image
              style={{ width: "135px", height: "127px", resizeMode: "contain" }}
              source={item.image}
            />
            <Text
              style={{
                color: "rgba(0, 0, 0, 0.60)",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 400,
                marginTop: "10px",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Voltaire",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              ${item.price}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
