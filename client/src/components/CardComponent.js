import React from 'react';
import CardForRestaurant from '../components/CardForRestaurants';
import '../components/styleFood.css';

export default function CardComponent() {
    return (
        <>
        <div className="food">
                        </div>
                        <div className="text-food">
                            <h1>Food and drink</h1>
                            <div />
                        </div>
        <div className="container pt-5 pb-5" style={{display: "flex", flexWrap: "wrap"}}>
            <CardForRestaurant/>
        </div>
        </>
    )
}
