import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
function TambahMobil() {
    const [formData, setFormData] = useState({
        merk: '',
        model: '',
        nomor_plat: '',
        tarif_sewa_perhari: '',
        gambar_mobil: ''
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
            const response = await fetch('http://127.0.0.1:8000/api/manajemen/create_mobil', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Success handling
                alert('Mobil berhasil ditambahkan!');
            } else {
                // Error handling
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Tambah Mobil</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input type="text" name="merk" placeholder="Merk Mobil" value={formData.merk} onChange={handleChange} style={styles.input} />
                <br />
                <input type="text" name="model" placeholder="Model Mobil" value={formData.model} onChange={handleChange} style={styles.input} />
                <br />
                <input type="text" name="nomor_plat" placeholder="Nomor Plat Mobil" value={formData.nomor_plat} onChange={handleChange} style={styles.input} />
                <br />
                <input type="number" name="tarif_sewa_perhari" placeholder="Tarif Sewa Perhari" value={formData.tarif_sewa_perhari} onChange={handleChange} style={styles.input} />
                <br />
                <input type="text" name="gambar_mobil" placeholder="URL Gambar Mobil" value={formData.gambar_mobil} onChange={handleChange} style={styles.input} />
                <br />
                <button type="submit" style={styles.button}>Tambah Mobil</button>
                <Link to={`/dashboard`}>
                <button type="button" style={styles.button}>Kembali</button></Link>
            </form>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px'
    },
    title: {
        color: '#333',
        fontSize: '24px',
        marginBottom: '30px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '300px',
        fontSize: '16px'
    },
    button: {
        padding: '10px 20px',
        margin: '10px',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer'
    }
};

export default TambahMobil;
