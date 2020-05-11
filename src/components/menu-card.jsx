import '../sass/menu-card.scss';
import React from 'react';
import { withRouter} from 'react-router-dom';

// Each indiviudal menu item comic books, Dolls, Action Figures and Other Toys, Coins, Alcohol, Vintage Products is mapped from the json state of the main menu

const MenuCard = ({ title, img, size, history, link, match}) => (
	<div style = {{backgroundImage: `url(${img})`}} 
	className={`${size} menu-card`} onClick={() => history.push(`${match.url}${link}`)}>
				<div className="content">
<h1 className="title">{ title.toUpperCase() }</h1>
					<span className="subtitle">Buy and Sell</span>
				</div>
			</div>

);

export default withRouter(MenuCard);