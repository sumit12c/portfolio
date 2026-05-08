import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  // Open email - Gmail website on PC with pre-filled data, mailto on mobile
  const openGmail = () => {
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile: use mailto: protocol
      const mailtoLink = `mailto:patelsumit86112@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    } else {
      // Desktop: open Gmail compose with pre-filled data
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=patelsumit86112@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailComposeUrl, '_blank');
    }
    
    // Clear form after opening email
    setFormData({ name: '', email: '', message: '' });
    setShowConfirmDialog(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Show confirmation dialog instead of sending directly
    setShowConfirmDialog(true);
  };

  return (
    <section className="section-black py-24 md:py-32" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Talk</h2>
            <div className="w-20 h-1 bg-gradient-accent rounded-full mb-10"></div>
            
            <p className="text-gray-400 text-lg mb-12 max-w-xl pr-8 font-light leading-relaxed">
              I'm available for collaborations on innovative projects. Connect with me through the channels below or send a direct email for serious inquiries. If you're looking to bring on talented developers for your team, I'd be excited to discuss how my expertise can contribute to your organization's success.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <a href="mailto:patelsumit86112@gmail.com" title="Email" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
                <Mail size={24} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
              </a>
              
              <a href="https://github.com/sumit12c/" title="GitHub" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-purple-400 hover:bg-purple-400/10 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
                <Github size={24} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
              </a>

              <a href="https://www.linkedin.com/in/sumit-patel-5a8407290" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-orange-400 hover:bg-orange-400/10 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
                <Linkedin size={24} className="text-gray-300 group-hover:text-orange-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-12 backdrop-blur-xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-light"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-light"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-light resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-white text-black font-display font-semibold tracking-wide text-lg rounded-xl px-6 py-5 flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors group"
              >
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

            </form>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Dialog - Open Gmail */}
      <AnimatePresence>
        {showConfirmDialog && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirmDialog(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 px-6"
            >
              <div className="bg-zinc-900 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Open Gmail?</h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  This will open Gmail with your message pre-filled. You can review and send it directly from there.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirmDialog(false)}
                    className="flex-1 px-4 py-3 rounded-lg border border-white/10 text-gray-300 font-medium hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={openGmail}
                    className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={18} />
                    Proceed
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
