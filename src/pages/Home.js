
import React, { useState, useEffect } from 'react'
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import ListData from './ListData';
import "slick-carousel/slick/slick-theme.css";
import '../../node_modules/rc-tabs/assets/index.css';
import Tabs, { TabPane } from 'rc-tabs';
import './Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const ScrolData = styled.button`
padding: 0.5rem 1rem 0.5rem 0;
      font-size: 24px;
      background: none;
      border: none;
      font-weight: 600;
      
      color: ${({ isActive }) => isActive ? `#fd7e14` : '#333'};
      &:hover, &:focus {
        outline: none!important;
        text-decoration: underline;
      }
`

const Home = () => {

    const [product, setProduct] = useState([]);
    const [dishes, setDishes] = useState('');

    const fetchData = () => {
        fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
                setProduct(data);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    const getInfo = () => {
        console.log("data")
    }
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
    }
    return <div>
        <Navbar />
        <div className="container pt-5">
            {product.map((e) => (
                <div>
                    <div className="row">
                        <div className="col-lg-3 pt-4 pb-3">
                            <h3 style={{textAlign: "left"}}>{e.restaurant_name}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <Tabs defaultActiveKey="1" tabBarGutter={30}>
                            {e.table_menu_list?.map((menu_category) => (
                                <TabPane tab={menu_category.menu_category} key={menu_category.menu_category_id}>
                                    <div className="">

                                        {
                                            menu_category.category_dishes?.map(product => <ListData  product={product} />)
                                        }

                                    </div>
                                </TabPane>
                            ))}
                        </Tabs>
                    </div>
                    {/* <div className="row">
                        {e.table_menu_list.filter((y) => y.menu_category_id === dishes).map((s, index) => (
                            <div className="row">
                                {s.category_dishes.map((product, index) => (
                                    <div>
                                        <ListData product={product} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div> */}
                </div>
            ))}

        </div>
        {/* <Footer /> */}
    </div>
}

export default Home;