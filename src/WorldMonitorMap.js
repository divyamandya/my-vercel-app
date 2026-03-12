import React from "react";

function WorldMonitorMap() {
  const mapUrl =
    "https://www.worldmonitor.app/?lat=19.4686&lon=28.8163&zoom=1.81&view=global&timeRange=7d&layers=conflicts%2Cbases%2Chotspots%2Cnuclear%2Csanctions%2Cweather%2Ceconomic%2Cwaterways";

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="World Monitor Map"
      />
    </div>
  );
}

export default WorldMonitorMap;
