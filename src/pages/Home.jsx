import React, { useState, useEffect } from "react";
import bg from "../assets/school_hero_bg.png";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const stats = [
    { num: "13+", label: "Years of Excellence" },
    { num: "5000+", label: "Students Enrolled" },
    { num: "6+", label: "Branches Across AP & TS" },
    { num: "500+", label: "Trained Educators" },
  ];

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "94vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            filter: "brightness(0.45)",
            transform: "scale(1.03)",
            zIndex: 0,
          }}
        />

        {/* Gradient overlay — maroon tint on left, transparent right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, rgba(60,10,20,0.88) 42%, rgba(0,0,0,0.18) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "60px 64px",
            maxWidth: "700px",
            color: "#fff",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s ease",
          }}
        >
          {/* Trust badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(201,162,39,0.18)",
              border: "1px solid rgba(201,162,39,0.55)",
              color: "#f0c94a",
              fontWeight: "700",
              fontSize: "13px",
              padding: "6px 18px",
              borderRadius: "30px",
              marginBottom: "26px",
              letterSpacing: "0.6px",
              backdropFilter: "blur(6px)",
            }}
          >
            ✦ Since 2012 — A Journey to Excellence
          </div>

          {/* School Name */}
          <h1
            style={{
              fontSize: "clamp(38px, 5.5vw, 66px)",
              fontWeight: "900",
              lineHeight: "1.1",
              margin: "0 0 4px 0",
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            Sri Vaishnavi
          </h1>
          <h1
            style={{
              fontSize: "clamp(38px, 5.5vw, 66px)",
              fontWeight: "900",
              lineHeight: "1.1",
              margin: "0 0 22px 0",
              background: "linear-gradient(90deg, #f0c94a, #e08030)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.5px",
            }}
          >
            Group of Schools
          </h1>

          {/* Recognition bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
              flexWrap: "wrap",
            }}
          >
            {["SSE Affiliated", "Govt. of Telangana Recognised"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#e5e5e5",
                  fontSize: "12px",
                  fontWeight: "600",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  backdropFilter: "blur(4px)",
                }}
              >
                ✓ {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "15.5px",
              color: "#d9cab0",
              margin: "14px 0 34px 0",
              lineHeight: "1.8",
              maxWidth: "580px",
            }}
          >
            Nurturing young minds with a broad and balanced curriculum — SSE, IIT & NEET Foundation
            programmes from Class VI to IX, digital classrooms, and holistic co-curricular activities.
            Learners today, leaders tomorrow.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
            <a
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #7c1c2e, #b52a42)",
                color: "#fff",
                textDecoration: "none",
                border: "none",
                borderRadius: "10px",
                padding: "14px 30px",
                fontWeight: "700",
                fontSize: "15px",
                cursor: "pointer",
                boxShadow: "0 6px 22px rgba(124,28,46,0.5)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(124,28,46,0.6)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 22px rgba(124,28,46,0.5)";
              }}
            >
              🎓 Admissions Open 2025–26
            </a>
            <a
              href="/#about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.35)",
                borderRadius: "10px",
                padding: "14px 30px",
                fontWeight: "700",
                fontSize: "15px",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              }}
            >
              📚 Explore Academics
            </a>
          </div>


        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #7c1c2e 0%, #5a1020 100%)",
          padding: "28px 48px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{ textAlign: "center", color: "#fff" }}
          >
            <div
              style={{
                fontSize: "clamp(28px, 3vw, 38px)",
                fontWeight: "900",
                background: "linear-gradient(90deg, #f0c94a, #e08030)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {s.num}
            </div>
            <div style={{ fontSize: "13px", color: "#e8c9a0", fontWeight: "600", marginTop: "4px" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;