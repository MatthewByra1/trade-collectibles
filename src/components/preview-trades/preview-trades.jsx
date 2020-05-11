import React  from 'react';
import "./preview-trades.scss";

// Function that creates an individual item to be traded
const TradeItem = (name, price, imageUrl) => (
    <div className= 'tradeItem'> <div className= 'img' style={
        {
            backgroundImage: `url(${imageUrl})`
        }
        }/>
        <div className="tradeFooter">
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
    </div>
    
)

// Maps the title and items of the json file to a trade item 
const PreviewTrades = ({title, items }) => (
    <div className='tradepage'>
        <h5 className='title'>{title}</h5>
    <div className='preview'> {items.filter((a, idx) => idx < 5).map(({id, name, imageUrl, price}) =>
     (<div key={id}>{TradeItem( name, price, imageUrl)}</div>))}
    
</div>
</div>

);

export default PreviewTrades;
    