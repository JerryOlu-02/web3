'use client';

import './Info.scss';
import { useRouter } from 'next/navigation';

export default function Info() {
  const router = useRouter();

  return (
    <>
      <div className="opacity"></div>

      <section className="info">
        <h1>The Insider Ecosystem</h1>

        <article>
          <h5>What is INSIDER?</h5>

          <p>
            <strong>
              INSIDER is a game which primary focus is to launch Pumpfun
              projects in order to give its players opportunities for profits.
              Being an INSIDER means getting in on the action early. You’ll get
              exclusive access to these plays before anyone else.
            </strong>
          </p>
        </article>

        {/* <article>
      <h5>📈 INSIDER | 0.5 SOL Weekly / 2 SOL Monthly</h5>

      <ul>
        <li>
          <strong>
            Full Access to our dedicated Telegram based alpha wallet tracking
            system.
          </strong>
        </li>
        <li>
          <strong>24/7 Tailored Support</strong>
        </li>
      </ul>
    </article> */}

        <aside>
          <div></div>
          <button onClick={() => router.push('https://t.me/InsidersPortal')}>
            JOIN INSIDER
          </button>
          <div></div>
        </aside>
      </section>
    </>
  );
}
