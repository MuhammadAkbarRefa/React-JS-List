import React from 'react';

class HariBesar extends React.Component {
    render() {
        return(
            <div>
                <div className="jumbotron1 jumbotron-fluid">
                <div className="container">
                </div>
                </div>
                <div className="card-body bg-success">
                <div className="col">
                    <h5>AGENDA HARI - HARI BESAR KEMENTERIAN LINGKUNGAN HIDUP DAN KEHUTANAN</h5>
                </div>
                <table class="table table-hover table-dark">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Kegiatan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>10 Januari</td>
                    <td>Hari Perencanaan Gerakan 1 Juta Pohon</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>2 Februari</td>
                    <td>Hari Lahan Basah Se-Dunia</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>21 Februari</td>
                    <td>Hari Peduli Sampah Nasional</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>6 Maret</td>
                    <td>Hari Strategi Konservasi Se-Dunia</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>16 Maret</td>
                    <td>Hari Bhakti Rimbawan</td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td>20 Maret</td>
                    <td>Hari Kehutanan Se-Dunia</td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                    <td>21 Maret</td>
                    <td>Hari Hutan Internasional</td>
                    </tr>
                    <tr>
                    <th scope="row">8</th>
                    <td>22 Maret</td>
                    <td>Hari Air Se-Dunia</td>
                    </tr>
                    <tr>
                    <th scope="row">9</th>
                    <td>23 Maret</td>
                    <td>Hari Meteorolgi</td>
                    </tr>
                    <tr>
                    <th scope="row">10</th>
                    <td>22 April</td>
                    <td>Hari Hari Bumi</td>
                    </tr>
                </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default HariBesar;