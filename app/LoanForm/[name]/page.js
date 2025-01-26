"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from 'next/navigation';
import Swal from 'sweetalert2'

const LoanSubmissionForm = () => {
    const router = useRouter();
    const { name } = useParams();
    const [formData, setFormData] = useState({
      subcategory: '',
      loanPeriod: '',
      initialDeposit: '',
      loanAmount: ''
    });

    const loanSubcategories = {
        weddingLoan: ["Valima", "Furniture", "Valima Food", "Jahez"],
        homeConstructionLoan: ["Structure", "Finishing", "Loan"],
        businessStartupLoan: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
        educationLoan: ["University Fees", "Child Fees Loan"]
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.subcategory || !formData.loanPeriod || !formData.initialDeposit || !formData.loanAmount) {
          alert("Please fill all the inputs");
          return;
        } else {
          var totalAmount = parseInt(formData.loanAmount) - parseInt(formData.initialDeposit);
          var monthlyInstallment = totalAmount / parseInt(formData.loanPeriod);
          Swal.fire({
            title:
              "Your installment amount is " + Math.ceil(monthlyInstallment),
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Proceed",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Succussfully submitted ",
                text: "Our team will contact you",
                icon: "success",
              });
              router.push("/AdditionalDetails");
              localStorage.setItem("formData", JSON.stringify({...formData, name}));
            }
          });
        }
    };

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <form
          className="w-full max-w-lg bg-white shadow-md rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4">Loan Submission Form</h2>

          {name && loanSubcategories[name] && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Subcategory</label>
              <select
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Subcategory</option>
                {loanSubcategories[name].map((subcategory, index) => (
                  <option key={index} value={subcategory}>{subcategory}</option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Loan Period</label>
            <input
              type="text"
              name="loanPeriod"
              value={formData.loanPeriod}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter loan period (in years)"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Initial Deposit</label>
            <input
              type="text"
              name="initialDeposit"
              value={formData.initialDeposit}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter initial deposit"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Loan Amount</label>
            <input
              type="text"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter loan amount"
            />
          </div>

          <Button type="submit">Submit Loan Application</Button>
        </form>
      </div>
    );
};

export default LoanSubmissionForm;