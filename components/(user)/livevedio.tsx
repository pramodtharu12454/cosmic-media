"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Award, Users, Briefcase } from "lucide-react"; // ✅ Icons

const LiveVideo: React.FC = () => {
  const videoId = "wXNplWq5rzE"; // Your YouTube video ID
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`;

  // 🔢 Counter States
  const [experience, setExperience] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const [awards, setAwards] = useState(0);

  // 🎯 Auto Count Effect
  useEffect(() => {
    const animateValue = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      end: number,
      duration: number
    ) => {
      let start = 0;
      const increment = end / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setter(Math.floor(start));
      }, 20);
    };

    animateValue(setExperience, 10, 1000);
    animateValue(setVisitors, 50000, 2000);
    animateValue(setAwards, 10, 1000);
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 p-4 bg-gray-50">
      {/* Main Video Section */}
      <div className="w-full lg:w-3/4 h-[500px] lg:h-[600px] bg-black flex justify-center items-center rounded-md shadow-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/4 flex flex-col gap-4">
        <Link
          href="/"
          className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition text-center"
        >
          Cosmic TV
        </Link>

        <Link
          href="/about"
          className="bg-green-500 text-white py-3 rounded-lg shadow hover:bg-green-600 transition text-center"
        >
          About Us
        </Link>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6 text-center">
          <div className="flex flex-col items-center">
            <Briefcase className="w-10 h-10 text-purple-700 mb-2" />
            <h3 className="text-3xl font-bold text-purple-700">{experience}+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-10 h-10 text-green-600 mb-2" />
            <h3 className="text-3xl font-bold text-green-600">
              {visitors.toLocaleString()}
            </h3>
            <p className="text-gray-600">Visitors</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-10 h-10 text-yellow-600 mb-2" />
            <h3 className="text-3xl font-bold text-yellow-600">{awards}+</h3>
            <p className="text-gray-600">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVideo;
