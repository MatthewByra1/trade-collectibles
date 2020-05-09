import React from 'react';
import TRADE_DATA from './trade.data';
import PreviewTrade from '../../components/preview-trades/preview-trades';

class Trade extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            collections: TRADE_DATA
        };
    }

    render() {
        const{collections} = this.state;
        return (
            <div className="TradePage">
            {
                collections.map(({id, ...otherProps}) => (
                    <PreviewTrade key={id} {...otherProps} />
                ))
            }

            </div> 
     );
    }
}

export default Trade;