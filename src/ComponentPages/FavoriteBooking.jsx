import React from 'react';
import { Heart, MapPin, Star, Trash2, BookOpen } from 'lucide-react';
import { useFavorites } from '../Hooks/useFavorites';
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';

const FavoriteBooking = () => {
  const { favorites, removeFavorite, clearFavorites } = useFavorites();

  const renderRatingBadge = (rating) => {
    let color = 'bg-green-600';
    if (rating < 7) color = 'bg-yellow-600';
    if (rating < 6) color = 'bg-red-600';
    return color;
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-30 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  Your Favorite Bookings
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                  {favorites.length === 0
                    ? 'Start adding your favorite hotels to save them here'
                    : `You have ${favorites.length} favorite ${favorites.length === 1 ? 'destination' : 'destinations'}`}
                </p>
              </div>
              {favorites.length > 0 && (
                <button
                  onClick={clearFavorites}
                  className="px-4 py-2 cursor-pointer bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 text-sm md:text-base font-medium"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Empty State */}
          {favorites.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 md:p-20 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <Heart className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                No Favorites Yet
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto mb-8">
                Click the heart icon on hotels to save them here. Build your list of favorite destinations for your next adventure!
              </p>
              <a
                href="/hotels"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <BookOpen className="w-5 h-5" />
                Explore Hotels
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((hotel) => (
                <div
                  key={hotel.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-200 h-48 md:h-56">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badge */}
                    {hotel.badge && (
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                        {hotel.badge}
                      </div>
                    )}
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFavorite(hotel.id)}
                      className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white text-red-500 hover:text-red-600 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 line-clamp-2">
                      {hotel.name}
                    </h3>
                    
                    {/* Location */}
                    <div className="flex items-start gap-2 mb-4 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
                      <span className="line-clamp-2">{hotel.location}</span>
                    </div>

                    {/* Rating Section */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                      <div className={`${renderRatingBadge(hotel.rating)} text-white px-3 py-1 rounded-lg font-bold text-sm`}>
                        {hotel.rating}
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">
                          {hotel.ratingText || (hotel.rating >= 8 ? 'Excellent' : 'Good')}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {hotel.reviews} reviews
                        </p>
                      </div>
                    </div>

                    {/* Price if available */}
                    {hotel.price && (
                      <div className="mb-4">
                        <p className="text-gray-600 text-xs">Starting from</p>
                        <p className="text-lg font-bold text-gray-900">{hotel.price}</p>
                      </div>
                    )}

                    {/* Action Button */}
                    <button className="w-full py-2 px-4 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-200 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stats */}
          {favorites.length > 0 && (
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Collection Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{favorites.length}</div>
                  <p className="text-gray-600">Total Favorites</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {favorites.filter(h => h.rating >= 8).length}
                  </div>
                  <p className="text-gray-600">Highly Rated</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {new Set(favorites.map(h => h.location.split(',')[0])).size}
                  </div>
                  <p className="text-gray-600">Unique Locations</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FavoriteBooking;
