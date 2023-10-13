import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import '../App.css'

const Home = () => {
    return (
        <div >
            <div className="next">
                <Link to='/practice'>

                    <Button type='primary'>

                        Chuyển sang Trang Thực Hành

                    </Button>
                </Link>
            </div>
            <div className="container">

            <h1>Trang Home</h1>
            <p>Nội dung ngẫu nhiên: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
    );
}

export default Home;
