import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const BlogReducer = (state, action) => {
  switch (action.type) {
    // case "add_BlogPost":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 99999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];
    case "delete_BlogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "edit_BlogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "get_BlogPosts":
      return action.payload;
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/BlogPosts");
    dispatch({ type: "get_BlogPosts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/BlogPosts", { title, content });
    // dispatch({ type: "add_BlogPost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/BlogPosts/${id}`);
    dispatch({ type: "delete_BlogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/BlogPosts/${id}`, { title, content });
    dispatch({ type: "edit_BlogPost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
