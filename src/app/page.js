'use client'
import { useEffect, useState } from "react";
import CustomerHeader from "./_component/CustomerHeader";
import Footer from "./_component/Footer";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    loadLocation();
    loadRestaurant();
  }, [])

  const loadLocation = async () => {
    let response = await fetch("http://localhost:3000/api/customer/locations")
    response = await response.json();

    if (response.success) {
      setLocations(response.result);
    }
  }

  const loadRestaurant = async () => {
    let response = await fetch("http://localhost:3000/api/customer")
    response = await response.json();
    if (response.success) {
      setRestaurants(response.result);
    }
  }

  const handleListItem = (item) => {
    setSelectedLocation(item);
    setShowLocation(false);
  }

  return (
    <main>
      <CustomerHeader />

      <div className="main-page-banner">
        <h1>FOOD WEBSITE</h1>
        <div className="input-wraper">
          <input type="text"
            value={selectedLocation}
            className="select-input" placeholder="Select Place"
            onClick={() => setShowLocation(true)}
          />

          <ul className="location-list">
            {
              showLocation && locations.map((item) => (
                <li onClick={() => handleListItem(item)} >{item}</li>
              ))
            }
          </ul>
          <input type="text" className="search-input" placeholder="Enter Food or Retaurant Name" />
        </div>
      </div>

      <div className="restaurant-list-container">
        {
          restaurants.map((item) => (
            <div className="restaurnt-wrapper">
              <div className="heading-wrapper">
                <h3>{item.name}</h3>
                <h5>Contact: {item.contact}</h5>
              </div>
              <div className="address-wrapper">
                <div>{item.city},</div>
                <div className="address">{item.address}, Email: {item.email}</div>
              </div>
            </div>
          ))
        }
      </div>

      <Footer />
    </main>
  );
}
