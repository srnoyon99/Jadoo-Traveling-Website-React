import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, ArrowRight, Plane } from 'lucide-react';

const Flights = () => {
  const [tripType, setTripType] = useState('oneway');
  const [fareType, setFareType] = useState('regular');
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState('Economy');
  const [dealsTabType, setDealsTabType] = useState('oneway');

  const airlines = [
    { name: "Biman Bangladesh Airlines", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BG.png" },
    { name: "Air Astra", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/2A.png" },
    { name: "NOVOAIR", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/VQ.png" },
    { name: "US-Bangla Airlines", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BS.png" },
    { name: "Qatar Airways", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/QR.png" },
    { name: "Malaysia Airlines", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/MH.png" },
    { name: "Singapore Airlines", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/SQ.png" },
    { name: "Emirates", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/EK.png" },
    { name: "Turkish Airlines", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/TK.png" },
    { name: "Gulf Air", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/GF.jpg" },
    { name: "Air India", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/AI.png" },
    { name: "Saudia Airlines", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/SV.png" },
    { name: "SriLankan Airlines", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/UL.png" },
    { name: "China Southern Airlines", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/CZ.png" },
    { name: "Cathay Pacific", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/CX.png" },
    { name: "Thai Airways", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/TG.png" }
  ];

  const countries = [
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
    { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
    { name: "Malaysia", flag: "https://flagcdn.com/w320/my.png" },
    { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "United Arab Emirates", flag: "https://flagcdn.com/w320/ae.png" },
    { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
    { name: "Italy", flag: "https://flagcdn.com/w320/it.png" }
  ];

  const flightDealsOneway = [
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "3h 20m", type: "Nonstop", price: "US$122", originalPrice: "US$140",
      discount: "18% OFF", date: "Wed, Sep 17", airline: "Sunexpress"
    },
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "9h 30m", type: "1 stop", price: "US$69", originalPrice: "US$140",
      discount: "54% OFF", date: "Sun, Nov 30", airline: "easyJet"
    },
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "9h 30m", type: "1 stop", price: "US$79", originalPrice: "",
      discount: "", date: "Sun, Nov 30", airline: "Pegasus Airlines"
    },
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "3h 20m", type: "Nonstop", price: "US$139", originalPrice: "US$149",
      discount: "7% OFF", date: "Thu, Oct 2", airline: "Sunexpress"
    },
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "9h 10m", type: "1 stop", price: "US$79", originalPrice: "",
      discount: "", date: "Wed, Oct 22", airline: "AJet"
    },
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "9h 55m", type: "1 stop", price: "US$80", originalPrice: "",
      discount: "", date: "Mon, Oct 20", airline: "AJet"
    }
  ];

  const flightDealsRoundtrip = [
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "3h 20m", type: "Nonstop", price: "US$139", originalPrice: "US$149",
      discount: "7% OFF", date: "Thu, Oct 2", airline: "Sunexpress"
    },
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "9h 10m", type: "1 stop", price: "US$79", originalPrice: "",
      discount: "", date: "Wed, Oct 22", airline: "AJet"
    },
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "9h 55m", type: "1 stop", price: "US$80", originalPrice: "",
      discount: "", date: "Mon, Oct 20", airline: "AJet"
    },
     {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "3h 20m", type: "Nonstop", price: "US$122", originalPrice: "US$140",
      discount: "18% OFF", date: "Wed, Sep 17", airline: "Sunexpress"
    },
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "9h 30m", type: "1 stop", price: "US$69", originalPrice: "US$140",
      discount: "54% OFF", date: "Sun, Nov 30", airline: "easyJet"
    },
    {
      from: "DLM", fromName: "Dalaman", to: "BER", toName: "Berlin",
      time: "9h 30m", type: "1 stop", price: "US$79", originalPrice: "",
      discount: "", date: "Sun, Nov 30", airline: "Pegasus Airlines"
    },
  ];

  return (
    <div className="min-h-screen pt-30 md:pt-[120px] ">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 airbg bg-opacity-30"></div>
        
        <div className="relative z-10 text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-amber-300 leading-[1.3] shadow-serviceCard ">
            Where to Fly?
          </h1>
          <p className="text-xl text-amber-300 font-extralight leading-[1.3] shadow-serviceCard ">
            Find Cheap Flights, Airline Tickets in Bangladesh
          </p>
        </div>

        {/* Search Form */}
        <div className="relative z-10 w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8">
          {/* Trip Type Selection */}
          <div className="flex flex-wrap gap-4 mb-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="oneway"
                checked={tripType === 'oneway'}
                onChange={(e) => setTripType(e.target.value)}
                className="sr-only"
              />
              <div className={`px-6 py-2 rounded-full font-medium transition-all ${
                tripType === 'oneway' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}>
                One Way
              </div>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="roundtrip"
                checked={tripType === 'roundtrip'}
                onChange={(e) => setTripType(e.target.value)}
                className="sr-only"
              />
              <div className={`px-6 py-2 rounded-full font-medium transition-all ${
                tripType === 'roundtrip' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}>
                Round Trip
              </div>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="multicity"
                checked={tripType === 'multicity'}
                onChange={(e) => setTripType(e.target.value)}
                className="sr-only"
              />
              <div className={`px-6 py-2 rounded-full font-medium transition-all ${
                tripType === 'multicity' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}>
                Multi City
              </div>
            </label>

            {/* Passenger and Class Selection */}
            <div className="ml-auto flex gap-4">
              <select 
                value={passengers} 
                onChange={(e) => setPassengers(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">1 Traveller</option>
                <option value="2">2 Travellers</option>
                <option value="3">3 Travellers</option>
                <option value="4">4+ Travellers</option>
              </select>
              <select 
                value={classType} 
                onChange={(e) => setClassType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
              </select>
            </div>
          </div>

          {/* Flight Search Fields */}
          <div className={`grid gap-4 mb-6 ${
            tripType === 'roundtrip' ? 'grid-cols-1 md:grid-cols-5' : 'grid-cols-1 md:grid-cols-4'
          }`}>
            {/* From */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 mb-[20px] text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="DAC - Dhaka"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-xs text-gray-500 mt-1">Bangladesh, Hazrat Shahjalal International...</div>
            </div>

            {/* To */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 mb-[20px] text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="CXB - Cox's Bazar"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-xs text-gray-500 mt-1">Bangladesh, Cox's Bazar Airport (CXB)</div>
            </div>

            {/* Departure Date */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 mb-[20px] text-gray-400" />
              </div>
              <input
                type="date"
                defaultValue="2025-09-19"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-xs text-gray-500 mt-1">Departure - Friday, 2025</div>
            </div>

            {/* Return Date - Only show for Round Trip */}
            {tripType === 'roundtrip' && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 mb-[36px] text-gray-400" />
                </div>
                <input
                  type="date"
                  defaultValue="2025-09-26"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="text-xs text-gray-500 mt-1">Return - Friday, 2025</div>
              </div>
            )}

            {/* Search Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-[10px] px-[5px] rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>

          {/* Fare Type Selection */}
          <div className="flex gap-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="fareType"
                value="regular"
                checked={fareType === 'regular'}
                onChange={(e) => setFareType(e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">Regular Fare</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="fareType"
                value="student"
                checked={fareType === 'student'}
                onChange={(e) => setFareType(e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">Student Fare</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="fareType"
                value="umrah"
                checked={fareType === 'umrah'}
                onChange={(e) => setFareType(e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">Umrah Fare</span>
            </label>
          </div>
        </div>
      </div>

      {/* Most Popular Airlines Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Most Popular Airlines</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover top airlines on ShareTrip and seamlessly search any flight and get any online ticket 
              instantly, granting you effortless access to global travel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {airlines.map((airline, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={airline.logo} 
                    alt={airline.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"/></svg>';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {airline.name}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flights to Top Countries Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Flights to Top Countries</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Search flights to top countries, discover diverse flight destinations, and choose top airlines 
              for your ultimate journey through ShareTrip's comprehensive platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 cursor-pointer group border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={country.flag} 
                    alt={country.name}
                    className="w-8 h-6 object-cover rounded border border-gray-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" fill="gray"><rect width="100" height="60" fill="lightgray"/><text x="50" y="35" text-anchor="middle" font-size="12" fill="gray">FLAG</text></svg>';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {country.name}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flight Deals Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find cheap flights from Dalaman to Berlin</h2>
            <p className="text-gray-600">
              For as little as US$69, you can take your next adventure to Berlin without breaking the bank. 
              Choose between one-way and return tickets from Dalaman below.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <button 
                onClick={() => setDealsTabType('oneway')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  dealsTabType === 'oneway' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                One way
              </button>
              <button 
                onClick={() => setDealsTabType('roundtrip')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  dealsTabType === 'roundtrip' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Round-trip
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(dealsTabType === 'oneway' ? flightDealsOneway : flightDealsRoundtrip).map((deal, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <Plane className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-lg">{deal.from}</div>
                          <div className="text-sm text-gray-500">{deal.fromName}</div>
                        </div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-sm text-gray-500">{deal.time}</div>
                        <div className="text-sm text-blue-600">{deal.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{deal.to}</div>
                        <div className="text-sm text-gray-500">{deal.toName}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{deal.date} | {deal.airline}</div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-2xl font-bold text-blue-600">{deal.price}</div>
                      {deal.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">{deal.originalPrice}</div>
                      )}
                    </div>
                    {deal.discount && (
                      <div className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mr-2 lg:mr-0 mb-2">
                        {deal.discount}
                      </div>
                    )}
                    <button className=" w-fit cursor-pointer mt-5 lg:w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;