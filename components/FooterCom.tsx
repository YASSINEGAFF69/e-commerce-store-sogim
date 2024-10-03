import { forwardRef, ForwardedRef } from 'react';

const FooterCom = forwardRef<HTMLDivElement>((props, ref: ForwardedRef<HTMLDivElement>) => (
  <div ref={ref} className="footer bg-gray-100 py-6">
    <div className="container mx-auto text-center">
      <h3 className="font-bold text-lg mb-4">Contactez-nous</h3>
      <p className="mb-2">Adresse postale: 15 rue France, Ben Arous</p>
      <p className="mb-2">
        Adresse e-mail: <a href="mailto:sogim2013@yahoo.fr" className="text-blue-500">sogim2013@yahoo.fr</a>
      </p>
      <p className="mb-4">
        Numéro de téléphone: <a href="tel:+21622054709" className="text-blue-500">+216 22 054 709</a>
      </p>
    </div>
  </div>
));

export default FooterCom;
