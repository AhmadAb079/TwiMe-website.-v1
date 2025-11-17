import { Heart } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'Emma & Her TwiMe',
      featured: true,
    },
    {
      id: 2,
      title: 'Wedding Gift TwiMe Couple',
      featured: true,
    },
    {
      id: 3,
      title: 'Birthday Surprise',
      featured: false,
    },
    {
      id: 4,
      title: 'Family of TwiMes',
      featured: true,
    },
    {
      id: 5,
      title: 'Custom Superhero TwiMe',
      featured: false,
    },
    {
      id: 6,
      title: 'Pet & Owner TwiMe Set',
      featured: false,
    },
    {
      id: 7,
      title: 'Anniversary Gift',
      featured: false,
    },
    {
      id: 8,
      title: 'Best Friends Forever',
      featured: true,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600">
            See the beautiful TwiMe dolls we've created for our customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <div className="aspect-square bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center relative">
                <Heart className="w-24 h-24 text-pink-400 fill-pink-400" />
                {item.featured && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-center">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to See Your TwiMe Here?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every TwiMe tells a unique story. Create your personalized doll today and become part of our growing community!
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-pink-600 fill-pink-600" />
                <p className="text-gray-700 font-medium">
                  Share your TwiMe photos with us and get featured in our gallery!
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Tag us on social media or send your photos to gallery@twime.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Before & After Showcase
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            See how our talented artisans transform your photos into adorable handmade cloth dolls
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
              <h3 className="text-center font-semibold text-gray-900 mb-4">Customer Photo</h3>
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/50 rounded-full mx-auto mb-3"></div>
                  <p className="text-gray-700 font-medium">Reference Photo</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-2xl p-8">
              <h3 className="text-center font-semibold text-gray-900 mb-4">TwiMe Result</h3>
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-yellow-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-32 h-32 mx-auto text-pink-600 fill-pink-600 mb-3" />
                  <p className="text-gray-700 font-medium">Handmade Doll</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm">
            Note: Final dolls may vary slightly as each is uniquely handcrafted
          </p>
        </div>
      </div>
    </div>
  );
}
