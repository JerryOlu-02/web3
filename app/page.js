import '../sass/main.scss';
import Homepage from './components/Hompepage';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <Homepage />
    </main>
  );
}
