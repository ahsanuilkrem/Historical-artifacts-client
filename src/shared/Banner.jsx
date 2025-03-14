import React from 'react';

const Banner = () => {
    return (
        <div className='my-7'>
            <div className="carousel w-full h-[430px]">
                <div id="item1" className="carousel-item w-full  ">
                    <img
                        
                        src='https://i.ibb.co.com/WDqZ7s3/pexels-ruveyda-akkaya-770127160-29032345.jpg'
                        className="w-full "  />
                </div>
                <div id="item2" className="carousel-item w-full bg-cover bg-center">
                    <img
                        src='https://i.ibb.co.com/ZVStzhw/Roman-helmet2.jpg'
                        className="w-full bg-cover bg-center" />
                </div>
                <div id="item3" className="carousel-item w-full ">
                    <img
                        src="https://i.ibb.co.com/dK6zCVb/Mayan-Calendar.jpg"
                        className="w-full bg-cover bg-center" />
                </div>
                <div id="item4" className="carousel-item w-full ">
                    <img
                        src="https://i.ibb.co.com/5jT0s2m/pexels-soner-arkan-277045183-13337127.jpg"
                        className="w-full " />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;