"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const videos = [
  { id: "_WrkOjq8ats", title: "Video 1" },
  { id: "n8SOLBeUpDM", title: "Video 2" },
  { id: "DpvmJRlhJP8", title: "Video 3" },
  { id: "DpvmJRlhJP8", title: "Video 4" },
  { id: "TEqKe89sP9o", title: "Video 5" },
  { id: "_WrkOjq8ats", title: "Video 6" },
  { id: "n8SOLBeUpDM", title: "Video 7" },
  { id: "DpvmJRlhJP8", title: "Video 8" },
  { id: "DpvmJRlhJP8", title: "Video 9" },
  { id: "TEqKe89sP9o", title: "Video 10" },
];

const YouTubeRow = () => {
  return (
    <div className="flex gap-4 overflow-x-auto py-4">
      {videos.map((video, index) => (
        <Card key={index} className="min-w-[320px]">
          <CardHeader>
            <CardTitle className="text-sm">{video.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              width="320"
              height="180"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default YouTubeRow;
