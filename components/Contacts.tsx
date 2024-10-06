import React from 'react';

const Contacts: React.FC = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900" id="contactUs">
            Visitez nous
          </h2>
          <p className="mt-3 text-lg text-gray-500">Laissez-nous vous servir le mieux</p>
        </div>
        <div className="mt-8 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information Section */}
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                  <p className="mt-1 font-bold text-gray-600">
                    <a href="tel:+123">numero: +216</a>
                  </p>
                  <a className="flex m-1" href="tel:+216">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                        appeler
                      </div>
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">notre Address</h3>
                  <p className="mt-1 text-gray-600">15 rue France, Ben Arous</p>
                </div>
                {/* <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">Monday - Sunday: 2pm - 9pm</p>
                </div> */}
              </div>
            </div>

            {/* Google Maps Embed Section */}
            <div className="rounded-lg overflow-hidden order-none sm:order-first w-full h-96">
  <iframe
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDQPz7-gMiD7unnSIgcD1ycwH1xoFYbCcY&q=Ben+Arous,Tunis"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
