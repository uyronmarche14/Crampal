const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How CramPal Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting the study materials you need is simple, fast, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-full h-0.5 w-full -translate-x-8 bg-indigo-200"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Submit Your Request
            </h3>
            <p className="text-gray-600">
              Fill out our simple form with details about what you need -
              subject, topics, deadline, and any special requirements.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-full h-0.5 w-full -translate-x-8 bg-indigo-200"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              We Create Your Materials
            </h3>
            <p className="text-gray-600">
              Our team of academic experts will create custom-tailored study
              materials that match exactly what you need.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Receive &amp; Ace Your Exams
            </h3>
            <p className="text-gray-600">
              Get your materials delivered digitally, review efficiently, and
              improve your academic performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
