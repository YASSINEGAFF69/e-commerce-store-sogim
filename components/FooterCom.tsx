import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; 
import { forwardRef } from 'react';

const FooterCom = forwardRef((props, ref) => (
  <div ref={ref}>
    <Footer
      columns={[
        {
          title: 'Contactez-nous',
          items: [
            { title: 'Adresse postale', description: '15 rue France, Ben Arous' },
            { title: 'Adresse e-mail', description: 'sogim2013@yahoo.fr', link: 'mailto:sogim2013@yahoo.fr' },
            { title: 'Numéro de téléphone', description: '+216 22 054 709', link: 'tel:+21622054709' },
          ],
        },
      ]}
      bottom="Made by yassine gafsaoui"
    />
  </div>
));

export default FooterCom;
