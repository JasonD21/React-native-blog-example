import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Context } from "../context/blogContext";

import { EvilIcons } from "@expo/vector-icons";

const showScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text> {blogPost.title} </Text>
      <Text> {blogPost.content} </Text>
    </View>
  );
};

showScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons style={styles.icon} name="pencil" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    paddingRight: 3,
  },
});

export default showScreen;
