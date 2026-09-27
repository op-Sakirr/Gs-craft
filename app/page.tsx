import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import OrderForm from '@/components/OrderForm';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GS Craft",
    "image": "/images/hero_sherwani_1790494908879.jpg",
    "@id": "",
    "url": "https://gs-craft.com",
    "telephone": "+91 80735 89104",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shivajinagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9834572,
      "longitude": 77.604724
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://maps.app.goo.gl/snFXHo6PKGfrm8xR9"
    ],
    "description": "Premium Coat and Sherwani maker offering bespoke tailoring and custom designs for grooms and formal wear."
  };

  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-amber-500 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Collection />
      <OrderForm />
      <Location />
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </main>
  );
}
