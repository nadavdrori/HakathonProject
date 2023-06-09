import React from "react";
const LocationTracker = () => {
  const [latitude, setLatitude] = React.useState<number | null>(null);
  const [longtitude, setLongtitude] = React.useState<number | null>(null);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongtitude(position.coords.longitude);
    });
  }, []);

  return (
    <div>
      <button className="btn btn-primary">Log in</button>
    </div>
  );
};

export default LocationTracker;
