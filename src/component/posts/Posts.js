import React from "react";
import Post from "./post/Post";
import makeStyles from "./style.js";

const posts = () => {
	const classes = makeStyles();
	return (
		<div>
			<h2>This is posts</h2>
			<Post />
		</div>
	);
};

export default posts;
