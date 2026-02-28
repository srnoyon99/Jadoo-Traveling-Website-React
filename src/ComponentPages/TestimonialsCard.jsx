import { TestimonialsCeo1, TestimonialsCeo2, TestimonialsCeo3 } from "../ImportImages/ImportImages"

const TestimonialsCard = ({testimonial}) => {
  return (
    <div className=" grid grid-cols-1 gap-3 relative rounded-[10px] pt-12 lg:pt-10 pr-18 lg:pr-16 pb-[20px] lg:pb-8.5 pl-5 lg:pl-7 shadow-testimonialCard  lg:w-[504px] h-[245px] ">

     <div className=" absolute size-[68px] rounded-full overflow-hidden top-0 left-0 translate-[-50%] ">
          <img src={testimonial?.img ? testimonial.img : TestimonialsCeo1 } alt="images" />
     </div>

     <div>
          <h3 className=" max-w-fit lg:max-w-[402px] text-[15px] lg:text-[18px]  text-text-crl " >{testimonial?.pragraph}</h3>
     </div>

     <div>
          <p className=" text-[17px] lg:text-[20px] font-semibold text-text-crl " > {testimonial?.name} </p>
          <p className=" text-[13px] lg:text-[15px] text-text-crl "> {testimonial?.loction} </p>
     </div>
      
    </div>
  )
}

export default TestimonialsCard
