import React from "react";
import Pychart from "./Pychart";
import Header from "./Header";
import Footer from "./Footer";

function Analytics() {
  React.useEffect(() => {
    document.title = "SoW Tracker || Analytics";
  }, []);

  return (
    <div className="w3-light-grey">
      <Header />
      <div className="w3-main">
        <Pychart />
        <Footer />
      </div>
    </div>
  );
}

export default Analytics;
