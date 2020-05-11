import React from 'react';
import TRADE_DATA from './trade.data';
import PreviewTrade from '../../components/preview-trades/preview-trades';

// Class trade that takes the json data as input to the constructor as a prop and maps these json
//  to a preview of the tradable item type such as a coin type.

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