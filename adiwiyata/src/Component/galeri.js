import React from 'react';

class Galeri extends React.Component {
    render() {
        return(
            <div>
                <div id="carouselExampleSlideOnly" className="carousel slide" data-ride="carousel">
                    {/* <div className="container"> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./image/6.jpeg" className="d-block w-100 img-fluid" alt="6.jpeg" width="100" height="100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="./image/7.jpg" className="d-block w-100 img-fluid" alt="7.jpeg" width="100" height="100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="./image/8.jpg" className="d-block w-100 img-fluid" alt="8.jpeg" width="100" height="100"/>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                <section id="about" className="about">
                <div className="container text-center">
                    <div className="row pt-4 mb-2 mt-4">
                    <div className="col">
                        <h5>Gallery Adiwiyata</h5>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                        <div className="c-img-box">
                            <img src="image/3.jpeg" className="card-img-top" alt="..." />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                        <div className="c-img-box">
                            <img src="image/4.jpeg" className="card-img-top" alt="..." />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                        <div className="c-img-box">
                            <img src="image/5.jpeg" className="card-img-top" alt="..." />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row mb-5 row-custom">
                    <div className="col-md-4">
                        <div className="card">
                        <div className="c-img-box">
                            <img src="image/9.jpeg" className="card-img-top" alt="..." />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                        <div className="c-img-box">
                            <img src="image/10.jpeg" className="card-img-top" alt="..." />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                        <div className="c-img-box">
                            <img src="image/11.jpeg" className="card-img-top" alt="..." />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Galeri;