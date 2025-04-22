import { ArrowRight } from "lucide-react";
import CardHeader from "./ui_design/cardHeader";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
            Study <span className="text-indigo-600">Smarter</span>,<br />
            Not Harder.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            Custom-made reviewers and curated study materials delivered fast for
            college and senior high students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#order"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center shadow-lg transition"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#how-it-works"
              className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 font-medium px-6 py-3 rounded-lg flex items-center justify-center transition"
            >
              How It Works
            </a>
          </div>
          <p className="text-gray-600 italic">
            &quot;Helping Students Beat the Deadline—One Reviewer at a
            Time.&quot;
          </p>
        </div>
        <CardHeader />
      </div>
    </div>
  );
};

export default Hero;
