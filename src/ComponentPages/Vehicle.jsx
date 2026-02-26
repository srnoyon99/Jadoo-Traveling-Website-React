import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const busData = [
  { id: 1, type: ["AC", "Business"], operator: "Shohagh Paribaha...", route: "700", departs: "09:00 pm", via: "Direct", price: 2000, seats: 12 },
  { id: 2, type: ["AC", "Sleeper"],  operator: "Green Line",          route: "314-SP-Abdullahpur-Lower", departs: "09:30 pm", via: "Direct", price: 2500, seats: null },
  { id: 3, type: ["AC", "Sleeper"],  operator: "Green Line",          route: "314-SP-Abdullahpur-Upper", departs: "09:30 pm", via: "Direct", price: 2500, seats: null },
  { id: 4, type: ["AC", "Dd-Upper"],operator: "Green Line",          route: "310-DD-Abdullahpur-Upper", departs: "10:00 pm", via: "Direct", price: 2200, seats: null },
  { id: 5, type: ["AC", "Dd-Lower"],operator: "Green Line",          route: "310-DD-Abdullahpur-Lower", departs: "10:00 pm", via: "Direct", price: 2200, seats: null },
  { id: 6, type: ["AC", "Economy"], operator: "Green Line",          route: "306-EC-Kallayanpur",       departs: "10:30 pm", via: "Direct", price: 1500, seats: null },
];

const carData = [
  { id: 1, type: "Value Ride Sedan", name: "Budget Sedan",   model: "2000-2010",    seats: 4,  suitcase: "1-2",   priceMin: 9440,  priceMax: 12345, emi: true },
  { id: 2, type: "Premium Sedan",    name: "Premium Sedan",  model: "2010+",        seats: 4,  suitcase: "1-2",   priceMin: 11982, priceMax: 15669, emi: true },
  { id: 3, type: "Mini Microbus",    name: "Mini Microbus",  model: "2000+",        seats: 7,  suitcase: "2-3",   priceMin: 14161, priceMax: 18518, emi: true },
  { id: 4, type: "Microbus",         name: "Microbus",       model: "2000+",        seats: 11, suitcase: "3-4",   priceMin: 17065, priceMax: 22316, emi: true },
  { id: 5, type: "Minibus",          name: "Minibus",        model: "2000+",        seats: 24, suitcase: "10-20", priceMin: 38124, priceMax: 49855, emi: true },
];

// ─── BADGE COLORS ─────────────────────────────────────────────────────────────

const busTypePalette = {
  AC:        "bg-slate-800 text-white",
  Business:  "bg-amber-500 text-white",
  Sleeper:   "bg-violet-600 text-white",
  "Dd-Upper":"bg-indigo-500 text-white",
  "Dd-Lower":"bg-indigo-500 text-white",
  Economy:   "bg-teal-600 text-white",
};

// ─── ICONS ────────────────────────────────────────────────────────────────────

const ClockIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);
const ChevronRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
  </svg>
);
const ChevronDown = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
  </svg>
);
const FilterIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2"/>
  </svg>
);
const InfoIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>
  </svg>
);
const SwapIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
  </svg>
);
const ArrowRight = ({ className }) => (
  <svg className={className || "w-3 h-3 text-violet-500"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
  </svg>
);

// ─── BUS CARD ─────────────────────────────────────────────────────────────────

function BusCard({ bus, from, to }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all duration-200 p-5 mb-3">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[9px] font-black tracking-tight">BUS</span>
          </div>
          <div>
            <p className="font-bold text-gray-800 text-sm leading-tight">{bus.operator}</p>
            <p className="text-gray-400 text-xs">{bus.route}</p>
          </div>
        </div>
        <div className="flex gap-1.5">
          {bus.type.map((t) => (
            <span key={t} className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${busTypePalette[t] || "bg-gray-200 text-gray-700"}`}>{t}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 flex items-center gap-3">
          <div>
            <p className="text-xl font-black text-gray-900">{from}</p>
            <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1"><ClockIcon/> {bus.departs}</p>
          </div>
          <div className="flex-1 flex items-center gap-1 min-w-0">
            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 via-violet-300 to-gray-200"></div>
            <div className="w-6 h-6 rounded-full border-2 border-violet-400 flex items-center justify-center bg-white flex-shrink-0">
              <ArrowRight/>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 via-violet-300 to-gray-200"></div>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-gray-900">{to}</p>
            <p className="text-xs text-gray-400 mt-0.5">{bus.via}</p>
          </div>
        </div>
        <div className="w-px h-14 bg-gray-100 mx-2 flex-shrink-0"></div>
        <div className="text-right flex-shrink-0">
          <p className="text-xs text-gray-400 font-medium">Seat Fare BDT</p>
          <p className="text-3xl font-black text-gray-900 leading-tight">{bus.price.toLocaleString()}</p>
          <p className="text-violet-500 text-xs font-semibold mb-2">
            {bus.seats ? `${bus.seats} Seats Left` : "Seats Available"}
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 active:scale-95 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 ml-auto transition-all">
            Select Bus <ChevronRight/>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end mt-4 pt-3 border-t border-gray-50">
        <button className="text-violet-500 hover:text-violet-700 text-xs font-semibold flex items-center gap-1 transition-colors">
          <InfoIcon/> See all Details
        </button>
      </div>
    </div>
  );
}

// ─── CAR CARD ─────────────────────────────────────────────────────────────────

const carEmoji = {
  "Value Ride Sedan": "🚗",
  "Premium Sedan":    "🚘",
  "Mini Microbus":    "🚐",
  "Microbus":         "🚌",
  "Minibus":          "🚍",
};

function CarCard({ car, from, to }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all duration-200 p-5 mb-3">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-lg flex-shrink-0">
            {carEmoji[car.type] || "🚗"}
          </div>
          <div>
            <p className="font-bold text-gray-800 text-sm leading-tight">{car.name}</p>
            <p className="text-gray-400 text-xs">Model year: {car.model}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-white">{car.type}</span>
          {car.emi && (
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-400 text-emerald-600 bg-emerald-50">EMI ✓</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 flex items-center gap-3">
          <div>
            <p className="text-xl font-black text-gray-900">{from}</p>
            <p className="text-xs text-gray-400 mt-0.5">Departure</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1 min-w-0">
            <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">8h 42m</span>
            <div className="w-full flex items-center gap-1">
              <div className="h-px flex-1 bg-gradient-to-r from-gray-200 via-violet-300 to-gray-200"></div>
              <div className="w-6 h-6 rounded-full border-2 border-violet-400 flex items-center justify-center bg-white flex-shrink-0">
                <ArrowRight/>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-200 via-violet-300 to-gray-200"></div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-gray-900">{to}</p>
            <p className="text-xs text-gray-400 mt-0.5">Arrival</p>
          </div>
        </div>
        <div className="w-px h-14 bg-gray-100 mx-2 flex-shrink-0"></div>
        <div className="text-right flex-shrink-0">
          <p className="text-xs text-gray-400 font-medium flex items-center justify-end gap-1">Approx. BDT <InfoIcon/></p>
          <p className="text-2xl font-black text-gray-900 leading-tight">
            {car.priceMin.toLocaleString()}-{car.priceMax.toLocaleString()}
          </p>
          <button className="mt-2 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 ml-auto transition-all">
            Select Car <ChevronRight/>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span>👤 {car.seats} seats</span>
          <span>❄️ AC</span>
          <span>🧳 {car.suitcase} bags</span>
        </div>
        <button className="text-violet-500 hover:text-violet-700 text-xs font-semibold flex items-center gap-1 transition-colors">
          <InfoIcon/> See all Details
        </button>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function Vehicle() {
  const [activeTab, setActiveTab] = useState("bus");
  const [from, setFrom]       = useState("");
  const [to, setTo]           = useState("");
  const [date, setDate]       = useState("Sat, 28 Feb");
  const [persons, setPersons] = useState(2);

  const swapLocations = () => { setFrom(to); setTo(from); };

  const tabs = [
    {
      id: "bus", label: "Bus Tickets", range: "3,000-5,600",
      icon: (active) => (
        <svg className={`w-5 h-5 ${active ? "text-violet-600" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h5l3 3v5h-8V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      )
    },
    {
      id: "car", label: "Car Rental", range: "9,440-49,855",
      icon: (active) => (
        <svg className={`w-5 h-5 ${active ? "text-violet-600" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2h-2m-4-5a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      id: "launch", label: "Launch", range: "0-0",
      icon: (active) => (
        <svg className={`w-5 h-5 ${active ? "text-violet-600" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 17l9-14 9 14H3z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-24 md:pt-[100px] ">

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-700 pt-16 pb-24 px-6 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center mb-10 relative">
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Your Smarter Way to Travel</h1>
          <p className="text-violet-200 text-sm font-medium">Bus Tickets · Car Rental · Launch Tickets</p>
        </div>

        {/* Search card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl flex items-center gap-1 p-2 relative">
          {/* From */}
          <div className="flex items-center gap-2 flex-1 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors">
            <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
            <div className="min-w-0">
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">From</p>
              <input value={from} onChange={e => setFrom(e.target.value)} className="block w-full outline-none text-sm font-bold text-gray-800 bg-transparent" placeholder="Leaving From"/>
            </div>
          </div>

          {/* Swap */}
          <button onClick={swapLocations} className="w-9 h-9 bg-violet-600 hover:bg-violet-700 rounded-full flex items-center justify-center flex-shrink-0 transition-colors active:scale-90 shadow-md">
            <SwapIcon/>
          </button>

          {/* To */}
          <div className="flex items-center gap-2 flex-1 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors">
            <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
            <div className="min-w-0">
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">To</p>
              <input value={to} onChange={e => setTo(e.target.value)} className="block w-full outline-none text-sm font-bold text-gray-800 bg-transparent" placeholder="Going To"/>
            </div>
          </div>

          <div className="w-px h-10 bg-gray-100 flex-shrink-0"></div>

          {/* Date */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
            <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Date</p>
              <p className="text-sm font-bold text-gray-800">{date}</p>
            </div>
          </div>

          <div className="w-px h-10 bg-gray-100 flex-shrink-0"></div>

          {/* Persons */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
            <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Persons</p>
              <p className="text-sm font-bold text-gray-800">{persons} Person{persons > 1 ? "s" : ""}</p>
            </div>
          </div>

          {/* Search */}
          <button className=" bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2 transition-all shadow-lg shadow-violet-300 flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Search
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 -mt-6 pb-12">

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border mt-10 border-gray-100 flex mb-5 overflow-hidden">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center py-4 px-4 transition-all relative ${active ? "bg-violet-50" : "hover:bg-gray-50"}`}
              >
                {active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600 rounded-t-full"></div>}
                <div className="flex items-center gap-2 mb-0.5">
                  {tab.icon(active)}
                  <span className={`font-bold text-sm ${active ? "text-violet-700" : "text-gray-500"}`}>{tab.label}</span>
                </div>
                <span className={`text-xs font-medium ${active ? "text-violet-400" : "text-gray-300"}`}>৳ {tab.range}</span>
              </button>
            );
          })}
        </div>

        {/* Bus */}
        {activeTab === "bus" && (
          <>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-black text-gray-900">Select outbound</h2>
                <p className="text-xs text-gray-400 mt-0.5">18 trips · 4 operators · 146 seats available</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 border border-gray-200 bg-white rounded-xl px-3 py-2 text-xs font-semibold text-gray-600 hover:border-violet-300 hover:text-violet-600 transition-colors">Bus Type <ChevronDown/></button>
                <button className="flex items-center gap-1.5 border border-gray-200 bg-white rounded-xl px-3 py-2 text-xs font-semibold text-gray-600 hover:border-violet-300 hover:text-violet-600 transition-colors">Onboarding <ChevronDown/></button>
                <button className="flex items-center gap-1.5 border border-gray-200 bg-white rounded-xl px-3 py-2 text-xs font-semibold text-gray-600 hover:border-violet-300 hover:text-violet-600 transition-colors"><FilterIcon/> Filters</button>
              </div>
            </div>
            {busData.map(bus => <BusCard key={bus.id} bus={bus} from={from} to={to} />)}
          </>
        )}

        {/* Car */}
        {activeTab === "car" && (
          <>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-black text-gray-900">Pick a Ride Option</h2>
                <p className="text-xs text-gray-400 mt-0.5">5 vehicle types available</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 border border-gray-200 bg-white rounded-xl px-3 py-2 text-xs font-semibold text-gray-600 hover:border-violet-300 hover:text-violet-600 transition-colors">Car Type <ChevronDown/></button>
                <button className="flex items-center gap-1.5 border border-gray-200 bg-white rounded-xl px-3 py-2 text-xs font-semibold text-gray-600 hover:border-violet-300 hover:text-violet-600 transition-colors"><FilterIcon/> Filters</button>
              </div>
            </div>
            {carData.map(car => <CarCard key={car.id} car={car} from={from} to={to} />)}
          </>
        )}

        {/* Launch */}
        {activeTab === "launch" && (
          <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
            <p className="text-4xl mb-3">⚓</p>
            <p className="font-bold text-gray-700">No launch routes found</p>
            <p className="text-gray-400 text-sm mt-1">Try a different date or route</p>
          </div>
        )}
      </div>
    </div>
  );
}