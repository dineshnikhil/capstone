import React from 'react';
import './CategoryItem.styles.scss';

function CategoryItem({ category }) {
	const { id, title, imageUrl } = category;

	return (
		<div className="category-container" key={id}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>shop now</p>
			</div>
		</div>
	);
}

export default CategoryItem;
