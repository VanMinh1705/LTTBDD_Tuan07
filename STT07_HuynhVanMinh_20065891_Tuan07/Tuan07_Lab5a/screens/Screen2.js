import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { useState } from "react";

const Screen2 = ({ navigation, route }) => {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "272px",
          height: "278px",
          resizeMode: "contain",
          alignSelf: "center",
        }}
        source={route.params.image}
      />
      <Text style={{ fontSize: "20px", fontWeight: 700, marginLeft: "27px" }}>
        {route.params.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginLeft: "30px",
          marginTop: "5px",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "rgba(0, 0, 0, 0.54)",
            fontSize: "15px",
            fontWeight: 700,
          }}
        >
          {route.params.info}
        </Text>
        <Text style={{ fontSize: "20px", fontWeight: 700, marginLeft: "90px" }}>
          ${route.params.price * count}
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: "21px" }}>
        <Image
          style={{
            width: "20px",
            height: "20px",
            marginLeft: "22px",
          }}
          source={require("../assets/Vector.png")}
        />
        <Text
          style={{
            color: "rgba(0, 0, 0, 0.54)",
            fontSize: "15px",
            fontWeight: 700,
            marginLeft: "8px",
          }}
        >
          Delivery in
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: "20px", fontWeight: 700, marginLeft: "40px" }}>
          30 min
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "170px",
          }}
        >
          <Pressable
            onPress={() => {
              setCount(count - 1);
            }}
          >
            <Image
              style={{
                width: "21px",
                height: "21px",
              }}
              source={require("../assets/Group 16.png")}
            />
          </Pressable>
          <Text
            style={{ fontSize: "20px", fontWeight: 700, marginLeft: "10px" }}
          >
            {count}
          </Text>
          <Pressable
            onPress={() => {
              setCount(count + 1);
            }}
          >
            <Image
              style={{
                width: "21px",
                height: "21px",
                marginLeft: "10px",
              }}
              source={require("../assets/Group 15.png")}
            />
          </Pressable>
        </View>
      </View>

      <Text
        style={{
          fontSize: "20px",
          fontWeight: 700,
          marginLeft: "27px",
          marginTop: "20px",
        }}
      >
        Restaurants info
      </Text>
      <Text
        style={{
          color: "rgba(0, 0, 0, 0.67)",
          fontSize: "15px",
          fontWeight: 700,
          marginLeft: "27px",
          marginTop: "10px",
        }}
      >
        Order a Large Pizza but the size is the equivalent of a medium/small
        from other places at the same price range.
      </Text>
      <Pressable
        onPress={() => {
          alert("Add to cart complete!!!");
          navigation.navigate("Home");
        }}
        style={{
          width: "316px",
          height: "58px",
          borderRadius: "5px",
          border: "1px solid rgba(0, 0, 0, 0.20)",
          backgroundColor: "#F1B000",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "56px",
        }}
      >
        <Text style={{ color: "#FFFDFD", fontSize: "25px", fontWeight: 700 }}>
          Add to cart
        </Text>
      </Pressable>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
