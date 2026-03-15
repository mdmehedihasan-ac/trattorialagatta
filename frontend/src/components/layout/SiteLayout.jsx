import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-x-hidden">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
