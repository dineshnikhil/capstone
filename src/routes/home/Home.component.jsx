import React from 'react';
import { Outlet } from 'react-router-dom';
import DirectoryContainer from '../../Components/directory/DirectoryContainer.component';

function Home() {
	const categories = [
		{
			id: 1,
			title: 'hats',
			imageUrl:
				'https://images.pexels.com/photos/4563870/pexels-photo-4563870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			id: 2,
			title: 'jackets',
			imageUrl:
				'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			id: 3,
			title: 'sneakers',
			imageUrl:
				'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
		{
			id: 4,
			title: 'womens',
			imageUrl:
				'https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			id: 5,
			title: 'mens',
			imageUrl:
				'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
	];
	return (
		<div>
			<DirectoryContainer categories={categories} />
			<Outlet />
		</div>
	);
}

export default Home;
