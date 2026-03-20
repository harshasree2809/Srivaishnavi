import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.jfif";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = {
    textDecoration: "none",
    color: scrolled ? "#1a1a2e" : "#1a1a2e",
    fontWeight: "600",
    fontSize: "15px",
    padding: "6px 4px",
    borderBottom: "2px solid transparent",
    transition: "color 0.2s, border-color 0.2s",
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 48px",
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.98)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
        fontFamily: "'Segoe UI', sans-serif",
        transition: "all 0.3s",
      }}
    >
      {/* Logo + School name */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #7c1c2e",
          }}
        />
        <div style={{ lineHeight: "1.2" }}>
          <div
            style={{
              fontWeight: "800",
              fontSize: "17px",
              color: "#7c1c2e",
              letterSpacing: "0.5px",
            }}
          >
            SRI VAISHNAVI
          </div>
          <div style={{ fontSize: "11px", color: "#64748b", fontWeight: "500" }}>
            Group of Schools
          </div>
        </div>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        {[
          { label: "Home", to: "/#home" },
          { label: "About", to: "/#about" },
          { label: "Academics", to: "/#about" },
          { label: "Branches", to: "/#branches" },
          { label: "Contact", to: "/#contact" },
        ].map((item) => (
          <Link key={item.label} to={item.to} style={linkStyle}
            onMouseEnter={e => {
              e.target.style.color = "#7c1c2e";
              e.target.style.borderBottomColor = "#c9a227";
            }}
            onMouseLeave={e => {
              e.target.style.color = "#1a1a2e";
              e.target.style.borderBottomColor = "transparent";
            }}
          >
            {item.label}
          </Link>
        ))}

        {/* Call Us button */}
        <a
          href="tel:+918008990111"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "linear-gradient(135deg, #7c1c2e, #b52a42)",
            color: "#fff",
            textDecoration: "none",
            padding: "9px 22px",
            borderRadius: "25px",
            fontWeight: "700",
            fontSize: "14px",
            boxShadow: "0 4px 14px rgba(124,28,46,0.35)",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(124,28,46,0.5)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(124,28,46,0.35)";
          }}
        >
          📞 Call Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
