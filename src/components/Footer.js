import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Cinema Booking. All rights reserved.</p>
      <p>Thanks for choosing us — you’re smart for booking online! 🍿🎬</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "auto",
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "15px",
    fontSize: "14px",
  },
};

export default Footer;
