import React, { useState, useEffect } from 'react';
import './listrent.css';

function ListRent() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://127.0.0.1:8000/api/manajemen/listrent', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data || data.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className="dashboard-table-container">
            <h2>List of Rents</h2>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Alamat</th>
                        <th>Mobil</th>
                        <th>Nomor Plat</th>
                        <th>Nomor Sim</th>
                        <th>Nomor Telepon</th>
                        <th>Tanggal Awal</th>
                        <th>Tanggal Akhir</th>
                        <th>Total Bayar</th>
                        {/* Add more table headers if needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nama}</td>
                            <td>{item.alamat}</td>
                            <td>{item.merk}</td>
                            <td>{item.nomor_plat}</td>
                            <td>{item.nomor_sim}</td>
                            <td>{item.nomor_telepon}</td>
                            <td>{item.tanggal_awal}</td>
                            <td>{item.tanggal_akhir}</td>
                            <td>{item.total_bayar}</td>
                            {/* Render other data fields as needed */}
                        </tr>
                    ))}   
                </tbody>
            </table>
        </div>
    );
}

export default ListRent;
