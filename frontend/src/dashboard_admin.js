import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

function DashboardAdmin() {
    const [mobilList, setMobilList] = useState([]);
    const token = localStorage.getItem('token');
    if (token == null) {
        window.location.replace('/login'); 
    }
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/user/mobil');
            if (response.ok) {
                const result = await response.json();
                setMobilList(result.data);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/manajemen/hapus_mobil/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.ok) {
                // Success handling
                fetchData(); // Fetch data again to update the list after deletion
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleUpdateAvailability = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/manajemen/update_ketersediaan/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            
            if (response.ok) {
                // Penanganan jika berhasil
                fetchData(); // Ambil data lagi untuk memperbarui daftar setelah memperbarui ketersediaan
            } else {
                console.error('Error:', response.statusText);
            }
            
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-heading">Welcome to Dashboard Admin</h1>
            <nav className="dashboard-navigation">
            <ul className="dashboard-menu">
                <li className="dashboard-menu-item">
                    <Link to="/dashboard/tambahmobil" className="dashboard-link">Tambah Mobil</Link>
                </li>
                <li className="dashboard-menu-separator"></li>
                <li className="dashboard-menu-item">
                    <Link to="/dashboard/listrent" className="dashboard-link">List Rent</Link>
                </li>
                <li className="dashboard-menu-separator"></li>
                <li className="dashboard-menu-item">
                    <Link to="/dashboard/logout" className="dashboard-link">Logout</Link>
                </li>
            </ul>
            </nav>

            <br></br>
            <table className="mobil-table">
                <thead>
                    <tr>
                        <th>Gambar</th>
                        <th>Merk</th>
                        <th>Model</th>
                        <th>Tarif Sewa per Hari</th>
                        <th>Ketersediaan</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mobilList.map(mobil => (
                        <tr key={mobil.id}>
                            <td><img src={mobil.gambar_mobil}></img></td>
                            <td>{mobil.merk}</td>
                            <td>{mobil.model}</td>
                            <td>${mobil.tarif_sewa_perhari}</td>
                            <td>{mobil.ketersediaan ? 'Tersedia' : 'Tidak Tersedia'}</td>
                            <td>
                                <button onClick={() => handleDelete(mobil.id)} className="action-button delete-button">Hapus</button> || &nbsp;
                                <button onClick={() => handleUpdateAvailability(mobil.id)} className="action-button">{mobil.ketersediaan ? 'Nonaktifkan' : 'Aktifkan'}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DashboardAdmin;
