import { Plane as Crane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Scene3D } from '../components/Scene3D';

export function Home() {
  return (
    <main>
      <section className="relative h-screen">
        <Scene3D />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-slate-900/70 to-slate-900">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
              Building Tomorrow Today
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-300">
              Milestone Construction brings your architectural dreams to life with precision,
              innovation, and excellence.
            </p>
            <Link
              to="/projects"
              className="bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold
                hover:bg-emerald-400 transition-colors flex items-center mx-auto inline-flex
                shadow-lg shadow-emerald-500/20"
            >
              <Crane className="w-5 h-5 mr-2" />
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}