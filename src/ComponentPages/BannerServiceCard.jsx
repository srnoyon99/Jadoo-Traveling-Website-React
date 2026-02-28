import { Link } from "lucide-react"
import { service_customization, service_dot, services_events, services_flight, services_weather } from "../ImportImages/ImportImages"


const BannerServiceCard = ({service}) => {
  return (
    <section className="relative" >

      <div className=" flex flex-col items-center mb-[70px]  " >
        <p className="font-semibold text-[14] lg:text-[18px] text-p  " >CATEGORY</p>
        <h1 className=" text-4xl lg:text-[50px] font-bold text-h1 text-nowrap leading-2 mt-[25px] " >We Offer Best Services</h1>
      </div>
    
    {/* Dasktop */}
    <div className=" hidden lg:block">
      <div className=" grid grid-cols-4  " >

        <div className=" text-center" >
        <div className=" relative z-[1]  after:absolute hover:after:transition-all after:bottom-0 after:w-[100px] after:h-[100px] after:left-[-50px] after:bg-transparent after:-z-[1] after:rounded-tl-[30px] after:rounded-br-[10px] hover:after:bg-[#DF6951] after:translate-y-[40px] rounded-[36px] " >
        
        <div className=" w-full lg:w-[267px]  h-[314px] hover:bg-white relative z-[1] bg-transparent  p-[44px] shadow-serviceCard  rounded-[36px] " >

       <div className=" flex flex-col items-center text-center " >
         <div>
        <a href="weather"><img className=" h-[78px] w-[92px] " src={services_weather} alt="weather" /></a>
        </div>
        <div>
          <a href="weather"><h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4 " >Calculated Weather </h3></a>
          <p className="text-[16px] leading-[26px] text-p" >Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
       </div>

        </div>
      </div>
      </div>

      <div className=" text-center" >
        <div className=" relative z-[1]  after:absolute hover:after:transition-all after:bottom-0 after:w-[100px] after:h-[100px] after:left-[-50px] after:bg-transparent after:-z-[1] after:rounded-tl-[30px] after:rounded-br-[10px] hover:after:bg-[#DF6951] after:translate-y-[40px] rounded-[36px] " >
        
        <div className=" w-[267px] h-[314px] hover:bg-white relative z-[1] bg-transparent p-[44px] shadow-serviceCard rounded-[36px]  " >

       <div className=" flex flex-col items-center text-center translate-y-[-70px] " >
         <div>
        <a href="bestflight"><img className=" h-[153.33px] w-[166.87px] translate-y-[28px] " src={services_flight} alt="weather" /></a>
        </div>
        <div>
          <a href="bestflight"><h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4 " > Best Flights </h3></a>
          <p className=" text-[16px] leading-[26px] text-p " >Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
       </div>

        </div>
      </div>
      </div>

      <div className="  text-center " >
        <div className=" relative z-[1]  after:absolute hover:after:transition-all after:bottom-0 after:w-[100px] after:h-[100px] after:left-[-50px] after:bg-transparent after:-z-[1] after:rounded-tl-[30px] after:rounded-br-[10px] hover:after:bg-[#DF6951] after:translate-y-[40px] rounded-[36px] " >
        
        <div className=" w-[267px] h-[314px] hover:bg-white relative z-[1] bg-transparent p-[44px] shadow-serviceCard rounded-[36px]  " >

       <div className=" flex flex-col items-center text-center " >
         <div>
        <a href="localevents"><img className=" h-[75px] w-[67px] " src={services_events} alt="events" /></a>
        </div>
        <div>
          <a href="localevents"><h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4 " > Local Events </h3></a>
          <p className="text-[16px] leading-[26px] text-p">Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
        </div>
       </div>

        </div>
      </div>
      </div>

      <div className=" mx-auto " >
        <div className=" relative z-[1]  after:absolute hover:after:transition-all after:bottom-0 after:w-[100px] after:h-[100px] after:left-[-50px] after:bg-transparent after:z-[-1] after:rounded-tl-[30px] after:rounded-br-[10px] hover:after:bg-[#DF6951] after:translate-y-[40px] rounded-[36px] " >
        
        <div className=" w-[267px] h-[314px] hover:bg-white relative z-[1] bg-transparent p-[44px] shadow-serviceCard rounded-[36px] " >

       <div className=" z-[1] flex flex-col items-center text-center " >
         <div>
        <a href="customization"><img className=" h-[66px] w-[77px] " src={service_customization} alt="weather" /></a>
        </div>
        <div>
          <a href="customization"><h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4  " >Customization </h3></a>
          <p className=" text-[16px] leading-[26px] text-p " >We deliver outsourced aviation services for military customers</p>
        </div>
       </div>

        </div>
      </div>
      </div>

      </div>
    </div>
    {/* Dasktop */}

    {/* Mobile cards (same markup reused) */}
    <div className="block lg:hidden">
      <div className="container grid grid-cols-1 gap-6">

        <div className="text-center">
            <div className="w-full h-auto lg:h-[314px] hover:bg-white relative z-[1] bg-transparent p-6 shadow-serviceCard rounded-[36px]">
       <div className=" flex flex-col items-center text-center " >
         <div>
        <a href="weather"><img className=" h-[78px] w-[92px] " src={services_weather} alt="weather" /></a>
        </div>
        <div>
          <a href="weather"><h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4 " >Calculated Weather </h3></a>
          <p className="text-[16px] leading-[26px] text-p" >Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
       </div>
        </div>

      </div>

      <div className=" text-center" >
        
        <div className=" w-full h-[314px] hover:bg-white relative z-[1] bg-transparent p-[44px] shadow-serviceCard rounded-[36px]  " >

       <div className=" flex flex-col items-center text-center translate-y-[-70px] " >
         <div>
        <a href="bestflight"><img className=" h-[153.33px] w-[166.87px] translate-y-[28px] " src={services_flight} alt="weather" /></a>
        </div>
        <div>
          <a href="bestflight"><h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4 " > Best Flights </h3></a>
          <p className=" text-[16px] leading-[26px] text-p " >Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
       </div>

        </div>
      </div>

      <div className="  text-center " >
        <div className=" w-full h-[314px] hover:bg-white relative z-[1] bg-transparent p-[44px] shadow-serviceCard rounded-[36px]  " >

       <div className=" flex flex-col items-center text-center " >
         <div>
        <a href="localevents"><img className=" h-[75px] w-[67px] " src={services_events} alt="events" /></a>
        </div>
        <div>
          <a href="localevents"><h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4 " > Local Events </h3></a>
          <p className="text-[16px] leading-[26px] text-p">Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
        </div>
       </div>

        </div>
      </div>

      <div className=" mx-auto " >
        <div className=" w-full h-[314px] hover:bg-white relative z-[1] bg-transparent p-[44px] shadow-serviceCard rounded-[36px] " >

       <div className=" z-[1] flex flex-col items-center text-center " >
         <div>
        <a href="customization"><img className=" h-[66px] w-[77px] " src={service_customization} alt="weather" /></a>
        </div>
        <div>
          <a href="customization"><h3 className=" font-open-sans font-semibold text-[20px] pt-7.5 pb-4  " >Customization </h3></a>
          <p className=" text-[16px] leading-[26px] text-p " >We deliver outsourced aviation services for military customers</p>
        </div>
       </div>

        </div>
      </div>

      </div>
    </div>
    {/* Mobile */}

      <div className=" absolute z-20 top-0 right-0 hidden lg:block " >
        <img src={service_dot} alt="dot" />
      </div>

    </section>
  )
}

export default BannerServiceCard
