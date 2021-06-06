import React from 'react';

class Beranda extends React.Component {
    render() {
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <br />
                    <br />
                    <img src="./image/1.png" width="100" />
                    <h1 className="display-4 img-responsive">ADIWIYATA</h1>
                    <p className="lead">
                        Upaya membangun program atau wadah yang baik dan ideal untuk mendapatkan ilmu pengetahuan 
                        dan berbagai norma serta etika yang dapat menjadi dasar manusia menuju terciptanya kesejahteraan
                        hidup untuk Cita-cita pembangunan berkelanjutan.
                    </p>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-6">
                    <h5 className="card-title">Fungsi</h5>
                    <p className="card-text">
                        Fungsi program adiwiyata ialah agar seluruh pelajar ikut terlibat 
                        dalam segala aktivitas persekolahan demi menuju lingkungan 
                        yang sehat serta mampu menghindari dampak lingkungan yang negatif.
                    </p>
                </div>
                <div className="col-sm-6">
                    <h5 className="card-title">Tujuan</h5>
                    <p className="card-text">
                        Untuk mewujudkan masyarakat sekolah yang peduli dan juga berbudaya dalam 
                        lingkungan dengan, menciptakan kondisi yang lebih baik.
                    </p>
                </div>
                </div>
                <section id="about" class="about">
                <div class="container text-center">
                    <div class="row pt-4 mb-2 mt-4">
                    <div class="col">
                        <h5>Manfaat</h5>
                    </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-md-5">
                        <p>
                        Salah satu manfaat dari Adiwiyata adalah mengubah perilaku 
                        warga sekolah untuk dapat melakukan budaya pelestarian lingkungan.
                        </p>
                    </div>
                    </div>
                </div>
                </section>
                
            </div>
        )
    }
}

export default Beranda;