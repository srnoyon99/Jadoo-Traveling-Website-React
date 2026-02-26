import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Star, Users, Heart, Share2, Ticket } from 'lucide-react';
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';

const LocalEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: 1
  });
  const [favorites, setFavorites] = useState(new Set());

  const events = [
    {
      id: 1,
      title: "Bollywood Night with Shahrukh Khan",
      celebrity: "Shah Rukh Khan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      date: "2025-10-15",
      time: "8:00 PM",
      venue: "Madison Square Garden",
      location: "New York, USA",
      price: 150,
      category: "Concert",
      rating: 4.8,
      attendees: 1200,
      description: "An unforgettable evening with the King of Bollywood"
    },
    {
      id: 2,
      title: "Concert with Ariana Grande",
      celebrity: "Ariana Grande",
      image: "https://www.billboard.com/wp-content/uploads/2025/09/ariana-grande-vma-2025-billboard-1800.jpg",
      date: "2025-11-02",
      time: "7:30 PM",
      venue: "O2 Arena",
      location: "London, UK",
      price: 200,
      category: "Music",
      rating: 4.9,
      attendees: 2500,
      description: "Pop sensation live in concert"
    },
    {
      id: 3,
      title: "Stand-up Comedy with Kevin Hart",
      celebrity: "Kevin Hart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      date: "2025-10-28",
      time: "9:00 PM",
      venue: "Comedy Central",
      location: "Los Angeles, USA",
      price: 80,
      category: "Comedy",
      rating: 4.7,
      attendees: 800,
      description: "Hilarious night of stand-up comedy"
    },
    {
      id: 4,
      title: "Dance Performance with Shakira",
      celebrity: "Shakira",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      date: "2025-11-20",
      time: "8:30 PM",
      venue: "Royal Albert Hall",
      location: "London, UK",
      price: 180,
      category: "Dance",
      rating: 4.8,
      attendees: 1500,
      description: "Mesmerizing dance performance by the Latin sensation"
    },
    {
      id: 5,
      title: "Magic Show with David Blaine",
      celebrity: "David Blaine",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
      date: "2025-12-05",
      time: "7:00 PM",
      venue: "Apollo Theater",
      location: "New York, USA",
      price: 120,
      category: "Magic",
      rating: 4.6,
      attendees: 600,
      description: "Mind-bending magic and illusions"
    },
    {
      id: 6,
      title: "Fashion Show with Priyanka Chopra",
      celebrity: "Priyanka Chopra",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
      date: "2025-11-12",
      time: "6:00 PM",
      venue: "Fashion Week Venue",
      location: "Paris, France",
      price: 250,
      category: "Fashion",
      rating: 4.9,
      attendees: 300,
      description: "Exclusive fashion show and meet & greet"
    },
    {
      id: 7,
      title: "Rock Concert with The Weeknd",
      celebrity: "The Weeknd",
      image: "https://hips.hearstapps.com/hmg-prod/images/abel-tesfaye-knowen-as-the-weeknd-arrives-for-the-us-news-photo-1748446206.pjpeg",
      date: "2025-10-22",
      time: "8:00 PM",
      venue: "Wembley Stadium",
      location: "London, UK",
      price: 175,
      category: "Music",
      rating: 4.9,
      attendees: 3000,
      description: "Epic rock performance by the chart-topping artist"
    },
    {
      id: 8,
      title: "Live Performance with Taylor Swift",
      celebrity: "Taylor Swift",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
      date: "2025-12-15",
      time: "7:00 PM",
      venue: "Mercedes-Benz Stadium",
      location: "Atlanta, USA",
      price: 300,
      category: "Concert",
      rating: 5.0,
      attendees: 4500,
      description: "Exclusive acoustic session with the global superstar"
    },
    {
      id: 9,
      title: "Acting Workshop with Leonardo DiCaprio",
      celebrity: "Leonardo DiCaprio",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
      date: "2025-11-08",
      time: "2:00 PM",
      venue: "Hollywood Studio",
      location: "Los Angeles, USA",
      price: 500,
      category: "Workshop",
      rating: 4.8,
      attendees: 50,
      description: "Learn from the Oscar-winning actor himself"
    },
    {
      id: 10,
      title: "Comedy Special with Dave Chappelle",
      celebrity: "Dave Chappelle",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=500&fit=crop&crop=face",
      date: "2025-11-25",
      time: "10:00 PM",
      venue: "Comedy Store",
      location: "Los Angeles, USA",
      price: 95,
      category: "Comedy",
      rating: 4.9,
      attendees: 400,
      description: "Exclusive stand-up special with unfiltered humor"
    },
    {
      id: 11,
      title: "Cooking Masterclass with Gordon Ramsay",
      celebrity: "Gordon Ramsay",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&crop=face",
      date: "2025-10-30",
      time: "4:00 PM",
      venue: "Culinary Institute",
      location: "New York, USA",
      price: 400,
      category: "Masterclass",
      rating: 4.7,
      attendees: 30,
      description: "Learn signature dishes from the world's most famous chef"
    },
    {
      id: 12,
      title: "Hip-Hop Concert with Drake",
      celebrity: "Drake",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop&crop=face",
      date: "2025-12-20",
      time: "9:00 PM",
      venue: "Scotiabank Arena",
      location: "Toronto, Canada",
      price: 220,
      category: "Hip-Hop",
      rating: 4.8,
      attendees: 2800,
      description: "Live hip-hop performance with special guest appearances"
    },
    {
      id: 13,
      title: "Talk Show with Oprah Winfrey",
      celebrity: "Oprah Winfrey",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
      date: "2025-11-18",
      time: "3:00 PM",
      venue: "Harpo Studios",
      location: "Chicago, USA",
      price: 180,
      category: "Talk Show",
      rating: 4.9,
      attendees: 200,
      description: "Intimate conversation and life lessons with the media mogul"
    },
    {
      id: 14,
      title: "Tennis Exhibition with Serena Williams",
      celebrity: "Serena Williams",
      image: "https://media.glamour.com/photos/66f6df55fce17c698c0bc381/master/w_2560%2Cc_limit/GLAMOUR-WOTY-2024-SerenaWilliams.jpg",
      date: "2025-12-08",
      time: "5:00 PM",
      venue: "Arthur Ashe Stadium",
      location: "New York, USA",
      price: 150,
      category: "Sports",
      rating: 4.6,
      attendees: 1000,
      description: "Exhibition match and tennis clinic with the tennis legend"
    },
    {
      id: 15,
      title: "R&B Night with Beyoncé",
      celebrity: "Beyoncé",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=face",
      date: "2025-12-31",
      time: "11:00 PM",
      venue: "Mercedes-Benz Superdome",
      location: "New Orleans, USA",
      price: 350,
      category: "R&B",
      rating: 5.0,
      attendees: 5000,
      description: "New Year's Eve spectacular with Queen B herself"
    },
    {
      id: 16,
      title: "Tech Talk with Elon Musk",
      celebrity: "Elon Musk",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      date: "2025-11-05",
      time: "1:00 PM",
      venue: "Tesla Gigafactory",
      location: "Austin, USA",
      price: 600,
      category: "Tech Talk",
      rating: 4.8,
      attendees: 100,
      description: "Exclusive insights into the future of technology and space"
    },
    {
      id: 17,
      title: "Fitness Bootcamp with Dwayne Johnson",
      celebrity: "Dwayne Johnson",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
      date: "2025-10-25",
      time: "6:00 AM",
      venue: "Muscle Beach",
      location: "Venice Beach, USA",
      price: 200,
      category: "Fitness",
      rating: 4.7,
      attendees: 150,
      description: "High-intensity workout session with The Rock"
    },
    {
      id: 18,
      title: "Pop Concert with Justin Bieber",
      celebrity: "Justin Bieber",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
      date: "2025-11-30",
      time: "8:00 PM",
      venue: "Rogers Centre",
      location: "Toronto, Canada",
      price: 185,
      category: "Pop",
      rating: 4.6,
      attendees: 3500,
      description: "Pop hits and new releases in an intimate setting"
    }
  ];

  const toggleFavorite = (eventId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(eventId)) {
      newFavorites.delete(eventId);
    } else {
      newFavorites.add(eventId);
    }
    setFavorites(newFavorites);
  };

  const handleBooking = (event) => {
    setSelectedEvent(event);
  };

  const handleSubmitBooking = () => {
    if (!bookingForm.name || !bookingForm.email || !bookingForm.phone) {
      alert('Please fill in all required fields!');
      return;
    }
    alert(`Booking confirmed for ${selectedEvent.title}!\nName: ${bookingForm.name}\nTickets: ${bookingForm.tickets}`);
    setSelectedEvent(null);
    setBookingForm({ name: '', email: '', phone: '', tickets: 1 });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
     <>
     <div className='' >
          <NavBar/>
     </div>

     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-15 md:pb-[130px]  ">

      {/* Hero Section */}
      <section className="py-20 text-center text-white  ">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Meet Your Favorite Celebrities
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Book exclusive events and experiences with world-renowned celebrities
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
              Browse Events
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Upcoming Celebrity Events</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.celebrity}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={() => toggleFavorite(event.id)}
                      className="bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites.has(event.id) ? 'text-red-500 fill-red-500' : 'text-white'}`} 
                      />
                    </button>
                    <button className="bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-colors">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span>{event.venue}, {event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-semibold">{event.rating}</span>
                      </div>
                      <div className="text-2xl font-bold text-white">${event.price}</div>
                    </div>
                    <button 
                      onClick={() => handleBooking(event)}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <Ticket className="w-4 h-4" />
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Book Event</h3>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-white hover:text-gray-300"
              >
                ✕
              </button>
            </div>
            
            <div className="mb-6">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.celebrity}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-white">{selectedEvent.title}</h4>
              <p className="text-gray-300">{formatDate(selectedEvent.date)} at {selectedEvent.time}</p>
              <p className="text-yellow-400 font-bold text-xl">${selectedEvent.price} per ticket</p>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={bookingForm.name}
                onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={bookingForm.email}
                onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={bookingForm.phone}
                onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <div className="flex items-center gap-4">
                <span className="text-white">Tickets:</span>
                <select
                  value={bookingForm.tickets}
                  onChange={(e) => setBookingForm({...bookingForm, tickets: parseInt(e.target.value)})}
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num} className="bg-gray-800">{num}</option>
                  ))}
                </select>
              </div>
              
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="flex justify-between text-white text-lg font-semibold">
                  <span>Total:</span>
                  <span>${selectedEvent.price * bookingForm.tickets}</span>
                </div>
              </div>
              
              <button
                onClick={handleSubmitBooking}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    <Footer/>

     </>
  );
};

export default LocalEvents;