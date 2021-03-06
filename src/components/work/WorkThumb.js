import React from "react";
import styles from "./WorkThumb.module.scss";

const WorkPost = ({ thumbnail, title, type }) => {
	return (
		<div>
			<div className={styles.container}>
				<img className={styles.img} src={thumbnail} alt="" />
				<div className={styles.hover}>
				{/* TODO transitions */}
					<h2>{title}</h2>
					<p>{type}</p>
				</div>
			</div>
		</div>
	);
};

export default WorkPost;
