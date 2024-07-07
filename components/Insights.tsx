import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Insights() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="text-3xl text-center font-medium my-12">Insights</h1>
      <div className="grid p-4 grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-extralight">
              Creating a lifeline for underserved communities by establishing
              accessible pharmacy services in areas lacking adequate healthcare
              resources.
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CalendarIcon className="h-5 w-5" />
              <span>01.03.2024</span>
              <ClockIcon className="h-5 w-5" />
              <span>5 MIN</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-extralight">
              Embracing cutting-edge research and technology to bring
              groundbreaking medical advancements to the forefront of healthcare
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CalendarIcon className="h-5 w-5" />
              <span>28.02.2024</span>
              <ClockIcon className="h-5 w-5" />
              <span>3 MIN</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-extralight">
              By leveraging technology, we aim to enhance patient engagement,
              improve health outcomes, and promote proactive healthcare
              management.
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CalendarIcon className="h-5 w-5" />
              <span>27.02.2024</span>
              <ClockIcon className="h-5 w-5" />
              <span>4 MIN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
