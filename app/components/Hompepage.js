import Image from 'next/image';
import './Homepage.scss';
import XLogo from '@/public/Xlogo.png';
import telegramLogo from '@/public/telelogo.png';

export default function Homepage() {
  return (
    <section className="homepage">
      <aside>
        <h1>INSIDER</h1>

        <p>Solana's Alpha Wallet Tracker. Built By Traders, For Traders.</p>

        <div className="insider-div">
          <div>
            <button>
              <Image src={XLogo} alt="X_Logo" />
            </button>
            <button>
              <Image src={telegramLogo} alt="Telegram_Logo" />
            </button>
          </div>
          <button className="home-btn">JOIN INSIDER</button>
        </div>
      </aside>
    </section>
  );
}
