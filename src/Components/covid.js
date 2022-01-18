import React, { useEffect, useState } from 'react'


const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch(err){
            console.log(err);
        }
    }


    useEffect(() => {
        getCovidData();
    }, []);

    
    return ( 
        <>
            <h1>Live</h1>
            <h2>Covid-19 Tracker update</h2>
            

            <ul>
                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inder'>
                            <p className='card__name'><span> Last </span> Update </p>
                            <p className='card__total card__snall'>{data.lastupdatedtime} </p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inder'>
                            <p className='card__name'><span> Total </span> Confirmed </p>
                            <p className='card__total card__snall'>{data.confirmed} </p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inder'>
                            <p className='card__name'><span> Total </span> Recover </p>
                            <p className='card__total card__snall'>{data.recovered} </p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
} 

export default Covid