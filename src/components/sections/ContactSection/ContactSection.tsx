/**
 * ContactSection Component
 * Секция с контактами
 */

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.scss';

export interface ContactSectionProps {
  email?: string;
  phone?: string;
  whatsappUrl?: string;
  telegramUrl?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email = 'deykun.studio@gmail.com',
  phone = '+7 (995) 449-95-54',
  whatsappUrl = 'https://wa.me/+79524280135',
  telegramUrl = 'https://t.me/qqmaik',
}) => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className="container">
        <div className={styles.infoCont}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.text}>Написать нам:</div>
            <a href={`mailto:${email}`}>{email}</a>
          </motion.div>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.text}>Позвонить нам:</div>
            <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
          </motion.div>
        </div>

        <motion.div
          className={styles.socCont}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a className={styles.soc} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.00602007 30L2.03402 22.548C0.697727 20.2573 -0.00433595 17.652 2.01484e-05 15C2.01484e-05 6.7155 6.71552 0 15 0C23.2845 0 30 6.7155 30 15C30 23.2845 23.2845 30 15 30C12.3492 30.0043 9.745 29.3027 7.45502 27.9675L0.00602007 30ZM9.58651 7.962C9.39281 7.97402 9.20353 8.02504 9.03001 8.11199C8.8673 8.20414 8.71876 8.31933 8.58901 8.45399C8.40901 8.6235 8.30702 8.77049 8.19752 8.91299C7.64313 9.63449 7.34493 10.5201 7.35002 11.43C7.35302 12.165 7.54502 12.8805 7.84502 13.5495C8.45852 14.9025 9.46801 16.335 10.8015 17.6625C11.1225 17.982 11.436 18.303 11.7735 18.6015C13.4286 20.0587 15.4009 21.1095 17.5335 21.6705L18.387 21.801C18.6645 21.816 18.942 21.795 19.221 21.7815C19.6579 21.7589 20.0844 21.6406 20.4705 21.435C20.6669 21.3338 20.8586 21.2237 21.045 21.105C21.045 21.105 21.1095 21.063 21.2325 20.97C21.435 20.82 21.5595 20.7135 21.7275 20.538C21.852 20.409 21.96 20.2575 22.0425 20.085C22.1595 19.8405 22.2765 19.374 22.3245 18.9855C22.3605 18.6885 22.35 18.5265 22.3455 18.426C22.3395 18.2655 22.206 18.099 22.0605 18.0285L21.1875 17.637C21.1875 17.637 19.8825 17.0685 19.086 16.7055C19.002 16.6689 18.912 16.648 18.8205 16.644C18.7179 16.6334 18.6142 16.645 18.5164 16.6779C18.4186 16.7107 18.329 16.7641 18.2535 16.8345V16.8315C18.246 16.8315 18.1455 16.917 17.061 18.231C16.9988 18.3146 16.913 18.3778 16.8147 18.4126C16.7164 18.4473 16.61 18.452 16.509 18.426C16.4113 18.3999 16.3155 18.3668 16.2225 18.327C16.0365 18.249 15.972 18.219 15.8445 18.1635L15.837 18.1605C14.9789 17.7858 14.1843 17.2798 13.482 16.6605C13.293 16.4955 13.1175 16.3155 12.9375 16.1415C12.3474 15.5763 11.8331 14.937 11.4075 14.2395L11.319 14.097C11.2554 14.0012 11.2041 13.8979 11.166 13.7895C11.109 13.569 11.2575 13.392 11.2575 13.392C11.2575 13.392 11.622 12.993 11.7915 12.777C11.9326 12.5975 12.0643 12.4107 12.186 12.2175C12.363 11.9325 12.4185 11.64 12.3255 11.4135C11.9055 10.3875 11.4705 9.36599 11.0235 8.35199C10.935 8.15099 10.6725 8.00699 10.434 7.97849C10.353 7.96949 10.272 7.96049 10.191 7.95449C9.98957 7.94449 9.78772 7.94649 9.58651 7.96049V7.962Z"
                fill="#34BC41"
              />
            </svg>
            Написать в Whatsapp
          </a>

          <a className={styles.soc} href={telegramUrl} target="_blank" rel="noopener noreferrer">
            <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.9145 2.59686L25.3872 24.1831C25.0454 25.7063 24.155 26.0855 22.8895 25.3683L15.9909 20.2287L12.6627 23.4659C12.2941 23.8385 11.9865 24.1495 11.2761 24.1495L11.7722 17.0469L24.5568 5.36705C25.1129 4.86653 24.4357 4.5881 23.6931 5.0897L7.88788 15.1521L1.08358 12.9983C-0.396216 12.5314 -0.423005 11.5022 1.39219 10.7839L28.0061 0.417119C29.2384 -0.0498148 30.3163 0.694462 29.9145 2.59795V2.59686Z"
                fill="#3FADEB"
              />
            </svg>
            Написать в Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

