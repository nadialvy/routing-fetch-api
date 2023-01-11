import Router from 'next/router'
import { useDispatch } from 'react-redux';
import store from '../src/store';
import React, { useEffect } from 'react';

function handleCardClick(city) {
    Router.push(`/cities/${city.slug}`);
}

export default function ListCity({ city }){
    return(
        <div
            onClick={()=>{
                handleCardClick(city);
                getDetailWeather(city.latitude, city.longitude);
            }}
            className="w-1/5 mx-2 my-4 h-20 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex items-center justify-center hover:cursor-pointer"
        >
             <h1 className="text-xl text-white font-semibold line-clamp-2 text-center">{city.name}</h1>
        </div>
    );
}

export async function getDetailWeather(lat, long) {
    const dispatch = useDispatch();

    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=43ea6baaad7663dc17637e22ee6f78f2`);
        const data = await res.json();
        console.log(data);
        store.dispatch({type: 'GET_WEATHER_SUCCESS', payload: data});
        return data;
    } catch (err){
        console.log(err);
    }
}