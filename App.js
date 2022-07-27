import React from "react";
import { StyleSheet, Button } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewDetails from "./screens/ReviewDetatils";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "forestgreen",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <Button
                title="Info"
                onPress={() => alert("This is a header info button")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={ReviewDetails}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
