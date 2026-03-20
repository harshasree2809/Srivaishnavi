import React, { useState } from "react";

const Contact = () => {
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "14px 16px",
    borderRadius: "10px",
    border: focused === field ? "2px solid #7c1c2e" : "2px solid #e2e8f0",
    background: "#fdf9f9",
    fontSize: "15px",
    color: "#1a1a2e",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: focused === field ? "0 0 0 4px rgba(124,28,46,0.1)" : "none",
    boxSizing: "border-box",
  });

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #3f0010 0%, #7c1c2e 50%, #a0253a 100%)",
        padding: "80px 40px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          display: "flex",
          gap: "50px",
          alignItems: "stretch",
          flexWrap: "wrap",
        }}
      >
        {/* Left panel — info */}
        <div
          style={{
            flex: "1 1 320px",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "28px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "20px",
                padding: "5px 16px",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "16px",
                letterSpacing: "0.5px",
              }}
            >
              ✉️ Get in Touch
            </div>
            <h2
              style={{
                fontSize: "38px",
                fontWeight: "800",
                margin: "0 0 14px 0",
                lineHeight: "1.2",
              }}
            >
              Contact Us
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#e8c9a0",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              We'd love to hear from you! Reach out for admissions, queries, or
              any information about our school programmes.
            </p>
          </div>

          {/* Contact info */}
          {[
            { icon: "📞", label: "Phone", value: "8008990111 / 9999999999" },
            { icon: "📧", label: "Email", value: "info@srivaishnavi.edu.in" },
            { icon: "📍", label: "Head Office", value: "Shiridi Sai Colony, Beeramguda, Hyderabad" },
            { icon: "🕘", label: "Office Hours", value: "Mon – Sat: 9:00 AM – 5:00 PM" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "14px 18px",
              }}
            >
              <span style={{ fontSize: "22px", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: "12px", color: "#f0c94a", fontWeight: "600", marginBottom: "2px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "14px", color: "#fff", fontWeight: "500" }}>
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right panel — form */}
        <div
          style={{
            flex: "1 1 380px",
            background: "#fff",
            borderRadius: "24px",
            padding: "44px 40px",
            boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h3
            style={{
              margin: "0 0 4px 0",
              fontSize: "22px",
              fontWeight: "800",
              color: "#7c1c2e",
            }}
          >
            Send us a Message
          </h3>
          <p style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#64748b" }}>
            Fill in the form below and we'll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Name + Phone row */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 140px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>
                  Full Name *
                </label>
                <input
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("name")}
                />
              </div>
              <div style={{ flex: "1 1 140px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>
                  Phone No.
                </label>
                <input
                  placeholder="e.g. 9876543210"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("phone")}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>
                Email Address *
              </label>
              <input
                required
                type="email"
                placeholder="e.g. you@email.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                style={inputStyle("email")}
              />
            </div>

            {/* Message */}
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>
                Your Message *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Write your inquiry here..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                style={{ ...inputStyle("message"), resize: "vertical" }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                background: submitted
                  ? "linear-gradient(135deg, #16a34a, #22c55e)"
                  : "linear-gradient(135deg, #7c1c2e, #b52a42)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "15px",
                fontWeight: "700",
                fontSize: "16px",
                cursor: "pointer",
                width: "100%",
                transition: "background 0.3s",
                boxShadow: "0 4px 18px rgba(124,28,46,0.4)",
                letterSpacing: "0.3px",
              }}
            >
              {submitted ? "✅ Message Sent!" : "📨 Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;