import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

const ReviewDetails = ({ route, navigation }) => {
  const { dev_name } = route.params;
  return (
    <View>
      <Text>ReviewDetails</Text>
      <Button
        title="Go to details again"
        onPress={() => navigation.navigate("Details")}
      />
      <Text>Developed by {dev_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewDetails;
