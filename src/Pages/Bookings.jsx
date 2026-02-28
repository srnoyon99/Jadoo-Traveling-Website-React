import React, { useState } from 'react';
import { Search, Calendar, Users, Star, MapPin, Award, Shield, Clock } from 'lucide-react';
import Mni from "../assets/mni.jpeg"

const BookingWebsite = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('2 adults · 0 children · 1 room');

  const destinations = [
    {
      name: 'Kuala Lumpur',
      country: 'Malaysia',
      image: 'https://img.static-kl.com/images/media/1F159175-0757-4F9E-A9A8EC6DBD5BCE68'
    },
    {
      name: 'Bangkok',
      country: 'Thailand',
      image: 'https://cdn.generationvoyage.fr/2023/12/Temple-Wat-Arun-Bangkok-Thailande.jpeg'
    },
    {
      name: 'Dhaka',
      country: 'Bangladesh',
      image: 'https://www.tataneu.com/pages/travel/_next/image?url=https%3A%2F%2Fd1msew97rp2nin.cloudfront.net%2Fprodin%2Ftntravel%2Fblogimages%2FLucknow-d44a94e5-0ec5-4b0e-8a9b-be5856267f2f.webp&w=3840&q=75'
    },
    {
      name: 'Singapore',
      country: 'Singapore',
      image: 'https://images.goway.com/production/featured_images/shutterstock_1116483092.jpg'
    },
    {
      name: "China",
      country: 'China',
      image: 'https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/g2-1716175948461.jpg'
    },
    {
      name: "Thailand",
      country: 'Thailand',
      image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQCbOBYCdrfv_qOLQMsr8UtHTlYouaxBZeUXjb312JiyeeVe49cD7c79YhQOdlssqlgFjX-Wo3AKsixK2CGpMjvKazLRFBH4SY02YsVlw'
    }

  ];

  return (
    <div className="min-h-screen bg-white py-10 pt-30 md:pt-[120px] ">
      {/* Header */}
      <header className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2">Find your next stay</h1>
          <p className="text-xl opacity-90">Search low prices on hotels, homes and much more...</p>
        </div>
      </header>

      {/* Search Form */}
      <div className="bg-blue-700 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-yellow-400 rounded-lg p-4 flex flex-wrap gap-2 items-center">
            {/* Location */}
            <div className="flex-1 min-w-64 bg-white rounded border-2 border-yellow-500 p-3 flex items-center gap-2">
              <MapPin className="text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Dhaka" 
                className="flex-1 outline-none text-gray-800"
                defaultValue="Dhaka"
              />
            </div>

            {/* Check-in/Check-out */}
            <div className="flex-1 min-w-72 bg-white rounded border p-3 flex items-center gap-2">
              <Calendar className="text-gray-500 w-5 h-5" />
              <input type='datetime-local' className="text-gray-600" placeholder='Check-in date — Check-out date' ></input>
            </div>

            {/* Guests */}
            <div className="flex-1 min-w-64 bg-white rounded border p-3 flex items-center gap-2">
              <Users className="text-gray-500 w-5 h-5" />
              <span className="text-gray-600">2 adults · 0 children · 1 room</span>
            </div>

            {/* Search Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Why Booking.com? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Booking.com?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Book now, pay at the property</h3>
              <p className="text-gray-600 text-sm">FREE cancellation on most rooms</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">300M+ reviews from fellow travellers</h3>
              <p className="text-gray-600 text-sm">Get trusted information from guests like you</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">2+ million properties worldwide</h3>
              <p className="text-gray-600 text-sm">Hotels, guest houses, apartments, and more...</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Trusted customer service you can rely on, 24/7</h3>
              <p className="text-gray-600 text-sm">We're always here to help</p>
            </div>
          </div>
        </section>

        {/* Offers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Offers</h2>
          <p className="text-gray-600 mb-8">Promotions, deals and special offers for you</p>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-8 border">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Quick escape, quality time</h3>
                  <p className="text-gray-600 mb-4">Save up to 20% with a Getaway Deal</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition-colors">
                    Save on stays
                  </button>
                </div>
                <div className="w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500"><img className=' rounded-[8px] ' src={Mni} alt="" /></span>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)'
                }}
              ></div>
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="text-white">
                  <span className="text-sm font-medium bg-blue-600 px-2 py-1 rounded mb-2 inline-block">
                    Late Escape Deals
                  </span>
                  <h3 className="text-2xl font-bold mb-2">Go for a good time, not a long time</h3>
                  <p className="mb-4 opacity-90">Squeeze out the last bit of sun with at least 15% off</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition-colors">
                    Find deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Destinations */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Trending destinations</h2>
          <p className="text-gray-600 mb-8">Most popular choices for travellers from Bangladesh</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {destination.name} <span className="text-lg">{destination.flag}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookingWebsite;