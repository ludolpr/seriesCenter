// ProfilePage.js
import React from "react";
import SeriesForm from "./seriesForm";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8">
          Article sur une serie
        </h1>
        <SeriesForm />
      </div>
    </div>
  );
};

export default ProfilePage;
