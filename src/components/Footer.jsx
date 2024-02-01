import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      &copy; 2024 movieMingle. All rights reserved.
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
    padding: "13px",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
};
export default Footer;
