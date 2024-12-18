import React from "react";

const PreviewRestaurantManagement = () => {
  // Example restaurant data
  const restaurantDetails = {
    name: "Tasty Bites",
    location: "New Delhi, India",
    cuisines: ["Indian", "Chinese"],
    eventsHandled: 45,
    rating: 4.5,
    profileCompletion: 90,
    status: "Active",
  };

  // Example event history data
  const eventHistory = [
    {
      id: 1,
      eventType: "Birthday Party",
      dateTime: "2024-12-10 7:00 PM",
      noOfGuests: 50,
      budget: "$500",
      status: "Completed",
      specialNotes: "Extra decoration required",
    },
    {
      id: 2,
      eventType: "Corporate Dinner",
      dateTime: "2024-11-20 8:00 PM",
      noOfGuests: 30,
      budget: "$750",
      status: "Cancelled",
      specialNotes: "Client canceled last minute",
    },
    {
      id: 3,
      eventType: "Wedding Reception",
      dateTime: "2024-10-15 6:30 PM",
      noOfGuests: 100,
      budget: "$2000",
      status: "Ongoing",
      specialNotes: "Ensure premium service",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Back Button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => window.history.back()}
      >
        Back
      </button>

      {/* Restaurant Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Restaurant Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 font-medium">Name:</p>
            <p className="text-gray-800">{restaurantDetails.name}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Location:</p>
            <p className="text-gray-800">{restaurantDetails.location}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Cuisines:</p>
            <p className="text-gray-800">{restaurantDetails.cuisines.join(", ")}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Events Handled:</p>
            <p className="text-gray-800">{restaurantDetails.eventsHandled}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Rating:</p>
            <p className="text-gray-800">
              <span className="text-yellow-500 font-semibold">{restaurantDetails.rating}</span> / 5
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Profile Completion:</p>
            <div className="relative w-full bg-gray-200 rounded-full h-4">
              <div
                className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
                style={{ width: `${restaurantDetails.profileCompletion}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{restaurantDetails.profileCompletion}%</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Status:</p>
            <p
              className={`px-3 py-1 rounded text-white inline-block ${
                restaurantDetails.status === "Active"
                  ? "bg-green-500"
                  : restaurantDetails.status === "Pending"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              {restaurantDetails.status}
            </p>
          </div>
        </div>
      </div>

      {/* Event History Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Event History</h2>
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border border-gray-300 text-left">Event Type</th>
              <th className="p-3 border border-gray-300 text-left">Date/Time</th>
              <th className="p-3 border border-gray-300 text-left">No. of Guests</th>
              <th className="p-3 border border-gray-300 text-left">Budget</th>
              <th className="p-3 border border-gray-300 text-left">Status</th>
              <th className="p-3 border border-gray-300 text-left">Special Notes</th>
            </tr>
          </thead>
          <tbody>
            {eventHistory.map((event) => (
              <tr key={event.id} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{event.eventType}</td>
                <td className="p-3 border border-gray-300">{event.dateTime}</td>
                <td className="p-3 border border-gray-300">{event.noOfGuests}</td>
                <td className="p-3 border border-gray-300">{event.budget}</td>
                <td className="p-3 border border-gray-300">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      event.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : event.status === "Ongoing"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>
                <td className="p-3 border border-gray-300">{event.specialNotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewRestaurantManagement;
