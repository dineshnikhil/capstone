import React from 'react';
import CategoryItem from '../category_item/CategoryItem.component';
import './DirectoryContainer.styles.scss';

function DirectoryContainer({ categories }) {
	return (
		<div className="directory-container">
			{categories.map((category) => {
				return <CategoryItem category={category} />;
			})}
		</div>
	);
}

export default DirectoryContainer;
