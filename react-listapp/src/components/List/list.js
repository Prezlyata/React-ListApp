import React, { Component } from 'react';
import './list.css';

export class List extends Component {
    render() {
        return(
           

                <div className='list'>
                   
                        {this.props.products.map((product, id) => (
                            <div class='list_items' key={id}>
                                <div class='list_items_name'>
                                    {product.name}
                                </div>
                                <div class='list_items_price'>
                                    {product.price}
                                </div> 
                            </div>
                        ))}
    
                </div>
            
        );
    }
}