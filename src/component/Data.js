import React from 'react'
import { useEffect, useState } from 'react'
const Data = () => {
    const [first, setfirst] = useState([])
    useEffect(() => {
        fetch('./cars.json').then(
            (ant) => ant.json()).then((json => {
                setfirst(json)
            })
            )
    }, [])
    return (
        <div>
            {
                first.map(item => {
                    return (
                        <>
                            <div className='container'>
                                <div className='row'>
                                    <div className='text'>
                                        <h1>{item.bodyType}</h1>
                                        {item.modelName}<br></br>
                                        {item.modelType}
                                    </div>
                                    <br></br>
                                    <div className="image">
                                        <img src={item.imageUrl} alt="not"></img>
                                    </div>
                                    <br></br>
                                    <div className='butt'>
                                        <button> learn </button>
                                        <button> shop </button>
                                    </div>
                                    <br></br>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
}
export default Data