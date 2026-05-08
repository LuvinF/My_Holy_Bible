import { BookOpen, Users, Target, HelpingHand } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <BookOpen size={48} className="mx-auto text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Holy Bible</h1>
          <p className="text-lg text-gray-600">
            Bringing scripture to your fingertips
          </p>
        </div>

        {/* Prayer Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start space-x-4 mb-6">
            <HelpingHand size={32} className="text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Prayer</h2>
              <p className="text-gray-700 leading-relaxed">
                O my precious Jesus embrace me in your arms and allow my head to rest upon your shoulders so that you can raise me 
                up to your glorious Kingdom when the time is right.
                Allow your precious blood to flow over my heart that we can be united as one. Amen.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start space-x-4 mb-6">
            <Target size={32} className="text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Help us, dear Jesus, to rise fearlessly in Your Name to carry the Flame of Your Love across all nations.
                Give us, Your children, the strength to face the abuse we will be faced with among all those who are not true believers in your mercy.
                Amen.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start space-x-4 mb-6">
            <BookOpen size={32} className="text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
               O My Jesus, help me to avoid the sin of pride when I speak in Your Name. Forgive me if I ever belittle anyone in Your Holy Name. Help me to listen, Jesus when Your Voice is spoken and fill me with Your Holy Spirit, so that I can discern the Truth of Your Word when you Call out to mankind.
               Amen. 
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-4 mb-4 inline-block">
                <BookOpen size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy</h3>
              <p className="text-gray-600">
                We are committed to providing accurate, reliable scripture texts
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-4 mb-4 inline-block">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Making scripture accessible to everyone, regardless of device
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-4 mb-4 inline-block">
                <Target size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Simplicity</h3>
              <p className="text-gray-600">
                Keeping our interface simple, clean, and easy to navigate
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Complete Bible with all books and chapters</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Powerful search functionality</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Save your favorite verses</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Responsive design for all devices</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Fast and reliable performance</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Secure user accounts</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}