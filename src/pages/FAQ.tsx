import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How long does it take to create a TwiMe doll?',
      answer:
        'Each TwiMe doll is handcrafted with care, which takes time. Our typical production time is 2-4 weeks from the date of order. This includes crafting your doll and shipping it to you. For rush orders or during busy seasons, please contact us directly.',
    },
    {
      question: 'Can I customize every aspect of my doll?',
      answer:
        'Yes! You can choose the hair style and color, eye style, t-shirt color, and add a custom phrase. You can also upload a reference photo for complete customization. Our artisans will work to capture the essence of the photo while maintaining the charming TwiMe aesthetic.',
    },
    {
      question: 'What if I upload a photo?',
      answer:
        'When you upload a photo, our talented artisans use it as a reference to create a doll that resembles the person in the image. We focus on capturing key features like hair style, eye shape, and overall look. The result is a charming, anime-inspired cloth doll that captures the essence of your photo.',
    },
    {
      question: 'How big are TwiMe dolls?',
      answer:
        'TwiMe dolls are approximately 8-10 inches (20-25 cm) tall, making them perfect for display on desks, shelves, or as travel companions. They\'re small enough to be portable yet detailed enough to capture personality.',
    },
    {
      question: 'What materials are used?',
      answer:
        'We use high-quality, soft cotton fabrics for the body and clothing. All materials are carefully selected to be durable, safe, and pleasant to touch. The dolls are filled with hypoallergenic polyester stuffing. Embroidery thread is used for facial features and details.',
    },
    {
      question: 'Can I order a TwiMe as a gift?',
      answer:
        'Absolutely! TwiMe dolls make wonderful gifts. During checkout, you can add special notes or gift messages. We can also ship directly to the recipient if you provide their address. Each doll comes in beautiful packaging perfect for gifting.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by location. During checkout, select your country to see specific shipping options. International orders may be subject to customs fees determined by your country.',
    },
    {
      question: 'What is your privacy policy for photos?',
      answer:
        'We take privacy seriously. Photos uploaded for customization are used solely to create your doll. They are stored securely during production and permanently deleted once your doll is completed. We never share or use your photos for any other purpose without explicit consent.',
    },
    {
      question: 'Can I request changes after ordering?',
      answer:
        'Minor changes can be accommodated if requested within 24 hours of placing your order. Once production begins, we cannot make changes as the doll is already being handcrafted. Please review your customization carefully before completing your order.',
    },
    {
      question: 'What if I\'m not satisfied with my doll?',
      answer:
        'Customer satisfaction is our priority. If you\'re not happy with your TwiMe, please contact us within 7 days of receiving it. We\'ll work with you to make it right. Please note that due to the handmade nature, slight variations from previews are normal and part of each doll\'s unique charm.',
    },
    {
      question: 'Do you offer TwiMe for pets?',
      answer:
        'While our current customization focuses on people, we can create pet-inspired TwiMe dolls! Simply upload a photo of your pet and add details in the special notes during checkout. Our artisans will do their best to capture your furry friend\'s personality.',
    },
    {
      question: 'Can I order multiple dolls?',
      answer:
        'Yes! You can order as many TwiMe dolls as you like. Each doll needs to be customized individually through the customization page. For bulk orders (10+ dolls) or special events, please contact us directly for custom pricing and arrangements.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about TwiMe dolls
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left py-4 hover:text-pink-600 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-8">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="pb-4 pr-12">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-pink-50 to-blue-50 rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We're here to help! Feel free to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@twime.com"
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors inline-block"
            >
              Email Us
            </a>
            <a
              href="mailto:support@twime.com"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold border-2 border-pink-600 hover:bg-pink-50 transition-colors inline-block"
            >
              Contact Support
            </a>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3 text-center">
            Shipping Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-900 mb-1">Domestic Shipping</p>
              <p>Free standard shipping (5-7 business days)</p>
              <p>Express shipping available for additional cost</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">International Shipping</p>
              <p>Calculated at checkout based on location</p>
              <p>Delivery time: 10-20 business days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
