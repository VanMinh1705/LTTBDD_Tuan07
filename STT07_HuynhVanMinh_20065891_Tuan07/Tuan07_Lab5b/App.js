import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: "26px",
          fontWeight: 400,
          marginTop: "50px",
        }}
      >
        A premium online store for sporter and their stylish choice
      </Text>
      <View
        style={{
          width: "359px",
          height: "388px",
          borderRadius: "50px",
          backgroundColor: "rgba(233, 65, 65, 0.10)",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "11px",
        }}
      >
        <Image
          style={{ width: "292px", height: "270px", resizeMode: "contain" }}
          source={require("./assets/a-bike.png")}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: "26px",
          fontWeight: 700,
          marginTop: "21px",
        }}
      >
        POWER BIKE SHOP
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Screen2");
        }}
        style={{
          width: "340px",
          height: "61px",
          borderRadius: "30px",
          backgroundColor: "red",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: "27px",
            fontWeight: 400,
            color: "#fff",
          }}
        >
          Get Started
        </Text>
      </Pressable>
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
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
