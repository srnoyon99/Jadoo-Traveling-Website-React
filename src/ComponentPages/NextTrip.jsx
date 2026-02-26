import { Next1, Next2, Next3, Nexttrip } from "../ImportImages/ImportImages"


const NextTrip = () => {
    return (
        <section>
            <div className="container">
                <div className="booking_container grid  lg:grid-cols-2 gap-2 justify-between items-center">
                    <div className="booking_text">
                        <h3 className="text-[22px] font-poppins font-semibold mb-[15px] text-center lg:text-start text-text-crl">Easy and Fast
                        </h3>
                        <h1 className="text-[50px] font-bold font-Volkhob text-[#14183E] text-center lg:text-start mb-[31px] max-w-[511px] ">Book Your Next Trip in 3 Easy Steps</h1>
                        <div className="booking_steps space-y-10">
                            <div className="step flex items-center gap-6">
                                <div className=" flex items-center p-[13px] justify-center text-[30px] ">
                                    <img src={Next1} alt="icon" />
                                </div>
                                <div className="step_text">
                                    <h4 className="text-[20px] text-text-crl
                                 font-bold mb-[5px] font-poppins">Choose Destination</h4>
                                    <p className="text-text-crl max-w-[327px] font-poppins  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                                </div>
                            </div>

                            <div className="step flex items-center gap-6">
                                <div className="step_number flex items-center p-[13px] justify-center  text-white text-[30px] font-bold">
                                    <img src={Next2} alt="icon" />
                                </div>
                                <div className="step_text">
                                    <h4 className="text-[20px] text-text-crl font-bold mb-[5px] font-poppins">Make Payment</h4>
                                    <p className="text-text-crl text-[16px] max-w-[327px] font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                                </div>
                            </div>

                            <div className="step flex items-center gap-6">
                                <div className="step_number flex items-center p-[13px] justify-center font-bold">
                                    <img src={Next3} alt="icon" />
                                </div>
                                <div className="step_text">
                                    <h4 className="text-[20px] text-text-crl font-bold mb-[5px] font-poppins">Reach Airport on Selected Date</h4>
                                    <p className="text-text-crl text-[16px] max-w-[327px] font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="booking_image h-full w-full ">
                        <img className=" h-full w-full " src={Nexttrip} alt="booking image" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NextTrip