import React  from 'react';
import "./preview-trades.scss";

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

const PreviewTrades = ({title, items }) => (
    <div className='tradepage'>
        <h1 className='title'>{title}</h1>
    <div className='preview'> {items.filter((a, idx) => idx < 5).map(({id, name, imageUrl, price}) =>
     (<div key={id}>{TradeItem( name, price, imageUrl)}</div>))}
    
</div>
</div>

);

export default PreviewTrades;
    