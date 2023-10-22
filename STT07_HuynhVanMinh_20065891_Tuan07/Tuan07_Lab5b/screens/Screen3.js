import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Screen3 = ({ route }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "359px",
          height: "388px",
          borderRadius: "5px",
          backgroundColor: "rgba(233, 65, 65, 0.10)",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          shadowOffset: { width: "5px", height: "5px" },
          shadowColor: "lightgray",
          marginTop: "5px",
        }}
      >
        <Image
          style={{ width: "297px", height: "340px", resizeMode: "contain" }}
          source={route.params?.image}
        />
      </View>
      <Text style={{ fontSize: "35px", fontWeight: 400, marginLeft: "8px" }}>
        {route.params?.name}
      </Text>
      <Text
        style={{
          color: "rgba(0, 0, 0, 0.59)",
          fontSize: "35px",
          fontWeight: 400,
          marginLeft: "8px",
        }}
      >
        ${route.params?.price}
      </Text>
      <Text style={{ fontSize: "25px", fontWeight: 400, marginLeft: "8px" }}>
        Description
      </Text>
      <Text
        style={{
          color: "rgba(0, 0, 0, 0.57)",
          fontSize: "22px",
          fontWeight: 400,
          marginLeft: "8px",
        }}
      >
        {route.params?.description}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginLeft: "8px",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: "35px", height: "35px" }}
          source={require("../assets/heart.png")}
        />
        <Pressable
          style={{
            width: "269px",
            height: "54px",
            borderRadius: "30px",
            backgroundColor: "#E94141",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "31px",
          }}
        >
          <Text
            style={{
              color: "#FFFAFA",

              fontSize: "25px",

              fontWeight: 400,
            }}
          >
            Add to card
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
