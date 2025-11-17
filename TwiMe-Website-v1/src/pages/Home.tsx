import { Heart, Sparkles, Gift, Users } from 'lucide-react';

type Page = 'home' | 'about' | 'customize' | 'gallery' | 'faq' | 'privacy';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Twin.
                <br />
                <span className="text-pink-600">Your Me.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the magic of personalized handmade cloth dolls that capture your unique essence. Each TwiMe is lovingly crafted to be your tiny twin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('customize')}
                  className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Create Your TwiMe
                </button>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-pink-600 hover:bg-pink-50 transform hover:scale-105 transition-all"
                >
                  View Gallery
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-blue-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-32 h-32 mx-auto text-pink-600 fill-pink-600 mb-4" />
                  <p className="text-gray-700 font-medium">Your TwiMe awaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose TwiMe?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl hover:bg-pink-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fully Personalized</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose every detail from hair and eyes to t-shirt color and custom phrases, or upload a photo for complete customization.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-pink-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-pink-600 fill-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Handmade with Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Each doll is carefully handcrafted by talented artisans who pour their heart into every stitch and detail.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-pink-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <Gift className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect Gift</h3>
              <p className="text-gray-600 leading-relaxed">
                A unique and meaningful present for loved ones, celebrating special occasions with a keepsake they'll treasure forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Making a Difference Together
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Every TwiMe doll tells a story. Some of our dolls are lovingly created by vulnerable artisans, providing them with meaningful work and support.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  When you choose TwiMe, you're not just getting a beautiful handmade doll — you're helping to create positive change in someone's life.
                </p>
              </div>

              <div className="aspect-square bg-gradient-to-br from-blue-200 to-pink-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-32 h-32 mx-auto text-blue-600 mb-4" />
                  <p className="text-gray-700 font-medium">Crafted with Love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Meet Your Twin?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start creating your personalized TwiMe doll today and bring a little more warmth into your world.
          </p>
          <button
            onClick={() => onNavigate('customize')}
            className="bg-pink-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-pink-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            Create Your TwiMe Now
          </button>
        </div>
      </section>
    </div>
  );
}
