import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button
        title="Go to details"
        onPress={() =>
          navigation.navigate("Details", { dev_name: "Juma Shafara" })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
