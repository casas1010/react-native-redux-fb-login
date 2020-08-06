import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const ReviewScreen = (props) => {
  return (
    <View>
      <Text>ReviewScreen</Text>

    </View>
  );
};
const styles = StyleSheet.create({});

ReviewScreen.navigationOptions = (props) => ({
  title: "Review Jobs",
  headerRight: () => (
    <Button
      title="Settings"
      onPress={() => {
            props.navigation.navigate('settings')
      }}
    />
  ),
});

export default ReviewScreen;
