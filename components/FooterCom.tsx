
'use client';

import { forwardRef, ForwardedRef } from 'react';

const FooterCom = forwardRef<HTMLDivElement, {}>((props, ref: ForwardedRef<HTMLDivElement>) => (
  <section className="bg-gray-100" ref={ref}>
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Contactez-nous</h2>
        {/* <p className="mt-4 text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
      </div>
      <div className="mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=15%20rue%20France,%20Ben%20Arous+(Sogim)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Adresse postale:</h3>
                <p className="mt-1 text-gray-600"> 15 rue France, Ben Arous</p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                <p className="mt-1 text-gray-600">Sunday: Closed</p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                <p className="mt-1 text-gray-600">Email: <a href="mailto:sogim2013@yahoo.fr" className="text-blue-500">sogim2013@yahoo.fr</a></p>
                <p className="mt-1 text-gray-600">Phone: <a href="tel:+21622054709" className="text-blue-500">+216 22 054 709</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default FooterCom;
