import { Building2, Users, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "A state-of-the-art office complex featuring sustainable design and smart building technology.",
    client: "Tech Innovations Inc.",
    completion: "2024",
    value: "$45M"
  },
  {
    id: 2,
    title: "Luxury Residential Tower",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "Premium residential development with panoramic city views and high-end amenities.",
    client: "Urban Living Development",
    completion: "2023",
    value: "$75M"
  },
  {
    id: 3,
    title: "Shopping Mall Complex",
    image: "https://images.unsplash.com/photo-1557182307-a2f5d37fe974?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "Modern retail space with entertainment facilities and sustainable features.",
    client: "Retail Solutions Group",
    completion: "2024",
    value: "$60M"
  }
];

export function Projects() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-emerald-400">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-emerald-400" />
                    <span>Client: {project.client}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-emerald-400" />
                    <span>Completion: {project.completion}</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-2 text-emerald-400" />
                    <span>Project Value: {project.value}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}