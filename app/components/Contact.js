import './Contact.scss';
import Image from 'next/image';
import ContactImg from '@/public/contact img.jpg';

export default function Contact() {
  return (
    <section className="contact">
      <div>
        <h3>DRH @networkagent</h3>
        <Image src={ContactImg} alt="contact__img" />
        <h3>✉️ insidersol.xyz</h3>
      </div>
    </section>
  );
}
