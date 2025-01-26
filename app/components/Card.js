"use client"
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const LoanCards = () => {
    const router = useRouter();
    const isUserLoggedIn = () => {
        return localStorage.getItem('user') !== null;
      };
  const loanCategories = [
    {
      name: 'weddingLoan',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGycDdefD9GRQz5ceTJrEn1O3EoXISSrRzmQ&s',
      title: "Wedding Loans",
      description: "Includes Valima, Furniture, Valima Food, Jahez",
      details: "Maximum loan: PKR 5 Lakh | Loan period: 3 years",
    },
    {
      name: 'homeConstructionLoan',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uwW28f6X93iPymLBEIEzL5TLqx9dlx6KHw&s',
      title: "Home Construction Loans",
      description: "Includes Structure, Finishing, Loan",
      details: "Maximum loan: PKR 10 Lakh | Loan period: 5 years",
    },
    {
      name: 'businessStartupLoan',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQNUogk4iC9KHT7_MSIAPX33Hy40P7itbjg&s',
      title: "Business Startup Loans",
      description: "Includes Buy Stall, Advance Rent for Shop, Shop Assets, Shop Machinery",
      details: "Maximum loan: PKR 10 Lakh | Loan period: 5 years",
    },
    {
      name: 'educationLoan',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUVRGUBk5Hz-O_cXDOkH5TDwRdPqQ7sTetA&s',
      title: "Education Loans",
      description: "Includes University Fees, Child Fees Loan",
      details: "Maximum loan: Based on requirement | Loan period: 4 years",
    },
  ];

  const handleCardClick = (loanName) => {
    if (isUserLoggedIn()) {
      router.push(`/LoanForm/${loanName}`);
    } else {
      alert('Please log in to access this feature.');
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {loanCategories.map((loan, index) => (
        <Card key={index} className="w-full shadow-lg cursor-pointer" onClick={() => handleCardClick(loan.name)}>
          <CardHeader>
            <img className='w-full' src={loan.imageUrl}></img>
            <CardTitle className='pt-3'>{loan.title}</CardTitle>
            <CardDescription>{loan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{loan.details}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LoanCards;