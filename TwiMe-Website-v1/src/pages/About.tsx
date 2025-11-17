import { Heart, Sparkles, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About TwiMe</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Bringing warmth to a digital world, one handmade doll at a time.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-pink-600 fill-pink-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              TwiMe was born from a simple yet powerful idea: in a world that's increasingly digital, we all crave something tangible, personal, and filled with warmth.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our handmade cloth dolls are more than just toys or collectibles — they're tiny avatars that capture the essence of who you are. Each one is lovingly crafted to look like its owner, creating a special connection between you and your "Twin Me."
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every stitch, every detail, every carefully chosen feature tells a story. Your story.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl shadow-lg p-8 lg:p-12 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              We believe in the power of creativity and compassion to bring people together. Our mission is threefold:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <strong className="text-gray-900">Create meaningful connections</strong> — Help people express their identity and share special moments through personalized, handcrafted dolls.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <strong className="text-gray-900">Celebrate artisanship</strong> — Preserve the beauty and value of handmade craftsmanship in an age of mass production.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <strong className="text-gray-900">Support vulnerable artisans</strong> — Provide meaningful work opportunities to talented individuals who need support, creating positive social impact with every doll.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Social Impact</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At TwiMe, we're committed to making a difference beyond creating beautiful dolls. Some of our artisans come from vulnerable backgrounds, and through their work with us, they gain:
            </p>
            <ul className="space-y-3 text-gray-600 text-lg">
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1">•</span>
                <span>A source of income and financial independence</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1">•</span>
                <span>Opportunities to develop and showcase their creative talents</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1">•</span>
                <span>A supportive community that values their contributions</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1">•</span>
                <span>A sense of purpose and accomplishment</span>
              </li>
            </ul>
            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              When you choose TwiMe, you're not just buying a doll — you're becoming part of a movement that values human connection, creativity, and compassion.
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-3xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-pink-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every TwiMe doll carries a piece of its creator's heart and a reflection of its owner's soul. Together, we're building a global community united by creativity, compassion, and the simple joy of handmade things.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Thank you for being part of our story. We can't wait to help you create yours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
