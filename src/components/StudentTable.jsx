
function StudentTable({ mahasiswa }) {
  return (
    <section className="table-section">

      <div className="table-heading">
        <div>
          <h3>Data Mahasiswa</h3>
          <p>Daftar seluruh mahasiswa yang terdaftar.</p>
        </div>

        <span className="data-badge">
          {mahasiswa.length} Mahasiswa
        </span>
      </div>

      <div className="table-wrapper">
        <table>

          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. HP</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>

          <tbody>

            {mahasiswa.map((mhs) => (
              <tr key={mhs.nim}>

                <td>{mhs.nim}</td>

                <td className="student-name">
                  {mhs.nama}
                </td>

                <td>{mhs.noHp}</td>

                <td className="email-text">
                  {mhs.email}
                </td>

                <td>{mhs.alamat}</td>

                <td>
                  <span className="prodi-badge">
                    {mhs.prodi}
                  </span>
                </td>

                <td>{mhs.tahun}</td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>

      <div className="table-footer">
        Menampilkan {mahasiswa.length} data mahasiswa
      </div>

    </section>
  );
}

export default StudentTable;