import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button
        title="Go to details"
        onPress={() =>
          navigation.navigate("Detail", { dev_name: "Juma Shafara" })
        }
      />
      <Image
        source={require("../assets/images/image1.jpg")}
        style={{ height: 300, width: 300, alignSelf: "center" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
