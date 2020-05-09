import React from 'react';
import '../sass/mainmenu.scss';
import MenuCard  from './menu-card';
export class MainMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			section: [
				{
					title: ' Comic Books ',
					img: 'https://s29588.pcdn.co/wp-content/uploads/sites/2/2019/05/Rarest-Comic-Books-Featured-Image.jpg.optimal.jpg ',
					id: '1',
					link: "comicbooks"

				},
				{
					title: ' Dolls, Action Figures and Other Toys ',
					img: 'https://i.ytimg.com/vi/sqFfNWZm5fc/maxresdefault.jpg',
					id: '2',
					link: "dollsactionfigures"
					
				},
				{
					title: 'Coins',
					img: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Old_Indian_coins_collection.jpg',
					id: '3',
					link: "coins"
					
				},
				{
					title: 'Alcohol',
					img: 'https://media.timeout.com/images/105634730/630/472/image.jpg',
					size: 'large',
					id: '4',
					link: "alcohol"
				},
				{
					title: 'Vintage',
					img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1stdibsgalleries-145-antiques-8601-1553550341.jpg',
					size: 'large',
					id: '5',
					link: "vintage"
					
				}
			]
		}
	}
	render() {
	return (<div className="main-menu">
		{
			this.state.section.map(({id, ...otherSectionProps}) => (
				<MenuCard key={id} {...otherSectionProps} />
			))
		}
</div>
);
}
    
}
