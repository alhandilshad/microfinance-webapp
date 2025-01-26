"use client";
import React, { useState } from "react";

const LoanCalculator = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [monthlyInstallment, setMonthlyInstallment] = useState(null);

  const categories = {
    "Wedding Loans": {
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      loanPeriod: 3,
    },
    "Home Construction Loans": {
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    "Business Startup Loans": {
      subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    "Education Loans": {
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      loanPeriod: 4,
    },
  };

  const calculateInstallment = () => {
    if (!selectedCategory || !loanAmount || !loanPeriod) {
      alert("Please fill all the required fields.");
      return;
    }

    const principal = parseFloat(loanAmount);
    const interestRate = 0.1;
    const months = parseInt(loanPeriod) * 12;

    const monthlyRate = interestRate / 12;
    const installment = (
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -months))
    ).toFixed(2);

    setMonthlyInstallment(installment);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
    setLoanAmount("");
    setLoanPeriod(categories[category]?.loanPeriod || "");
    setMonthlyInstallment(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Loan Calculator</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Select Loan Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">-- Select Category --</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Select Subcategory
            </label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="">-- Select Subcategory --</option>
              {categories[selectedCategory].subcategories.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedCategory && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Enter Loan Amount (Max: {categories[selectedCategory].maxLoan})
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              max={
                categories[selectedCategory].maxLoan !== "Based on requirement"
                  ? categories[selectedCategory].maxLoan
                  : null
              }
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        )}

        {selectedCategory && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Select Loan Period (Years)
            </label>
            <input
              type="number"
              value={loanPeriod}
              onChange={(e) => setLoanPeriod(e.target.value)}
              max={categories[selectedCategory].loanPeriod}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        )}

        <button
          onClick={calculateInstallment}
          className="w-full bg-[#8dc63f] text-white py-2 px-4 rounded-lg transition"
        >
          Calculate Installment
        </button>

        {monthlyInstallment && (
          <div className="mt-6 bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold">Monthly Installment:</h2>
            <p className="text-xl">PKR {monthlyInstallment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;