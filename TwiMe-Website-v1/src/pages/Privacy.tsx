import { Shield, Lock, Eye, Trash2 } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy matters to us. Here's how we protect your information.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you create and order a TwiMe doll, we collect the following information:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Personal Information:</strong> Name, email address, and shipping address needed to process and deliver your order.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Customization Details:</strong> Hair style, eye style, t-shirt color, and custom phrases you select for your doll.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Reference Photos:</strong> Optional photos you upload to help us create a personalized doll that resembles you or your loved ones.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Order Information:</strong> Payment details, order history, and special notes or gift messages.</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your information exclusively for the following purposes:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Creating Your Doll:</strong> Your customization choices and reference photos are used solely to handcraft your personalized TwiMe doll.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Order Processing:</strong> We use your contact and shipping information to process payment and deliver your order.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Customer Support:</strong> Your email allows us to communicate order updates, answer questions, and provide assistance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Service Improvement:</strong> We may analyze order data to improve our products and services, but this is done in aggregate and anonymously.</span>
                </li>
              </ul>
            </div>

            <div className="mb-10 bg-pink-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-pink-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Photo Privacy Guarantee</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is our highest priority, especially when it comes to photos:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 font-bold">✓</span>
                  <span>Photos are used <strong>only</strong> to create your personalized doll.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 font-bold">✓</span>
                  <span>Photos are stored securely in encrypted storage during production.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 font-bold">✓</span>
                  <span>Photos are <strong>permanently deleted</strong> once your doll is completed and shipped.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 font-bold">✓</span>
                  <span>We <strong>never</strong> share, sell, or use your photos for marketing without explicit written consent.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1 font-bold">✓</span>
                  <span>Only authorized artisans working on your doll have access to your photo.</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span>Secure, encrypted connections (SSL/TLS) for all data transmission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span>Encrypted storage for sensitive information and photos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span>Limited access to personal data - only necessary personnel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span>Regular security audits and updates</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Trash2 className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Access:</strong> Request a copy of the personal information we hold about you.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Correction:</strong> Request corrections to any inaccurate information.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span><strong>Opt-out:</strong> Unsubscribe from marketing emails at any time.</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use trusted third-party services to process payments and ship orders. These services have their own privacy policies and security measures. We ensure all partners meet our standards for data protection.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">GDPR Compliance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For customers in the European Union, we comply with the General Data Protection Regulation (GDPR). We process your data lawfully, fairly, and transparently, and only for the specific purposes stated in this policy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You have additional rights under GDPR, including the right to data portability and the right to lodge a complaint with a supervisory authority.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                While TwiMe dolls can be created for children, our services are intended for use by adults. We do not knowingly collect personal information from children under 13 without parental consent.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any significant changes by email or through a notice on our website. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this privacy policy or want to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@twime.com</p>
                <p><strong>Support:</strong> support@twime.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
