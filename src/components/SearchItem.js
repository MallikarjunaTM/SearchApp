import React from 'react';
import './SearchItem.css';

const SearchItem  = ({data})=>{

    return(<div className='items'>
        <div id='item'>
            <h4 >Login: {data.login}</h4>
            <h4 >type: {data.type}</h4>
        </div>
        <div id='item'>
            <h4><img  id='image' src={data.avatar_url} alt='img'/></h4>
        </div>
        
    </div>)
}

export default SearchItem;