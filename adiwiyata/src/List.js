import React, {Component} from 'react';
import $ from 'jquery';

class List extends Component {
    constructor() {
        super();
        this.state = {
            agenda : [
                {id:"1", nama: "Hari Hutan Sedunia", tanggal: "21 Maret"},
                {id:"2", nama: "Hari Bumi", tanggal: "22 April"}
            ],
            id: "",
            nama: "",
            tanggal: "",
            action: ""
        }
    }

    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
        /*
        fungsi ini digunakan untuk memasukkan data dari elemen input ke variabel state.
        contoh ketika input nama diisi, maka secara otomatis variabel nama pada state
        bernilai sesuai dg inputan.
        */
    }

    SaveAgenda = (event) => {
        event.preventDefault();

        //temp digunakan untuk menyimpan sementara
        // data array agenda
        let temp = this.state.agenda;

        if (this.state.action === "insert") {
            /*
            temp akan ditambahkan dengan data siswa yg baru
            sesuai dg data yang dimasukkan pada form
            */
           temp.push({
               id: this.state.id,
               nama: this.state.nama,
               tanggal: this.state.tanggal
           });
        } else if (this.state.action === "update") {
            //mencari index data yang akan diubah
            let index = temp.findIndex(item => item.id === this.state.id);

            //mengubah data array sesuai dg mesukkan pada form
            temp[index].nama = this.state.nama;
            temp[index].tanggal = this.state.tanggal;
        }

        //array siswa diupdate dg nilai data temp
        this.setState({agenda: temp});

        // menutup modal
        $("#modal").modal('hide');
    }

    Add = () => {
        /*
        mengosongkan nilai id nama dan tanggal
        pada saat tombol add ditekan
        */
       this.setState({
           id: "",
           nama: "",
           tanggal: "",
           action: "insert"
       });
    }

    Edit = (item) => {
        // console.log(item);
        this.setState({
            id: item.id,
            nama: item.nama,
            tanggal: item.tanggal,
            action: "update"
        });
    }

    Drop = (index) => {
        /*
        temp digunakan untuk menyimpan sementara
        data array agenda
        */
       let temp = this.state.agenda;

    //    menghapus data pada index yg dihapus
    temp.splice(index, 1);

    // array agenda diupdate dg nilai data temp
    this.setState({agenda: temp});
    }

    render() {
        return(
            <div className="container">
                <br />
                <section id="about" className="about">
                    <div className="row pt-4 mb-2 mt-5 ">
                    <div className="col">
                        <h3>List Agenda</h3>
                    </div>
                    </div>
                </section>
                {/* generate list */}
                <ul className="list-group">
                    {this.state.agenda.map((item, index) => {
                        return(
                            <li className="list-group-item" key={index}>
                                <h5 className="text-info">{item.nama}</h5>
                                <h6>{item.tanggal}</h6>

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

                {/* Elemen form modal */}
                <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>From Agenda</h5>
                            </div>
                            <form onSubmit={this.SaveAgenda}>
                                <div className="modal-body">
                                    Id
                                    <input type="text" name="id" className="form-control" onChange={this.bind} value={this.state.id} />
                                    Nama
                                    <input type="text" name="nama" className="form-control" onChange={this.bind} value={this.state.nama} />
                                    Tanggal
                                    <input type="text" name="tanggal" className="form-control" onChange={this.bind} value={this.state.tanggal} />
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