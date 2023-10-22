import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { FlatList } from "react-native";
import Screen2 from "./screens/Screen2";

function HomeScreen({ navigation }) {
  const arr = [
    {
      id: 1,
      image: require("./assets/donut_yellow 1.png"),
      name: "Tasty Donut",
      info: "Spicy tasty donut family",
      price: 10.0,
    },
    {
      id: 2,
      name: "Pink Donut",
      image: require("./assets/pink_donut 1.png"),
      info: "Spicy tasty donut family",
      price: 20.0,
    },
    {
      id: 3,
      name: "Floating Donut",
      image: require("./assets/green_donut 1.png"),
      info: "Spicy tasty donut family",
      price: 30.0,
    },
    {
      id: 4,
      name: "Tasty Donut",
      image: require("./assets/donut_red 1.png"),
      info: "Spicy tasty donut family",
      price: 40.0,
    },
  ];
  const [selected, setSelected] = useState(1);
  const [donut, setDonut] = useState(arr);
  function fill(category) {
    if (category === null) {
      setDonut(arr);
    } else if (category === "Pink Donut") {
      const filter = arr.filter((item) => item.name.includes(category));
      setDonut(filter);
    } else if (category === "Floating") {
      const filter = arr.filter((item) => item.name.includes(category));
      setDonut(filter);
    } else if (category === search) {
      const filter = arr.filter((item) =>
        item.name.toLowerCase().includes(category.toLowerCase())
      );
      setDonut(filter);
    }
  }
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "rgba(0, 0, 0, 0.65)",
          fontSize: "16px",
          fontWeight: 700,
          marginLeft: "15px",
        }}
      >
        Welcome, Jala!
      </Text>
      <Text style={{ fontSize: "20px", fontWeight: 700, marginLeft: "15px" }}>
        Choice you Best food
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "15px",
          marginTop: "10px",
        }}
      >
        <TextInput
          onChangeText={setSearch}
          value={search}
          style={{
            borderRadius: "3px",
            border: "1px solid #C4C4C4",
            backgroundColor: "rgba(196, 196, 196, 0.10)",
            width: "266px",
            height: "46px",
            fontSize: "16px",
            color: "rgba(0, 0, 0, 0.30)",
            fontWeight: 700,
            paddingLeft: "8px",
          }}
          placeholder="Search food"
        />

        <Pressable
          onPress={() => {
            fill(search);
          }}
        >
          <Image
            style={{ width: "49px", height: "47px", marginLeft: "30px" }}
            source={require("./assets/Group 18.png")}
          />
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", marginTop: "20px" }}>
        <Pressable
          onPress={() => {
            setSelected(1);
            fill(null);
          }}
          style={{
            width: "101px",
            height: "35px",
            borderRadius: "5px",
            border: "1px solid rgba(0, 0, 0, 0.20",
            backgroundColor:
              selected == 1 ? "#F1B000" : "rgba(196, 196, 196, 0.17)",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "14px",
          }}
        >
          <Text
            style={{
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Donut
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setSelected(2);
            fill("Pink Donut");
          }}
          style={{
            width: "101px",
            height: "35px",
            borderRadius: "5px",
            border: "1px solid rgba(0, 0, 0, 0.20",
            backgroundColor:
              selected == 2 ? "#F1B000" : "rgba(196, 196, 196, 0.17)",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "17px",
          }}
        >
          <Text
            style={{
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Pink Donut
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setSelected(3);
            fill("Floating");
          }}
          style={{
            width: "101px",
            height: "35px",
            borderRadius: "5px",
            border: "1px solid rgba(0, 0, 0, 0.20",
            backgroundColor:
              selected == 3 ? "#F1B000" : "rgba(196, 196, 196, 0.17)",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "17px",
          }}
        >
          <Text
            style={{
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Floating
          </Text>
        </Pressable>
      </View>

      <View>
        <FlatList
          data={donut}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                width: "337px",
                height: "115px",
                borderRadius: "10px",
                backgroundColor: "#F4DDDD",
                marginTop: 15,

                alignSelf: "center",
              }}
            >
              <Image
                style={{
                  width: "111px",
                  height: "101px",
                  alignSelf: "center",
                  resizeMode: "contain",
                  backgroundColor: "#fff",
                  marginLeft: "7px",
                }}
                source={item.image}
              />
              <View style={{ marginLeft: "10px" }}>
                <Text
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    marginTop: "12px",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: "rgba(0, 0, 0, 0.54)",
                    fontSize: "15px",
                    fontWeight: 700,
                    marginTop: "8px",
                  }}
                >
                  {item.info}
                </Text>
                <Text
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    marginTop: "8px",
                  }}
                >
                  ${item.price}
                </Text>
              </View>
              <Pressable
                onPress={() => {
                  navigation.navigate("Screen2", item);
                }}
              >
                <Image
                  style={{
                    width: "50px",
                    height: "50px",
                    position: "absolute",
                    left: "-14px",
                    top: "62px",
                  }}
                  source={require("./assets/plus_button.png")}
                />
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
