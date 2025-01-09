'use client';

import Image from 'next/image';
import './Homepage.scss';
import XLogo from '@/public/Xlogo.png';
import telegramLogo from '@/public/telelogo.png';
import { useRouter } from 'next/navigation';

export default function Homepage() {
  const router = useRouter();

  return (
    <section className="homepage">
      <aside>
        <h1>INSIDER</h1>

        <p>BE ONE STEP AHEAD, BECOME AN INSIDER</p>

        <div className="insider-div">
          <div>
            <button
              onClick={() =>
                router.push(
                  'https://x.com/Solinsiders?s=21&t=dTN4U0_kedA3ko_n-FSreQ'
                )
              }
            >
              <Image src={XLogo} alt="X_Logo" />
            </button>
            <button onClick={() => router.push('https://t.me/InsidersPortal')}>
              <Image src={telegramLogo} alt="Telegram_Logo" />
            </button>
          </div>
          <button
            onClick={() => router.push('https://t.me/InsidersPortal')}
            className="home-btn"
          >
            JOIN INSIDER
          </button>
        </div>
      </aside>
    </section>
  );
}
