import React from "react";
import b1 from "../assets/b1.avif";
import b2 from "../assets/b2.jfif";
import b3 from "../assets/b3.jfif";
import b4 from "../assets/b4.jfif";
import b5 from "../assets/b5.jfif";
import b6 from "../assets/b6.jfif";

const branches = [
  { img: b1, name: "Shiridi Sai Colony, Beeramguda", phone: "PH: 99491 72834, 97044 55131" },
  { img: b2, name: "Madhura Nagar Colony, Beeramguda", phone: "PH: 91335 60539, 72888 55579" },
  { img: b3, name: "Srujana Laxi Nagar Patelguda, Sangareddy", phone: "PH: 76809 94992, 97014 44378" },
  { img: b4, name: "Near Gram Panchayat Office, Sahebnagar, Vanasthalipuram", phone: "PH: 8008990111, 9999999999" },
  { img: b5, name: "Bank Colony, Bandlaguda Jagir, Bandlaguda", phone: "PH: 70951 56179, 8008990111" },
  { img: b6, name: "Opposite Raheempura Play Ground, Raheempura, Puranapool", phone: "PH: 90309 77558, 80089 90111" },
];

const Branches = () => {
  return (
    <section style={{ background: "#ffffff", padding: "70px 40px" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "800",
            color: "#1a1a2e",
            margin: "0 0 12px 0",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          Our Branches
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Sri Vaishnavi Group of Schools is spread across 6 locations, bringing quality
          education closer to every community.
        </p>
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "linear-gradient(90deg, #7c1c2e, #c9a227)",
            borderRadius: "2px",
            margin: "18px auto 0",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {branches.map((branch, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              border: "1px solid #e8edf5",
            }}
          >
            <div style={{ height: "200px", overflow: "hidden", background: "#e8ecf0" }}>
              <img
                src={branch.img}
                alt={branch.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                <span
                  style={{
                    background: "rgba(124,28,46,0.08)",
                    borderRadius: "8px",
                    padding: "6px 8px",
                    fontSize: "18px",
                    flexShrink: 0,
                  }}
                >
                  📍
                </span>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#7c1c2e",
                    margin: 0,
                    lineHeight: "1.4",
                    fontFamily: "'Segoe UI', sans-serif",
                  }}
                >
                  {branch.name}
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: "13px", color: "#888", paddingLeft: "38px" }}>
                {branch.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branches;