import React from "react";
import { ArrowRight, FileText } from "lucide-react";
const CardHeader = () => {
  return (
    <div className="lg:w-1/2">
      <div className="relative">
        <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-indigo-600 h-16 flex items-center px-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-white ml-4 font-medium">
              CramPal Dashboard
            </span>
          </div>
          <div className="p-6 space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800">
                Modern Psychology 101
              </h3>
              <p className="text-sm text-gray-600">
                &quot;Final Exam Reviewer&quot;
              </p>
              <div className="flex items-center mt-2">
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div className="h-2 w-3/4 bg-indigo-600 rounded-full"></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">75%</span>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-2 rounded-md">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">
                  Your Custom Reviewer is Ready!
                </h4>
                <p className="text-sm text-gray-600">
                  Economics 201 - 32 pages with key concepts highlighted
                </p>
                <a
                  href="#"
                  className="text-sm text-indigo-600 font-medium flex items-center mt-1"
                >
                  Download Now <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800">
                Recent Orders
              </h3>
              <div className="mt-3 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Biology Chapter 5-7
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Delivered
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Calculus II Formula Sheet
                  </span>
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                    In Progress
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 h-40 w-40 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute -top-4 -left-4 h-40 w-40 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-30"></div>
      </div>
    </div>
  );
};

export default CardHeader;
