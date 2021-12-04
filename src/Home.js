import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt=""
                />

                <div className="home__row">
                    <Product 
                        id="1" 
                        title='The lean startup'
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                        rating={4}/>

                    <Product 
                        id="2" 
                        title='Toronto Blue Jays T-Shirt'
                        price={25.90} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61XisLZeSzL.__AC_SX300_SY300_QL70_ML2_.jpg" 
                        rating={2}/>

                    <Product 
                        id="3" 
                        title='Champ Jersey T-Shirt'
                        price={37.69} 
                        image="https://m.media-amazon.com/images/I/61Dhh27qEAS._AC_UY879_.jpg" 
                        rating={4}/>
                </div>

                <div className="home__row">
                <Product 
                        id="4" 
                        title='Nintendo Switch OLED'
                        price={449.99} 
                        image="https://m.media-amazon.com/images/I/61k5IJVYTUL._AC_SX679_.jpg" 
                        rating={5}/>

                <Product 
                        id="5" 
                        title='IPhone 11'
                        price={1399.99} 
                        image="https://m.media-amazon.com/images/I/81ZYM5wSWOL._AC_SY879_.jpg" 
                        rating={4}/>
                </div>

                <div className="home__row">
                    <Product 
                        id="6" 
                        title='Dog Coats'
                        price={39.99} 
                        image="https://m.media-amazon.com/images/I/61wieyYaAuL._AC_SL1500_.jpg" 
                        rating={3}/>

                    <Product 
                        id="7" 
                        title='Fire TV Cube'
                        price={99.99} 
                        image="https://m.media-amazon.com/images/I/41J618I94lL._AC_SL1000_.jpg" 
                        rating={1}/>

                    <Product 
                        id="8" 
                        title='Hersheys 10ct'
                        price={20.21} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51tWBG3DnTL.__AC_SX300_SY300_QL70_ML2_.jpg" 
                        rating={3}/>

                </div>

            </div>
        </div>
        
    )
}

export default Home
