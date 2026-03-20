import React from "react";
import chairmanPhoto from "../assets/dean.jfif";

const accent = "#7c1c2e";
const gold   = "#c9a227";
const goldLight = "#f0c94a";

const About = () => {
  const pillars = [
    {
      icon: "🎯",
      title: "Our Mission",
      text: "To develop the unique abilities and potential of each child by offering an enriched educational programme. We strive for excellence through a hands-on approach — rich traditions rooted in an innovative curriculum that grows productive, caring, and intellectually curious citizens.",
    },
    {
      icon: "📖",
      title: "SSE Curriculum",
      text: "Activity-based integrated SSE curriculum from Nursery to Class X, with dedicated IIT & NEET Foundation programmes from Class VI to IX. Digital classrooms, smart boards, and Toppers Academy collaboration ensure every student gets the cutting edge.",
    },
    {
      icon: "🌱",
      title: "Our Philosophy",
      text: "We follow a child-centred educational approach based on scientific observations from birth to adulthood. We believe every child is naturally curious and capable of initiating learning in a supportive, thoughtfully prepared environment.",
    },
    {
      icon: "⭐",
      title: "Why Choose Us?",
      text: "Micro-scheduled curriculum, immersive digital learning, personal & intensive care for every learner, co-curricular excellence in sports, arts, and science — all under one roof across 6+ branches in Andhra Pradesh & Telangana.",
    },
  ];

  const values = [
    { icon: "🤝", label: "Integrity" },
    { icon: "💡", label: "Innovation" },
    { icon: "🏆", label: "Excellence" },
    { icon: "❤️", label: "Compassion" },
    { icon: "🌍", label: "Inclusivity" },
    { icon: "📐", label: "Discipline" },
  ];

  return (
    <section
      id="about"
      style={{ background: "#faf8f5", padding: "80px 0 60px", fontFamily: "'Segoe UI', sans-serif" }}
    >
      {/* ── SECTION HEADER ── */}
      <div style={{ textAlign: "center", marginBottom: "60px", padding: "0 24px" }}>
        <span
          style={{
            display: "inline-block",
            background: `rgba(124,28,46,0.08)`,
            color: accent,
            fontWeight: "700",
            fontSize: "13px",
            padding: "5px 18px",
            borderRadius: "20px",
            letterSpacing: "0.8px",
            marginBottom: "14px",
            border: `1px solid rgba(124,28,46,0.2)`,
          }}
        >
          ABOUT US
        </span>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: "900",
            color: "#1a1a2e",
            margin: "0 0 14px 0",
            letterSpacing: "-0.3px",
          }}
        >
          Sri Vaishnavi Group of Schools
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          As one of the most trusted educational institutions, Sri Vaishnavi School remains
          committed to providing an academically rigorous education — preparing students for
          lives of leadership and service to their community.
        </p>
        <div
          style={{
            width: "64px",
            height: "4px",
            background: `linear-gradient(90deg, ${accent}, ${gold})`,
            borderRadius: "2px",
            margin: "20px auto 0",
          }}
        />
      </div>

      {/* ── CHAIRMAN CARD ── */}
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: "0",
          maxWidth: "1100px",
          margin: "0 auto 72px auto",
          borderRadius: "22px",
          overflow: "hidden",
          boxShadow: "0 12px 48px rgba(0,0,0,0.1)",
          flexWrap: "wrap",
        }}
      >
        {/* Left – photo panel */}
        <div
          style={{
            flexShrink: 0,
            width: "280px",
            minHeight: "380px",
            background: `linear-gradient(160deg, ${accent} 0%, #3f0010 100%)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 24px",
            position: "relative",
          }}
        >
          {/* Decorative circle behind photo */}
          <div
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "rgba(201,162,39,0.12)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -55%)",
            }}
          />
          <div
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              border: `4px solid ${gold}`,
              overflow: "hidden",
              marginBottom: "20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <img
              src={chairmanPhoto}
              alt="Chairman Susheel Verma"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h3
            style={{
              color: "#fff",
              fontSize: "19px",
              fontWeight: "800",
              margin: "0 0 6px 0",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            Susheel Verma
          </h3>
          <span
            style={{
              background: `linear-gradient(90deg, ${gold}, #e08030)`,
              color: "#fff",
              fontWeight: "700",
              fontSize: "12px",
              padding: "4px 16px",
              borderRadius: "20px",
              letterSpacing: "0.5px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Chairman
          </span>
          <p
            style={{
              color: "#d4a87a",
              fontSize: "12px",
              marginTop: "10px",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            MBA, LLB
          </p>
        </div>

        {/* Right – quote + info */}
        <div style={{ flex: 1, background: "#fff", padding: "42px 44px 42px 40px", minWidth: "260px" }}>
          {/* Chairman's quote */}
          <div
            style={{
              background: "#fdf4f5",
              borderLeft: `5px solid ${accent}`,
              borderRadius: "0 10px 10px 0",
              padding: "20px 26px",
              marginBottom: "30px",
            }}
          >
            <p
              style={{
                fontSize: "17px",
                fontStyle: "italic",
                color: "#333",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              "We aim at inspiring our students to dream more, learn more, do more, and become
              more in their respective journeys of life. Every day at Sri Vaishnavi School is
              like a blessing."
            </p>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "13px",
                fontWeight: "700",
                color: accent,
              }}
            >
              — Susheel Verma, Chairman
            </p>
          </div>

          {/* School at a glance */}
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "800",
              color: "#1a1a2e",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              marginBottom: "16px",
            }}
          >
            School at a Glance
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {[
              { icon: "🏫", label: "6+ Branches", sub: "Across AP & Telangana" },
              { icon: "🎓", label: "SSE Affiliated", sub: "Nursery to Class X" },
              { icon: "👨‍🏫", label: "500+ Educators", sub: "Trained & Certified" },
              { icon: "📅", label: "Est. 2012", sub: "13 Years of Trust" },
            ].map((g) => (
              <div
                key={g.label}
                style={{
                  background: "#faf8f5",
                  border: "1px solid #ede8e0",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "22px" }}>{g.icon}</span>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "14px", color: "#1a1a2e" }}>{g.label}</div>
                  <div style={{ fontSize: "11px", color: "#888" }}>{g.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MISSION / CURRICULUM / PHILOSOPHY PILLARS ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 72px auto",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: "800",
            color: "#1a1a2e",
            marginBottom: "36px",
          }}
        >
          Our Commitment to Excellence
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #edebe8",
                borderRadius: "18px",
                padding: "28px 24px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(124,28,46,0.12)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.05)";
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: `rgba(124,28,46,0.08)`,
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "16px",
                }}
              >
                {p.icon}
              </div>
              <h4
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "16px",
                  fontWeight: "800",
                  color: accent,
                }}
              >
                {p.title}
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "13.5px",
                  color: "#555",
                  lineHeight: "1.75",
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CORE VALUES ── */}
      <div
        style={{
          background: `linear-gradient(135deg, ${accent}, #3f0010)`,
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: "800",
            color: "#fff",
            marginBottom: "10px",
          }}
        >
          Our Core Values
        </h2>
        <p style={{ color: "#d4a87a", fontSize: "15px", marginBottom: "36px" }}>
          The principles that guide every student, teacher, and parent in our community.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "16px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {values.map((v) => (
            <div
              key={v.label}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(201,162,39,0.35)",
                borderRadius: "16px",
                padding: "20px 28px",
                minWidth: "110px",
                backdropFilter: "blur(6px)",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(201,162,39,0.15)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{v.icon}</div>
              <div style={{ fontWeight: "700", color: goldLight, fontSize: "13px" }}>{v.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;