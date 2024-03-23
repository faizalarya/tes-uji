import './landingpage.css';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

function LandingPage() {
    const [dataMobil, setDataMobil] = useState([]);
    const [searchMerk, setSearchMerk] = useState('');
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const handleSearchChange = (event) => {
        setSearchMerk(event.target.value);
    };

    useEffect(() => {
        fetchData();
    }, [searchMerk]);

    const fetchData = async () => {
        setLoading(true);
        setNotFound(false);

        let apiUrl = 'http://127.0.0.1:8000/api/user/mobil';
        if (searchMerk) {
            apiUrl = `http://127.0.0.1:8000/api/user/mobil/search?merk=${searchMerk}`;
        }

        try {
            const response = await fetch(apiUrl);
            const result = await response.json();

            if (result.data.length === 0) {
                setNotFound(true);
            } else {
                setDataMobil(result.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const token = localStorage.getItem('token');
    console.log(token);

    return (
        <div>
            <Navbar />
            <div className="rental-info">
              <br></br>
                <form onSubmit={(e) => { e.preventDefault(); fetchData(); }}>
                    <input
                        type="text"
                        value={searchMerk}
                        onChange={handleSearchChange}
                        placeholder="Search by Car Brand"
                        style={{
                            padding: '10px',
                            marginRight: '10px',
                            marginLeft: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            width: '200px',
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            borderRadius: '5px',
                            border: 'none',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            cursor: 'pointer',
                        }}
                    >
                        Search
                    </button>
                </form>
            </div>
          <div className="car-list">
            {loading && <p>Loading...</p>}
            {!loading && notFound && <p>Data not found</p>}
            {!loading && !notFound && dataMobil.map(car => (
                <div key={car.id} className="car-card">
                    <img src={car.gambar_mobil} alt={car.merk} className="car-image" />
                    <div className="car-details">
                        <h2>{car.merk} {car.nomor_plat}</h2>
                        <p>Model: {car.model}</p>
                        <p>Harga Sewa Perhari: Rp.{car.tarif_sewa_perhari}</p>
                        {car.ketersediaan ? (
                          <React.Fragment>
                              <p style={{ color: 'green' }}>Ketersediaan: Tersedia</p><br></br>
                              <Link to={`/rental/${car.id}`} className="rental-button">Rental</Link>
                          </React.Fragment>
                        ) : (
                            <p style={{ color: 'red' }}>Ketersediaan: Tidak Tersedia</p>
                        )}
                    </div>
                </div>
            ))}
        </div>

        </div>
    )
}

export default LandingPage;
