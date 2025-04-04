import { Plane as Crane } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene3D from '../components/Scene3D';
import { primary_text_gradient } from '../theme/text.style';
import { button_background_color, primary_background_color } from '../theme/background.style';
 
export function Home() {
  return (
    <main>
      <section className="relative h-screen">
        <Scene3D />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-slate-900/70 to-slate-900">
          <div className="text-center px-4">
            <h1 className={`${primary_text_gradient} text-6xl font-bold mb-1 pb-3  bg-clip-text`}>
              Building Tomorrow Today
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-300">
              Milestone Construction brings your architectural dreams to life with precision,
              innovation, and excellence.
            </p>
            <Link
              to="/projects"
              className={`${button_background_color} text-white px-8 py-3 rounded-full font-semibold
                 transition-colors flex items-center mx-auto inline-flex
                shadow-lg shadow-orange-500/20`}
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