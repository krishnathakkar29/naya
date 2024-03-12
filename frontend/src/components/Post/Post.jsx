import React, { useState } from "react";
import "./Post.css";
import { Avatar, Button, Typography } from "@mui/material";
import {
  MoreVert,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  DeleteOutline,
} from "@mui/icons-material";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineDeleteOutline,
  MdMoreVert,
} from "react-icons/md";

import { HiOutlineChatBubbleLeft } from "react-icons/hi2";

import { Link } from "react-router-dom";

function Post({
  postId,
  caption,
  postImage,
  likes = [],
  coments = [],
  ownerImage,
  ownerName,
  ownerId,
  isDelete = false,
  isAccount = false,
}) {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="postHeader">
        {isAccount ? (
          <Button>
            {/* <MoreVert /> */}
            <MdMoreVert/>
          </Button>
        ) : null}
      </div>

      <img src={postImage} alt="Postyyyy alt" />

      <div className="postDetails">
        <Avatar
          src={ownerImage}
          alt="User"
          sx={{
            height: "3vmax",
            width: "3vmax",
          }}
        />
        <Link to={`/user/${ownerId}`}>
          <Typography fontWeight={700}>{ownerName}</Typography>
        </Link>

        <Typography
          fontWeight={100}
          color="rgba(0,0,0,0.582)"
          style={{ alignSelf: "center" }}
        >
          {caption}
        </Typography>
      </div>

      <button
        style={{
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
          margin: "1vmax 2vmax",
        }}
      >
        <Typography>5Likes</Typography>
      </button>

      <div className="postFooter">
        <Button onClick={handleLike}>
          {liked ? <MdFavorite style={{ color: "red" }} /> : <MdFavoriteBorder />}
        </Button>
        <Button>
          <HiOutlineChatBubbleLeft />
        </Button>

        {isDelete ? (
          <Button>
            <MdOutlineDeleteOutline />
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Post;
