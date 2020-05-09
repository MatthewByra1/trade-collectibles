import '../sass/menu-card.scss';
import React from 'react';
import { withRouter} from 'react-router-dom';

// comic books, Dolls, Action Figures and Other Toys, Coins, Alcohol, Vintage Products, Other

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