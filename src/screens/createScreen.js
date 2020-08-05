import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/blogContext";
import BlogPostForm from "../components/blogPostForm";

const createScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("index"));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default createScreen;
