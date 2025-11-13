import { useState } from 'react';
import { Heart, Upload, CheckCircle } from 'lucide-react';
import OrderForm from '../components/OrderForm';

interface CustomizationData {
  hairStyle: string;
  eyeStyle: string;
  tshirtColor: string;
  customPhrase: string;
  photoFile: File | null;
  photoConsent: boolean;
}

export default function Customize() {
  const [step, setStep] = useState<'customize' | 'order'>('customize');
  const [customization, setCustomization] = useState<CustomizationData>({
    hairStyle: 'short-brown',
    eyeStyle: 'round-dark',
    tshirtColor: 'pink',
    customPhrase: '',
    photoFile: null,
    photoConsent: false,
  });

  const hairStyles = [
    { id: 'short-brown', label: 'Short Brown', color: 'bg-amber-800' },
    { id: 'long-blonde', label: 'Long Blonde', color: 'bg-yellow-300' },
    { id: 'curly-black', label: 'Curly Black', color: 'bg-gray-900' },
    { id: 'wavy-red', label: 'Wavy Red', color: 'bg-red-600' },
    { id: 'straight-gray', label: 'Straight Gray', color: 'bg-gray-400' },
    { id: 'short-blue', label: 'Short Blue', color: 'bg-blue-500' },
  ];

  const eyeStyles = [
    { id: 'round-dark', label: 'Round Dark' },
    { id: 'almond-light', label: 'Almond Light' },
    { id: 'wide-green', label: 'Wide Green' },
    { id: 'small-blue', label: 'Small Blue' },
    { id: 'anime-large', label: 'Anime Large' },
  ];

  const tshirtColors = [
    { id: 'pink', label: 'Pink', color: 'bg-pink-400' },
    { id: 'blue', label: 'Blue', color: 'bg-blue-400' },
    { id: 'yellow', label: 'Yellow', color: 'bg-yellow-400' },
    { id: 'green', label: 'Green', color: 'bg-green-400' },
    { id: 'purple', label: 'Purple', color: 'bg-purple-400' },
    { id: 'red', label: 'Red', color: 'bg-red-400' },
    { id: 'white', label: 'White', color: 'bg-white border-2 border-gray-300' },
    { id: 'black', label: 'Black', color: 'bg-gray-900' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCustomization({ ...customization, photoFile: e.target.files[0] });
    }
  };

  const handleProceedToOrder = () => {
    if (customization.photoFile && !customization.photoConsent) {
      alert('Please provide consent for photo usage to continue.');
      return;
    }
    setStep('order');
  };

  if (step === 'order') {
    return <OrderForm customization={customization} onBack={() => setStep('customize')} />;
  }

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Create Your TwiMe</h1>
          <p className="text-xl text-gray-600">
            Customize every detail to make your doll uniquely yours
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-blue-100 rounded-2xl flex items-center justify-center mb-8">
                <div className="text-center">
                  <Heart className="w-32 h-32 mx-auto text-pink-600 fill-pink-600 mb-4" />
                  <p className="text-gray-700 font-medium">Your TwiMe Preview</p>
                  <p className="text-sm text-gray-500 mt-2">Final doll may vary</p>
                </div>
              </div>

              <div className="bg-pink-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Your Selections</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <span className="font-medium">Hair:</span>{' '}
                    {hairStyles.find((h) => h.id === customization.hairStyle)?.label}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Eyes:</span>{' '}
                    {eyeStyles.find((e) => e.id === customization.eyeStyle)?.label}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">T-Shirt:</span>{' '}
                    {tshirtColors.find((t) => t.id === customization.tshirtColor)?.label}
                  </p>
                  {customization.customPhrase && (
                    <p className="text-gray-600">
                      <span className="font-medium">Phrase:</span> "{customization.customPhrase}"
                    </p>
                  )}
                  {customization.photoFile && (
                    <p className="text-gray-600">
                      <span className="font-medium">Photo:</span> {customization.photoFile.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Choose Hair Style
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hairStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() =>
                        setCustomization({ ...customization, hairStyle: style.id })
                      }
                      className={`p-4 rounded-xl border-2 transition-all ${
                        customization.hairStyle === style.id
                          ? 'border-pink-600 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className={`w-12 h-12 ${style.color} rounded-full mx-auto mb-2`}></div>
                      <p className="text-sm font-medium text-gray-700">{style.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Choose Eye Style
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {eyeStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() =>
                        setCustomization({ ...customization, eyeStyle: style.id })
                      }
                      className={`p-4 rounded-xl border-2 transition-all ${
                        customization.eyeStyle === style.id
                          ? 'border-pink-600 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <p className="text-sm font-medium text-gray-700">{style.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Choose T-Shirt Color
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                  {tshirtColors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() =>
                        setCustomization({ ...customization, tshirtColor: color.id })
                      }
                      className={`p-3 rounded-xl border-2 transition-all ${
                        customization.tshirtColor === color.id
                          ? 'border-pink-600 ring-2 ring-pink-200'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className={`w-10 h-10 ${color.color} rounded mx-auto mb-1`}></div>
                      <p className="text-xs font-medium text-gray-700">{color.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Custom Phrase (Optional)
                </label>
                <input
                  type="text"
                  value={customization.customPhrase}
                  onChange={(e) =>
                    setCustomization({ ...customization, customPhrase: e.target.value })
                  }
                  placeholder="e.g., Best Mom Ever, Love Always"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
                  maxLength={30}
                />
                <p className="text-sm text-gray-500 mt-2">
                  {customization.customPhrase.length}/30 characters
                </p>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Upload Reference Photo (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-pink-400 transition-all">
                  <Upload className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                  <label className="cursor-pointer">
                    <span className="text-pink-600 font-medium hover:text-pink-700">
                      Click to upload
                    </span>
                    <span className="text-gray-600"> or drag and drop</span>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                  <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
                  {customization.photoFile && (
                    <div className="mt-4 flex items-center justify-center text-green-600">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">{customization.photoFile.name}</span>
                    </div>
                  )}
                </div>

                {customization.photoFile && (
                  <div className="mt-4">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={customization.photoConsent}
                        onChange={(e) =>
                          setCustomization({
                            ...customization,
                            photoConsent: e.target.checked,
                          })
                        }
                        className="mt-1 w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                      />
                      <span className="text-sm text-gray-600">
                        I consent to TwiMe using this photo to create my personalized doll. The
                        photo will be stored securely and deleted after the doll is completed.
                      </span>
                    </label>
                  </div>
                )}
              </div>

              <button
                onClick={handleProceedToOrder}
                className="w-full bg-pink-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-pink-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Proceed to Order
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-2xl p-6">
          <p className="text-center text-gray-700">
            <strong>Production Time:</strong> Each TwiMe is handcrafted with care. Please allow
            2-4 weeks for creation and delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
