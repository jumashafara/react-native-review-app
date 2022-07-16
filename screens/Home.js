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
          navigation.navigate("Detail", { dev_name: "Juma Shafara" })
        }
      />
      <View style={{ marginTop: 10 }}>
        <Button
          title="Update title"
          onPress={() => navigation.setOptions({ title: "Shafy-Home" })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
