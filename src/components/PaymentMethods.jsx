import React from "react";

function PaymentMethods() {
  const paymentLogos = [
    { name: "Cash on Delivery", src: "https://via.placeholder.com/60x30?text=COD" },
    { name: "Visa", src: "https://via.placeholder.com/60x30?text=Visa" },
    { name: "MasterCard", src: "https://via.placeholder.com/60x30?text=MC" },
    { name: "Easypaisa", src: "https://via.placeholder.com/60x30?text=EP" },
    { name: "JazzCash", src: "https://via.placeholder.com/60x30?text=JC" },
    { name: "UnionPay", src: "https://via.placeholder.com/60x30?text=UP" },
    { name: "HBL", src: "https://via.placeholder.com/60x30?text=HBL" },
    { name: "Daraz Wallet", src: "https://via.placeholder.com/60x30?text=DW" },
  ];

  return (
    <div className="bg-gray-50 border-t py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment Methods */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              Payment Methods
            </h3>
            <div className="flex flex-wrap gap-2">
              {paymentLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="border rounded-md bg-white p-1 shadow-sm flex items-center justify-center h-10 w-20"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-6 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Verified By */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              Verified by
            </h3>
            <div className="flex flex-wrap gap-2">
              <div className="border rounded-md bg-white p-1 shadow-sm flex items-center justify-center h-10 w-20">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/65/PCI-DSS-logo.png"
                  alt="PCI DSS"
                  className="max-h-6 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;
