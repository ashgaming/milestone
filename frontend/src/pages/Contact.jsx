import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { primary_text_color, primary_text_gradient } from '../theme/text.style';
import { button_background_color } from '../theme/background.style';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl font-bold mb-8 text-center ${primary_text_gradient} bg-clip-text`}>
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className={`text-2xl font-bold mb-6 ${primary_text_color}`}>Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className={`w-6 h-6 ${primary_text_color} mr-4 mt-1`} />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-slate-300">
                      123 Construction Ave<br />
                      Building District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className={`w-6 h-6 ${primary_text_color} mr-4 mt-1`} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-slate-300">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className={`w-6 h-6 ${primary_text_color} mr-4 mt-1`} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-slate-300">info@milestone-construction.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className={`text-2xl font-bold mb-6 ${primary_text_color}`}>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 
                      focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
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
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}