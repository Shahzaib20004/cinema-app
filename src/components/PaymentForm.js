import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = ({ onSubmit, totalAmount }) => {
  const [method, setMethod] = useState("");
  const [screenshotUploaded, setScreenshotUploaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (method !== "card" && !screenshotUploaded) {
      alert("Please upload payment screenshot for non-card methods!");
      return;
    }

    onSubmit({ method });
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h3>💳 Payment</h3>
      <p>Total Amount: <strong>Rs. {totalAmount}</strong></p>

      <div className="payment-form__group">
        <label>Select Payment Method:</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          required
        >
          <option value="">-- Select --</option>
          <option value="card">Card Payment</option>
          <option value="easypaisa">Easypaisa</option>
          <option value="jazzcash">JazzCash</option>
          <option value="bank">Bank Transfer</option>
          <option value="sadapay">SadaPay</option>
          <option value="nayapay">NayaPay</option>
        </select>
      </div>

      {method !== "card" && method !== "" && (
        <div className="payment-form__group">
          <label>Upload Payment Screenshot:</label>
          <input
            type="file"
            accept="image/*"
            onChange={() => setScreenshotUploaded(true)}
            required
          />
          <p>After uploading, please also WhatsApp it to +92 309 0017510</p>
        </div>
      )}

      {method === "card" && (
        <div className="payment-form__group">
          <label>Card Number:</label>
          <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" required />
          <label>Expiry Date:</label>
          <input type="text" placeholder="MM/YY" required />
          <label>CVV:</label>
          <input type="text" placeholder="CVV" required />
        </div>
      )}

      <button type="submit" className="payment-form__button">Confirm Payment</button>
    </form>
  );
};

export default PaymentForm;
