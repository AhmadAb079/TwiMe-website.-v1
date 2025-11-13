import { useState } from 'react';
import { ArrowLeft, ShoppingCart, CheckCircle } from 'lucide-react';

interface CustomizationData {
  hairStyle: string;
  eyeStyle: string;
  tshirtColor: string;
  customPhrase: string;
  photoFile: File | null;
  photoConsent: boolean;
}

interface OrderFormProps {
  customization: CustomizationData;
  onBack: () => void;
}

export default function OrderForm({ customization, onBack }: OrderFormProps) {
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    shippingAddress: '',
    shippingCountry: '',
    specialNotes: '',
  });

  const basePrice = 45;
  const phrasePrice = customization.customPhrase ? 5 : 0;
  const photoPrice = customization.photoFile ? 10 : 0;
  const totalAmount = basePrice + phrasePrice + photoPrice;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await new Promise(resolve => setTimeout(resolve, 1000));

    setOrderComplete(true);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (orderComplete) {
    return (
      <div className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for your order, {formData.customerName}!
            </p>
            <div className="bg-pink-50 rounded-2xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                We've received your order and our talented artisans will begin crafting your
                unique TwiMe doll. You'll receive a confirmation email at{' '}
                <strong>{formData.customerEmail}</strong> with all the details.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Expected delivery:</strong> 2-4 weeks
              </p>
            </div>
            <p className="text-gray-600 mb-8">
              Your personalized TwiMe will be handcrafted with love and shipped to you soon. We
              can't wait for you to meet your twin!
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transform hover:scale-105 transition-all"
            >
              Create Another TwiMe
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-pink-600 hover:text-pink-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Customization
        </button>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Order</h1>
          <p className="text-lg text-gray-600">Just a few more details and your TwiMe is on its way!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Information</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipping Address *
                  </label>
                  <textarea
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
                    placeholder="123 Main St, Apt 4B, City, State, ZIP"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="shippingCountry"
                    value={formData.shippingCountry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
                  >
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="ES">Spain</option>
                    <option value="IT">Italy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Notes (Optional)
                  </label>
                  <textarea
                    name="specialNotes"
                    value={formData.specialNotes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
                    placeholder="Gift message, special instructions, etc."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-pink-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-pink-700 transform hover:scale-105 transition-all shadow-lg flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Complete Order - ${totalAmount}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>TwiMe Doll (Base)</span>
                  <span>${basePrice}</span>
                </div>
                {customization.customPhrase && (
                  <div className="flex justify-between text-gray-600">
                    <span>Custom Phrase</span>
                    <span>${phrasePrice}</span>
                  </div>
                )}
                {customization.photoFile && (
                  <div className="flex justify-between text-gray-600">
                    <span>Photo Customization</span>
                    <span>${photoPrice}</span>
                  </div>
                )}
                <div className="border-t pt-3 flex justify-between font-bold text-gray-900 text-lg">
                  <span>Total</span>
                  <span>${totalAmount}</span>
                </div>
              </div>

              <div className="bg-pink-50 rounded-xl p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Your Customization</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Hair: {customization.hairStyle}</p>
                  <p>Eyes: {customization.eyeStyle}</p>
                  <p>T-Shirt: {customization.tshirtColor}</p>
                  {customization.customPhrase && (
                    <p>Phrase: "{customization.customPhrase}"</p>
                  )}
                  {customization.photoFile && <p>Photo: Included</p>}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-xs text-gray-600">
                  <strong>Production Time:</strong> 2-4 weeks
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Free shipping on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
