import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS - replace with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,      // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,    // Template ID
        {
          to_email: 'support@holybible.app',  // Your email
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: `FROM: ${formData.email}\n\n${formData.message}`,
          reply_to: formData.email
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Mail size={48} className="mx-auto text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have a question or feedback? We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 break-all">fernievindustry24@gmail.com</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+91 9763659415</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Universe</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 font-semibold">
                ✓ Thank you for your message! We'll get back to you soon.
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-semibold">
                ✗ {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-lg p-6">
              <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                Is this app free to use?
                <span className="text-blue-600">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Yes, Holy Bible is completely free to use. We believe scripture should be accessible to everyone.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-lg p-6">
              <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                Do you offer a mobile app?
                <span className="text-blue-600">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Our web app is fully responsive and works great on mobile devices. Native apps are coming soon!
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-lg p-6">
              <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                Can I download verses for offline reading?
                <span className="text-blue-600">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                This feature is currently in development. We're working on adding offline capability soon.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-lg p-6">
              <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                How do I report a bug or suggest a feature?
                <span className="text-blue-600">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Please use the contact form above to report bugs or suggest new features. We read every message!
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-lg p-6">
              <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                Is my data secure?
                <span className="text-blue-600">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Yes, we use Firebase's industry-standard security. Your data is encrypted and protected.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}