import React from 'react';
import $ from 'jquery';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            keranjang : [
                {nama_barang: "Rinso", harga: "10000", jumlah: "2", total: "20000"},
                {nama_barang: "Beras", harga: "15000", jumlah: "1", total: "15000"},
            ],
            nama_barang: "",
            harga: "",
            jumlah: "",
            total: "",
            action: ""
        }
    }

    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
        /*
        fungsi ini digunakan untuk masukkan data dari elemen input ke variabel state,
        contoh ketika input nama diisi maka secara otomatis variabel nama pada state bernilai sesuai dg inputan.
        */
    }

    SaveBarang = (event) => {
        event.preventDefault();

        // temp digunakan untuk menyimpan sementara
        // data array agenda
        let temp = this.state.keranjang;

        if (this.state.action === "insert") {
            /*
            temp akan ditambahkan dg data siswa yg baru
            sesuai dg data yang dimasukkan pada form
            */
           temp.push({
               nama_barang: this.state.nama_barang,
               harga: this.state.harga,
               jumlah: this.state.jumlah,
               total: this.state.total
           });
        } else if (this.state.action === "update") {
            // mencari index data yg akan diubah
            let index = temp.findIndex(item => item.nama_barang === this.state.nama_barang);

            // mengubah data array sesuai dg masukkan pada form
            temp[index].harga = this.state.harga;
            temp[index].jumlah = this.state.jumlah;
            temp[index].total = this.state.total;
        }

        // array keranjang diupdate dg nilai data temp
        this.setState({keranjang: temp});

        // menutup modal
        $("#modal").modal('hide');
    }

    Add = () => {
        /*
        mengosongkan nilai nama_barang, harga, jumlah, total
        pada saat tombol add ditekan
        */
       this.setState({
           nama_barang: "",
           harga: "",
           jumlah: "",
           total: "",
           action: "insert"
       });
    }

    Edit = (item) => {
        this.setState({
            nama_barang: item.nama_barang,
            harga: item.harga,
            jumlah: item.jumlah,
            total: item.total,
            action: "update"
        });
    }

    Drop = (index) => {
        /*
        temp digunakan untuk menyimpan sementara
        data array keranjang
        */
       let temp = this.state.keranjang;

    //    menghapus data pada index yg dihapus
    temp.splice(index, 1);

    // array keranjang diupdate dg nilai data temp
    this.setState({keranjang: temp});
    }

    render() {
        return(
            <div className="container">
                {/* <section id="about" className="about">
                    <div className="row pt-4 mb-2 mt-5 ">
                    <div className="col"> */}
                        <h3>List keranjang</h3>
                    {/* </div>
                    </div>
                </section> */}
                {/* generate list */}
                <ul className="list-group">
                    {this.state.keranjang.map((item, index) => {
                        return(
                            <li className="list-group-item" key={index}>
                                <h5 className="text-info">{item.nama_barang}</h5>
                                <h6>{item.harga}</h6>
                                <h6>{item.jumlah}</h6>
                                <h6>{item.total}</h6>

                                <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}
                                        data-toggle="modal" data-target="#modal">
                                    Edit
                                </button>
                                <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(item)}>
                                    Hapus
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <button className="btn btn-sm btn-success m-3" onClick={() => this.Add()}
                        data-toggle="modal" data-target="#modal">
                    Tambah Data
                </button>

                {/* elemen form modal */}
                <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>From Keranjang</h5>
                            </div>
                            <form onSubmit={this.SaveBarang}>
                                <div className="modal-body">
                                    Nama Barang
                                    <input type="text" name="nama_barang" className="form-control" onChange={this.bind} value={this.state.nama_barang} />
                                    Harga
                                    <input type="text" name="harga" className="form-control" onChange={this.bind} value={this.state.harga} />
                                    Jumlah
                                    <input type="text" name="jumlah" className="form-control" onChange={this.bind} value={this.state.jumlah} />
                                    Total
                                    <input type="text" name="total" className="form-control" onChange={this.bind} value={this.state.total} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;