import { TestimonialsCeo1, TestimonialsCeo2, TestimonialsCeo3 } from "../ImportImages/ImportImages"
import TestimonialsCard from "./TestimonialsCard"
import { Splide, SplideSlide } from '@splidejs/react-splide';

const TestimonialData = [
     {
          id: 1,
          img: TestimonialsCeo1,
          pragraph: `“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”`,
          name: "Mike taylor",
          loction: "Lahore, Pakistan"
     },
     {
          id: 2,
          img: TestimonialsCeo2,
          pragraph: `“After going through a number of sites, I had to settle for Jadoo because honestly it was a no brainer trying someone else”`,
          name: "Sarah Connor",
          loction: "Globetrotter"
     },
     {
          id: 3,
          img: TestimonialsCeo3,
          pragraph: `“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”`,
          name: "Chris Thomas",
          loction: "CEO of Red Button"
     }
]


const Testimonials = () => {
     return (
          <section>

               <div className=" container grid  lg:grid-cols-2  lg:gap-[124px] " >

                    <div className=" top-0 " >
                         <p className=" text-[18px] text-text-crl font-semibold ">TESTIMONIALS</p>
                         <h1 className=" font-bold text-[50px] text-h1 max-w-[409px] ">What people say about Us.</h1>
                    </div>

                    <div>
                    {/* Desktop */}
                         <div className="testimonial_slider hidden lg:block">
                              <Splide
                                   options={{
                                        direction: "ttb",
                                        height: "356px",
                                        gap: "30px",
                                        // wheel: true,
                                   }}
                              >
                                   {TestimonialData?.map((testimonial) => {
                                        return (
                                             <SplideSlide key={testimonial.id}>
                                                  <div className="p-10 ">
                                                       <TestimonialsCard testimonial={testimonial} />
                                                  </div>
                                             </SplideSlide>
                                        );
                                   })}
                              </Splide>
                         </div>
                    {/* Dasktop */}

                    {/* Mobile */}
                    <div className="testimonial_slider mt-8 lg:hidden">
                              <Splide
                                   options={{
                                        direction: "ttb",
                                        height: "356px",
                                        gap: "30px",
                                        // wheel: true,
                                   }}
                              >
                                   {TestimonialData?.map((testimonial) => {
                                        return (
                                             <SplideSlide key={testimonial.id}>
                                                  <div className="p-10 ">
                                                       <TestimonialsCard testimonial={testimonial} />
                                                  </div>
                                             </SplideSlide>
                                        );
                                   })}
                              </Splide>
                         </div>
                    {/* Mobile */}

                    </div>

               </div>



          </section>
     )
}

export default Testimonials
