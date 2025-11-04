"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-full  flex flex-col lg:flex-row items-center justify-center gap-10 p-16 bg-gray-50">
      {/* Left Side Text */}
      <div className="flex-1 items-center justify-center gap-10 p-16 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Visualize Your Creative Imagination
        </h1>
        <p className="text-gray-700 text-lg">
          Cosmic Media Pvt Ltd is dedicated to transforming ideas into reality
          through innovative media solutions. We specialize in creative
          storytelling, digital content creation, and bringing your vision to
          life with precision and style.
        </p>
      </div>

      {/* Right Side Logo */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <Card className="p-6 shadow-lg bg-white rounded-2xl">
          <CardContent className="flex items-center justify-center">
            <Image
              src="/logo.png" // replace with your logo path
              alt="Cosmic Media Logo"
              width={250}
              height={150}
              className="object-contain"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
