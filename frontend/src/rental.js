import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './rental.css'; // Import file CSS untuk styling

function Rental() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        nama: '',
        alamat: '',
        nomor_telepon: '',
        nomor_sim: '',
        tanggal_awal: '',
        tanggal_akhir: '',
       
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/user/mobil/rental/${id}/${jumlah_hari}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                // Berhasil melakukan penyewaan mobil, lakukan penanganan sukses di sini
                alert('Pemesanan mobil berhasil.');
                window.location.replace('/'); 
            } else {
                // Gagal melakukan penyewaan mobil, lakukan penanganan error di sini
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            // Tangani kesalahan dalam pengiriman data ke API
            console.error('Error:', error);
        }
    };

    const hitungJumlahHari = () => {
        const { tanggal_awal, tanggal_akhir } = formData;
        const start = new Date(tanggal_awal);
        const end = new Date(tanggal_akhir);
        const differenceInTime = end.getTime() - start.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return differenceInDays;
    };
    const jumlah_hari = hitungJumlahHari();
    
  
    return (
        <div className="rental-container">
            <h2>Rental Mobil #{id}</h2>
            <form onSubmit={handleSubmit} className="rental-form">
                <div className="form-group">
                    <label htmlFor="nama">Nama:</label>
                    <input
                        type="text"
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="alamat">Alamat:</label>
                    <input
                        type="text"
                        id="alamat"
                        name="alamat"
                        value={formData.alamat}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nomorTelepon">Nomor Telepon:</label>
                    <input
                        type="text"
                        id="nomorTelepon"
                        name="nomor_telepon"
                        value={formData.nomor_telepon}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nomorSIM">Nomor SIM:</label>
                    <input
                        type="text"
                        id="nomorSIM"
                        name="nomor_sim"
                        value={formData.nomor_sim}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tanggalAwal">Tanggal Awal:</label>
                    <input
                        type="date"
                        id="tanggalAwal"
                        name="tanggal_awal"
                        value={formData.tanggal_awal}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tanggalAkhir">Tanggal Akhir:</label>
                    <input
                        type="date"
                        id="tanggalAkhir"
                        name="tanggal_akhir"
                        value={formData.tanggal_akhir}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jumlahHari">Jumlah Hari:</label>
                    <input
                        type="text"
                        id="jumlahHari"
                        name="jumlah_hari"
                        value={jumlah_hari}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Rental;
