import React from "react";

const Map = () => {
  return (
    <div style={{width:'100%'}}>
      <iframe
        width="100%"
        height="300"
   
    
        src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Blog%20App)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        {/* <a href="https://www.gps.ie/">gps devices</a> */}
      </iframe>
    </div>
  );
};

export default Map;
