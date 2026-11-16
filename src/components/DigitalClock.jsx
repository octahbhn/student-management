import { useState, useEffect } from "react";

function DigitalClock() {
  // Menyimpan waktu saat ini
  const [waktu, setWaktu] = useState(new Date());

  // Menjalankan interval setiap 1 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    // Membersihkan interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-card">

      <div className="card-info">
        <p className="card-label">Waktu Sekarang</p>

        <h2 className="clock-time">
          {waktu.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })}
        </h2>

        <p className="card-description">
          Jam diperbarui secara otomatis
        </p>
      </div>

      <span className="live-badge">LIVE</span>
    </div>
  );
}

export default DigitalClock;