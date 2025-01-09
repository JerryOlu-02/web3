'use client';

import './Contact.scss';
import Image from 'next/image';
import ContactImg from '@/public/contact img.jpg';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();

  return (
    <section className="contact">
      <div>
        <h3
          onClick={() =>
            router.push(
              'https://x.com/Solinsiders?s=21&t=dTN4U0_kedA3ko_n-FSreQ'
            )
          }
        >
          Contact US
        </h3>
        <Image src={ContactImg} alt="contact__img" />
        {/* <h3>✉️ insidersol.xyz</h3> */}
      </div>
    </section>
  );
}
