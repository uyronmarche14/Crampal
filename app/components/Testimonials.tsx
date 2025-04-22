const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what fellow
            students have to say about CramPal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="font-bold text-indigo-600">MJ</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">Maria Johnson</h4>
                <p className="text-sm text-gray-600">Biology Major</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &quot;CramPal saved me during finals week! The reviewer they made
              contained exactly what was on the exam. Definitely worth it.&quot;
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="font-bold text-indigo-600">DT</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">David Torres</h4>
                <p className="text-sm text-gray-600">Engineering Student</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &quot;The formula sheets and concept summaries helped me pass
              Calculus II. Fast delivery and excellent quality!&quot;
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="font-bold text-indigo-600">AL</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">Amara Lee</h4>
                <p className="text-sm text-gray-600">Psychology Student</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &quot;I struggle with making my own notes, and CramPal&apos;s
              reviewers are so well-organized. My grades have improved
              significantly!&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
