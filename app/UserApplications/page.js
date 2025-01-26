"use client";
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../utils/firebaseConfig";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          console.error("No user is logged in");
          return;
        }

        const userUid = currentUser.uid;
        const q = query(collection(db, "form"), where("uid", "==", userUid));
        const querySnapshot = await getDocs(q);

        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (itemId) => {
    setSelectedItemId((prev) => (prev === itemId ? null : itemId));
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Your Loan Applications</h1>
      {data.length > 0 ? (
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-300">
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Loan Amount</th>
              <th className="px-4 py-2 text-left">Loan Period</th>
              <th className="px-4 py-2 text-left">Initial Deposit</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <tr
                  onClick={() => handleRowClick(item.id)}
                  className={`cursor-pointer transition-colors border-b ${
                    selectedItemId === item.id ? "bg-green-50" : "bg-white"
                  } hover:bg-gray-50`}
                >
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.loanAmount}</td>
                  <td className="px-4 py-2">{item.loanPeriod}</td>
                  <td className="px-4 py-2">{item.initialDeposit}</td>
                  <td className="px-4 py-2">{item.status}</td>
                </tr>
                {selectedItemId === item.id && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-4 bg-gray-50 border-t border-gray-300"
                    >
                      <div>
                        <h3 className="text-xl mb-2">Additional Details</h3>
                        <p className="mb-2">
                          <strong>Description:</strong> {item.statement}
                        </p>
                        <p className="mb-2">
                          <strong>Phone Number:</strong> {item.phoneNumber}
                        </p>
                        <p className="mb-2">
                          <strong>Guarantor 1:</strong> {item.guarantor1.name} ({
                            item.guarantor1.location
                          })
                        </p>
                        <p className="mb-2">
                          <strong>Guarantor 2:</strong> {item.guarantor2.name} ({
                            item.guarantor2.location
                          })
                        </p>
                        <p className="mb-4">
                          <strong>Token Number:</strong> {item.tokenNumber}
                        </p>
                        <div>
                          <strong>QR Code:</strong>
                          <div className="mt-2 border border-gray-300 inline-block">
                            <img
                              src={`https://api.qrserver.com/v1/create-qr-code/?data=${item.qrCodeValue}&size=150x150`}
                              alt="QR Code"
                              className="p-2"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No data found for the current user.</p>
      )}
    </div>
  );
};

export default Page;