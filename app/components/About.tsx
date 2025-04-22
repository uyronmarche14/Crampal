const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About CramPal
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              CramPal is a student-led academic support business that was born
              out of our own struggles with managing coursework and preparing
              for exams.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We&apos;re a team of dedicated students who understand the
              challenges of balancing academics with other responsibilities. Our
              mission is to provide affordable, high-quality study materials
              that help students succeed.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To become the go-to platform for academic help within our
                university and beyond.
              </p>
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-indigo-600 h-48 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    CramPal
                  </h3>
                  <p className="text-indigo-100">Study Smarter, Not Harder</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Business Type
                  </h4>
                  <p className="text-gray-600">
                    Online academic content service
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Services Offered
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Custom-made reviewers (by subject or topic)</li>
                    <li>Summarized reading materials</li>
                    <li>Curated source packs (PDFs, links, slides)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Year 1 Goals
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Launch within our university</li>
                    <li>Reach 200+ paying customers in the first semester</li>
                    <li>Partner with at least 3 campus organizations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
