import { useState } from "react";
import Header from "./components/Header";
import DigitalClock from "./components/DigitalClock";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {

  // Data mahasiswa disimpan dalam useState
  const [mahasiswa, setMahasiswa] = useState([
    {
      nim: "2301001",
      nama: "Andi Saputra",
      noHp: "081234567801",
      email: "andi@mail.com",
      alamat: "Surabaya",
      prodi: "Informatika",
      tahun: 2023
    },
    {
      nim: "2301002",
      nama: "Budi Santoso",
      noHp: "081234567802",
      email: "budi@mail.com",
      alamat: "Malang",
      prodi: "Sistem Informasi",
      tahun: 2023
    },
    {
      nim: "2301003",
      nama: "Citra Amelia",
      noHp: "081234567803",
      email: "citra@mail.com",
      alamat: "Lumajang",
      prodi: "Informatika",
      tahun: 2023
    },
    {
      nim: "2401001",
      nama: "Dinda Putri",
      noHp: "081234567804",
      email: "dinda@mail.com",
      alamat: "Jember",
      prodi: "Manajemen",
      tahun: 2024
    },
    {
      nim: "2401002",
      nama: "Eko Pratama",
      noHp: "081234567805",
      email: "eko@mail.com",
      alamat: "Kediri",
      prodi: "Informatika",
      tahun: 2024
    }
  ]);

  return (
    <div className="app">
      <Header />

      <main className="container">

        <section className="page-heading">
          <div>
            <h2>Daftar Data Mahasiswa</h2>
            <p>
              Informasi lengkap mahasiswa yang terdaftar.
            </p>
          </div>
        </section>

        <section className="summary-section">

          <div className="summary-card">
            <div>
              <p>Total Mahasiswa</p>
              <h3>{mahasiswa.length}</h3>
              <span>Data mahasiswa terdaftar</span>
            </div>
          </div>

          <DigitalClock />

        </section>

        <StudentTable mahasiswa={mahasiswa} />

        <footer className="footer">
          <p>
            © 2026 Student Management. React UI Implementation Practice.
          </p>
        </footer>

      </main>
    </div>
  );
}

export default App;