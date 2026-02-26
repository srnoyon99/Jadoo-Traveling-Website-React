import React, { useState } from 'react';
import { Heart, Star, ArrowRight, ChevronRight, Car, Coffee, Wifi, CheckCircle } from 'lucide-react';
import { useFavorites } from '../Hooks/useFavorites';

const Hotels = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const propertyTypes = [
    {
      title: "Hotels",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/95058977.webp?k=ab4cc65897bb205dbcefd7a656cb3a811ce2b5b3135ca61c38860db146d96243&o="
    },
    {
      title: "Apartments", 
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o="
    },
    {
      title: "Resorts",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
    },
    {
      title: "Villas",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/531732579.webp?k=df9d17c4371175b0e4a60e390083280c837d5e94dacc7d9ae6db48728b5fb5ff&o="
    }
  ];

  const weekendDeals = [
    {
      id: 1,
      name: "Empyrean Dhaka City Centre",
      location: "Dhaka, Bangladesh",
      rating: 8,
      reviews: 250,
      badge: "Genius",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/178421525.webp?k=6c9cfca83aa49631c55eaed32fb7a6eb68573ffa76a47b23346504830249b853&o="
    },
    {
      id: 2,
      name: "Long Beach Hotel",
      location: "Cox's Bazar, Bangladesh",
      rating: 7.3,
      reviews: 186,
      badge: "Genius",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=0abbcd2115938850aa3372f4e7bf847f2aeb9579d674ec40ff273230a840eb9d&o="
    },
    {
      id: 3,
      name: "The Grand Hotel BD",
      location: "Sylhet, Bangladesh",
      rating: 7.4,
      reviews: 142,
      badge: "Genius",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=f9cd3042175e0da40abf6d3988b9f3ac91aaeaefd9941081dbadfd0875c8ab27&o="
    },
    {
      id: 4,
      name: "Grand Vistana",
      location: "Dhaka, Bangladesh",
      rating: 7.5,
      reviews: 204,
      badge: "Genius",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=d5b9f77442fa93b93c86a720abebfe39a3f9532d4efa6a9cefa231a2ded6bd95&o="
    }
  ];

  const uniqueProperties = [
    {
      id: 5,
      name: "Domki Wierszyki Shelters",
      location: "Poland, Zakopane",
      rating: 9.4,
      reviews: 98,
      ratingText: "Exceptional",
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/563615988.jpg?k=a8e553f3b5dc82115dec77c7378d6763dbcdd9a35611220871f16d184efa265f&o="
    },
    {
      id: 6,
      name: "Ranczo w Dolinie",
      location: "Poland, Krakow",
      rating: 9.6,
      reviews: 143,
      ratingText: "Exceptional",
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/231301021.jpg?k=6d7558402501942607ed933f1b3da2042b748f5218c30f88c4992a6c73f56698&o="
    },
    {
      id: 7,
      name: "Tiny House Dreischwesterherz",
      location: "Germany, Trier",
      rating: 9.6,
      reviews: 139,
      ratingText: "Exceptional",
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/565503974.jpg?k=9d8e51963476071d991f5e33d36533bb6b41dd76d4f7d33dc237b9196f8b3dce&o="
    },
    {
      id: 8,
      name: "Das rote Haus hinterm Deich",
      location: "Germany, Simonsberg",
      rating: 9.2,
      reviews: 42,
      ratingText: "Exceptional",
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/358716149.jpg?k=b972c567071ecb43423cf96d54515e3189c4adb233d0b402bb6f9d4a5b1e358e&o="
    }
  ];

  const guestLoveHomes = [
    {
      id: 9,
      name: "Leman Locke",
      location: "Tower Hamlets, United Kingdom, London",
      rating: 8.7,
      reviews: 698,
      ratingText: "Excellent",
      price: "BDT 40,745",
      image: "https://q-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o="
    },
    {
      id: 10,
      name: "Aparthotel Stare Miasto",
      location: "Old Town, Poland, Krakow",
      rating: 8.8,
      reviews: 3289,
      ratingText: "Excellent",
      price: "BDT 30,536",
      image: "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
    },
    {
      id: 11,
      name: "7Seasons Apartments Budapest",
      location: "06. Terézváros, Hungary, Budapest",
      rating: 8.7,
      reviews: 10917,
      ratingText: "Excellent",
      price: "BDT 18,352",
      image: "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o="
    },
    {
      id: 12,
      name: "Oriente Palace Apartments",
      location: "Madrid City Center, Spain, Madrid",
      rating: 8.9,
      reviews: 3464,
      ratingText: "Excellent",
      price: "BDT 32,877",
      image: "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o="
    }
  ];

  const FavoriteButton = ({ hotel }) => (
    <button
      onClick={() => toggleFavorite(hotel)}
      className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-200 shadow-sm"
    >
      <Heart 
        className={`w-5 h-5 ${isFavorite(hotel.id) ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'}`} 
      />
    </button>
  );

  const RatingBadge = ({ rating, reviews, ratingText }) => (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
        <span>{rating}</span>
      </div>
      <div className="text-sm text-gray-600">
        {ratingText && <span className="font-medium">{ratingText}</span>}
        <span className="ml-1">{reviews} reviews</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 pt-25 md:pt-[150px] ">

    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Browse by property type */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by property type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={type.image}
                    alt={type.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">{type.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Genius Rewards */}
        <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold mb-2">You got a temporary upgrade!</h2>
              <div className="bg-blue-800 rounded-lg p-4 inline-block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white text-blue-600 px-3 py-1 rounded font-bold">Genius</div>
                </div>
                <p className="text-sm">Noyan, you've been upgraded to</p>
                <p className="font-bold">Level 2 until Oct 2 2025</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-yellow-400 rounded"></div>
                  <span className="font-medium">10-15% discounts on stays</span>
                </div>
                <p className="text-sm opacity-90">Enjoy discounts at participating properties worldwide</p>
                <span className="inline-block mt-2 text-xs bg-blue-500 px-2 py-1 rounded">New</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Car className="w-5 h-5" />
                  <span className="font-medium">10-15% discounts on rental cars</span>
                </div>
                <p className="text-sm opacity-90">Save on select rental cars</p>
                <span className="inline-block mt-2 text-xs bg-blue-500 px-2 py-1 rounded">New</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-5 h-5" />
                  <span className="font-medium">Free breakfasts</span>
                </div>
                <p className="text-sm opacity-90">Start your day with free breakfast at select options</p>
                <span className="inline-block mt-2 text-xs bg-blue-500 px-2 py-1 rounded">New</span>
              </div>
            </div>
          </div>
        </section>

        {/* Weekend Deals */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Deals for the weekend</h2>
              <p className="text-gray-600 mt-1">Save on stays for September 19 - September 21</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weekendDeals.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="relative">
                  <img 
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                  <FavoriteButton hotel={hotel} />
                  {hotel.badge && (
                    <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {hotel.badge}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{hotel.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{hotel.location}</p>
                  <RatingBadge rating={hotel.rating} reviews={hotel.reviews} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Unique Properties */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Stay at our top unique properties</h2>
              <p className="text-gray-600 mt-1">From castles and villas to boats and igloos, we have it all</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uniqueProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="relative">
                  <img 
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  <FavoriteButton hotel={property} />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{property.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{property.location}</p>
                  <RatingBadge 
                    rating={property.rating} 
                    reviews={property.reviews} 
                    ratingText={property.ratingText}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Homes guests love */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Homes guests love</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              Discover homes
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guestLoveHomes.map((home) => (
              <div key={home.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="relative">
                  <img 
                    src={home.image}
                    alt={home.name}
                    className="w-full h-48 object-cover"
                  />
                  <FavoriteButton hotel={home} />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{home.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{home.location}</p>
                  <RatingBadge 
                    rating={home.rating} 
                    reviews={home.reviews} 
                    ratingText={home.ratingText}
                  />
                  <div className="mt-3 text-right">
                    <span className="text-sm text-gray-500">Starting from </span>
                    <span className="font-bold text-gray-900">{home.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Hotels;