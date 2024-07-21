/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const ProductDisplay = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const trackingNumber = searchParams.get("trackingNumber");

   const fetchProduct = async () => {
     try {
       setLoading(true);
       const response = await axios.get(
         `http://localhost:3000/track/${trackingNumber}`
       );


       setTimeout(() => {
         setProduct(response.data);
         setError("");
         setLoading(false);
       }, 3500); 
     } catch (err) {
  
       setTimeout(() => {
         setError("Product not found");
         setProduct(null);
         setLoading(false);
       }, 3500); 
     }
   };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-20 mt-5 text-center p-5 bg-cyan-950 text-white mb-5">
        <h1>SHIPMENT STATUS:</h1>
      </div>

      <div className="mx-40">
        <h1>Shipment Information:</h1>
        <hr className="border-t-2 border-gray-800 my-4"></hr>
        {loading ? (
          <div className="text-center text-4xl">Fetching product....</div>
        ) : error ? (
          <div className="text-center text-4xl text-red-500">{error}</div>
        ) : (
          <div className="ParentContainer flex justify-between items-center">
            <div className="subContainer1">
              <div>
                <h1 className="font-bold">Origin:</h1>
                <p>{product.trackingInfo.origin}</p>
              </div>
              <div>
                <h1 className="font-bold">Destination:</h1>
                <p>{product.trackingInfo.destination}</p>
              </div>
              <div>
                <h1 className="font-bold">Weight:</h1>
                <p>{product.trackingInfo.weight}</p>
              </div>
              <div>
                <h1 className="font-bold">Product:</h1>
                <p>{product.trackingInfo.product}</p>
              </div>
              <div>
                <h1 className="font-bold">Total Freight:</h1>
                <p>{product.trackingInfo.totalFreight}</p>
              </div>
              <div>
                <h1 className="font-bold">Pick-up Date:</h1>
                <p>{product.trackingInfo.pickUpDate}</p>
              </div>
              <div>
                <h1 className="font-bold">Comments:</h1>
                <p>{product.trackingInfo.comments}</p>
              </div>
            </div>
            <div className="subContainer2">
              <div>
                <h1 className="font-bold">Package:</h1>
                <p>{product.trackingInfo.packageQty}</p>
              </div>
              <div>
                <h1 className="font-bold">Carrier:</h1>
                <p>{product.trackingInfo.carrier}</p>
              </div>
              <div>
                <h1 className="font-bold">Expected Delivery Date:</h1>
                <p>{product.trackingInfo.expectedDeliveryDate}</p>
              </div>
              <div>
                <h1 className="font-bold">Pick-up Time:</h1>
                <p>{product.trackingInfo.pickUpTime}</p>
              </div>
            </div>
            <div className="subContainer3">
              <div>
                <h1 className="font-bold">Type of Shipment:</h1>
                <p>{product.trackingInfo.typeOfShipment}</p>
              </div>
              <div>
                <h1 className="font-bold">Carrier Reference Number:</h1>
                <p>{product.trackingInfo.carrierReferenceNo}</p>
              </div>
              <div>
                <h1 className="font-bold">Payment Mode:</h1>
                <p>{product.trackingInfo.paymentMode}</p>
              </div>
              <div>
                <h1 className="font-bold">Departure Time:</h1>
                <p>{product.trackingInfo.departureTime}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
