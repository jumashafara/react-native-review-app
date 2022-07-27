import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ReviewDetails = ({ route, navigation }) => {
  const { dev_name } = route.params;
  return (
    <View>
      <Text>ReviewDetails</Text>
      <Image source={"../assets/images/image1.png"} />
      <Text>Developed by {dev_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewDetails;
