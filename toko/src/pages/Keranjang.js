import React from "react"
import Card from "../component/Card"
import $ from "jquery"
import "bootstrap/dist/js/bootstrap.bundle"
import { event } from "jquery"

class Keranjang extends React.Component{
    constructor(){
        super()
        this.state = {
            barang: [
                {
                    kode:"1", nama_barang:"Rinso", harga:5000, jumlah:2, total:10000
                },
                {
                    kode:"2", nama_barang:"Sampo", harga:1000, jumlah:10, total:10000
                },
            ],

            action: "",
            kode: "",
            nama_barang: "",
            harga: 0,
            jumlah: 0,
            total: 0,
            selectedItem: null,
            keyword: "",
            filterBarang: []
        }

        this.state.filterBarang = this.state.barang

    }

    Add = () => {
        // menampilkan komponen modal
        $("#modal_barang").modal("show")
        this.setState({
            kode: Math.random(1, 100000),
            nama_barang: "",
            harga: 0,
            jumlah: 0,
            total: 0,
            action: "insert"
        })
    }

    Edit = (item) => {
        // mengedit tampilan modal
        $("#modal_barang").modal("show")
        this.setState({
            kode: item.kode,
            nama_barang: item.nama_barang,
            harga: item.harga,
            jumlah: item.jumlah,
            total: item.total,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state barang
        let tempBarang = this.state.barang

        if (this.state.action === "insert") {
            // menambah data baru
            tempBarang.push({
                kode: this.state.kode,
                nama_barang: this.state.nama_barang,
                harga: this.state.harga,
                jumlah: this.state.jumlah,
                total: this.state.total,
            })
        }else if(this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempBarang.indexOf(this.state.selectedItem)
            tempBarang[index].kode = this.state.kode
            tempBarang[index].nama_barang = this.state.nama_barang
            tempBarang[index].harga = this.state.harga
            tempBarang[index].jumlah = this.state.jumlah
            tempBarang[index].total = this.state.total
        }

        this. setState({barang : tempBarang})

        // menutup komponen modal_buku
        $("#modal_barang").modal("hide")
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin?")) {
            // menghapus data
            let tempBarang = this.state.barang

            // posisi index data yang akan dihapus
            let index = tempBarang.indexOf(item)

            // hapus data
            tempBarang.splice(index, 1)

            this.setState({barang : tempBarang})
        }
    }

    searching = event => {
        if(event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter

            let keyword = this.state.keyword.toLowerCase()
            let tempBarang = this.state.barang
            let result = tempBarang.filter(item => {
                return item.nama_barang.toLowerCase().includes(keyword)
            })

            this.setState({filterBarang: result})
        }
    }

    render(){
        return(
            <div className="container">
                <input type="text" className="form-control my-2" placeholder="Search"
                onChange={ev => this.setState({keyword: ev.target.value})}
                onKeyUp={ev => this.searching(ev)} />

                <div className="row">
                    { this.state.filterBarang.map( (item, index) => (
                        <Card 
                        nama_barang = {item.nama_barang}
                        harga = {item.harga}
                        jumlah = {item.jumlah}
                        total = {item.total}
                        onEdit = {() => this.Edit(item)}
                        onDrop = {() => this.Drop(item)}
                        />
                    )) }
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>

                {/* component modal sebagai contoh manipulasi data */}
                <div className="modal" id="modal_barang">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header bg-info">
                                Form Barang
                            </div>

                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>

                                    Nama barang
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.nama_barang}
                                    onChange={ev => this.setState({nama_barang: ev.target.value})}
                                    required />

                                    Harga Barang
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.harga}
                                    onChange={ev => this.setState({harga: ev.target.value})}
                                    required />

                                    jumlah Barang
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.jumlah}
                                    onChange={ev => this.setState({jumlah: ev.target.value})}
                                    required />

                                    Total Harga
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.total}
                                    onChange={ev => this.setState({total: ev.target.value})}
                                    required />

                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Keranjang;