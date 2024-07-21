import mongoose from "mongoose";
const typeString = { type: String };


const productSchema = new mongoose.Schema(
  {
    trackingNumber: typeString,
    trackingInfo: {
      origin: typeString,
      destination: typeString,
      weight: typeString,
      product: typeString,
      totalFreight: typeString,
      pickUpDate: { type: Date },
      comments: typeString,
      packageQty: typeString,
      carrier: typeString,
      expectedDeliveryDate: { type: Date },
      pickUpTime: { type: Date },
      status: typeString,
      typeOfShipment: typeString,
      carrierReferenceNo: typeString,
      paymentMode: typeString,
      departureTime: { type: Date },
    },
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export { Product };
