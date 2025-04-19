import { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send } from 'lucide-react';
import ContactMethod from '@/components/ui/ContactMethod';

const Contact: React.FC = () => {
    interface FormState {
      name: string;
      email: string;
      subject: string;
      message: string;
    }
  
    const [formState, setFormState] = useState<FormState>({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState({
        ...formState,
        [e.target.id]: e.target.value
      });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Form submission logic would go here
      alert('Form submitted! (This would connect to a backend in a real implementation)');
    };
    
    return (
      <section id="contact" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Get In Touch
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-4">
              <ContactMethod 
                icon={<Mail className="text-blue-600 dark:text-blue-400" size={20} />}
                title="Email"
                value="jameskhadan@gmail.com"
                href="mailto:jameskhadan@gmail.com"
                isLink={true}
              />
              
              <ContactMethod 
                icon={<Linkedin className="text-blue-600 dark:text-blue-400" size={20} />}
                title="LinkedIn"
                value="linkedin.com/in/jameskhadan"
                href="https://linkedin.com/in/jameskhadan"
                isLink={true}
              />
              
              <ContactMethod 
                icon={<Github className="text-blue-600 dark:text-blue-400" size={20} />}
                title="GitHub"
                value="github.com/jkhadan"
                href="https://github.com/jkhadan"
                isLink={true}
              />
              
              <ContactMethod 
                icon={<Phone className="text-blue-600 dark:text-blue-400" size={20} />}
                title="Phone"
                value="(732) 228-0112"
              />
              
              <ContactMethod 
                icon={<MapPin className="text-blue-600 dark:text-blue-400" size={20} />}
                title="Location"
                value="Boston, MA"
              />
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      value={formState.message}
                      onChange={handleChange}
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md shadow-md hover:shadow-lg flex items-center justify-center transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Send Message <Send size={16} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;