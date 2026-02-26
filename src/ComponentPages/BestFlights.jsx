import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";

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
  { name: "EgyptAir’s", logo: "https://static.beebom.com/wp-content/uploads/2015/02/airline-logos-egyptair.jpg" },
  { name: "Thai Airways", logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/TG.png" },
  { name: "Japan Airlines", logo: "https://static.beebom.com/wp-content/uploads/2015/02/airline-logos-japan-e1424575148558.png" },
  { name: "Emirates", logo: "https://static.beebom.com/wp-content/uploads/2015/02/airline-logos-emirates.jpg" },
  { name: "Cathay Dragon’s", logo: "https://static.beebom.com/wp-content/uploads/2018/12/Cathay-Dragon-logo.jpg" }
];

const BestFlight = () => {
  return (
    <>
    <div>
      <NavBar/>
    </div>

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 pt-25 md:pt-[130px] ">
      <header className="mb-10 text-center">
        <h1 className=" text-[45px] lg:text-[84px] leading-12 font-bold text-blue-700 mt-10"> Best Flight Airlines</h1>
        <p className="text-gray-600 text-[20px] mt-15">Explore top airlines and book your next journey with ease</p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {airlines.map((airline, index) => (
          <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center">
            <img src={airline.logo} alt={airline.name} className="h-12 mb-3" />
            <p className="text-center text-sm font-medium text-gray-800">{airline.name}</p>
            <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-semibold">Explore →</button>
          </div>
        ))}
      </div>
    </div>

    <div>
      <Footer/>
    </div>
    </>
  );
};

export default BestFlight;
