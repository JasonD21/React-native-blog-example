import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/blogContext";
import BlogPostForm from "../components/blogPostForm";

const editScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(navigation.getParam("id"), title, content, () =>
          navigation.pop()
        );
      }}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

const styles = StyleSheet.create({});

export default editScreen;
