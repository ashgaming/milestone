import { Briefcase, GraduationCap, Clock, MapPin, Send } from 'lucide-react';
import { useCallback, useState } from 'react';
import { primary_text_color, primary_text_gradient } from '../theme/text.style';
import { button_background_color, primary_background_color } from '../theme/background.style';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Project Manager",
    department: "Project Management",
    location: "New York, NY",
    type: "Full-time",
    experience: "7+ years",
    description: "We're seeking an experienced Project Manager to lead complex construction projects from inception to completion."
  },
  {
    id: 2,
    title: "Civil Engineer",
    department: "Engineering",
    location: "Los Angeles, CA",
    type: "Full-time",
    experience: "5+ years",
    description: "Looking for a Civil Engineer with extensive experience in structural design and construction oversight."
  },
  {
    id: 3,
    title: "Site Supervisor",
    department: "Operations",
    location: "Chicago, IL",
    type: "Full-time",
    experience: "3+ years",
    description: "Seeking a Site Supervisor to oversee daily construction activities and ensure safety compliance."
  }
];

export function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
  };

  const handleJobSelection = useCallback((job) => {
    job !== selectedJob ? setSelectedJob(job) : setSelectedJob(null);
  }, [selectedJob]);

  return (
    <div className={`pt-20 min-h-screen ${primary_background_color}`}>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className={`text-4xl font-bold mb-8 text-center ${primary_text_gradient} bg-clip-text`}>
            Join Our Team
          </h1>

          <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of construction. We offer competitive benefits,
            professional growth opportunities, and a collaborative work environment.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl cursor-pointer
                  transition-all duration-300 hover:border-emerald-400/50 
                  ${selectedJob?.id === job.id ? 'border-emerald-400' : ''}`}
                onClick={() => handleJobSelection(job)}
              >
                <Briefcase className={`w-8 h-8 ${primary_text_color } mb-4`} />
                <h3 className={`text-xl font-bold mb-2 ${primary_text_color}`}>{job.title}</h3>
                <div className="space-y-2 text-sm text-slate-300 mb-4">
                  <div className="flex items-center">
                    <MapPin className={`w-4 h-4 mr-2 ${primary_text_color}`} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className={`w-4 h-4 mr-2 ${primary_text_color}`} />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className={`w-4 h-4 mr-2 ${primary_text_color}`} />
                    <span>{job.type}</span>
                  </div>
                </div>
                <p className="text-slate-300">{job.description}</p>
              </div>
            ))}
          </div>

          {selectedJob && (
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-xl">
              <h2 className={`text-2xl font-bold mb-6  ${primary_text_color}`}>Apply for {selectedJob.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 
                        focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 
                        focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 
                      focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium mb-2">
                    Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                    className="w-full px-4 py-2 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 
                      focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400
                      file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0
                      file:text-sm file:font-semibold file:bg-orange-500 file:text-white
                      hover:file:bg-orange-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 
                      focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={` text-white px-6 py-2 rounded-xl font-semibold
                    transition-colors flex items-center
                    shadow-lg shadow-orange-500/20 ${button_background_color}`}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}