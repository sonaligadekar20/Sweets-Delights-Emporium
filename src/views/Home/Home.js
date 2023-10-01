import React from 'react'
import "./Home.css"
import Config from "./../../utils/config.json"

function Home() {
    return (
        <>
            <div className='container' style={{ backgroundColor: Config.theme.accentColor }}>
                <h1 className='text-center' style={{ color: Config.theme.DangerColor }}>{Config.title}</h1>
                <p className='text-description'>{Config.description}</p>
               
               <div className='flex-container'>
               {
                    Config.services.map((serviceData, index) => {
                        const { title, img, description, price } = serviceData
                        return (

                            <div className='card m-3' key={index}>
                                <div className='card-body'>
                                    <h3 className='card-title' style={{ color: Config.theme.secondaryColor }}>{title}</h3>
                                    <img src={img} className='sweet-img' />
                                    <p className='card-text'>{description}</p>
                                    <p className='card-text'><b>Price:</b> {price}</p>
                                    <button className='btn btn-danger d-block mx-auto buy-btn' >Order Now</button>
                                </div>
                            </div>
                        )
                    })
                }

               </div>
               
            </div>
        </>
    )
}
export default Home;    