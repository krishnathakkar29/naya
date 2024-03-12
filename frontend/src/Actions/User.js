import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const { data } = await axios.post(
      "/api/v1/login",
      { email: email, incomingPassword: password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(data);

    dispatch({
      type: "loginSuccess",
      payload: data.message.user,
    });
  } catch (error) {
    dispatch({
      type: "loginFailure",
      payload: error,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get("api/v1/myProfile");
    console.log(data);

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
      //upar ka line alag hai
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      payload: error.response.data.message 
    });
  }
};

export const getFollowingPost = () => async (dispatch) => {
  try {
    dispatch({
      type:"postofFollowingRequest"
    })
    const {data} = await axios.get("/api/v1/getFollowing")
    console.log("Posts",data)
    dispatch({
      type:"postofFollowingSuccess",
      payload: data.message.posts
    })
  } catch (error) {
    dispatch({ 
      type: "postofFollowingFailure", 
      payload: error.response.data.message 
    });
  }
};
