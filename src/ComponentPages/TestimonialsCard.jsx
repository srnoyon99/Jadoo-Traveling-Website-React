import { TestimonialsCeo1, TestimonialsCeo2, TestimonialsCeo3 } from "../ImportImages/ImportImages"

const TestimonialsCard = ({testimonial}) => {
  return (
    <div className=" grid grid-cols-1 gap-3 relative rounded-[10px] pt-10 pr-16 pb-8.5 pl-7 shadow-testimonialCard  lg:w-[504px] h-[245px] ">

     <div className=" absolute size-[68px] rounded-full overflow-hidden top-0 left-0 translate-[-50%] ">
          <img src={testimonial?.img ? testimonial.img : TestimonialsCeo1 } alt="images" />
     </div>

     <div>
          <h3 className=" max-w-[402px] text-[18px]  text-text-crl " >{testimonial?.pragraph}</h3>
     </div>

     <div>
          <p className=" text-[20px] font-semibold text-text-crl " > {testimonial?.name} </p>
          <p className=" text-[15px] text-text-crl "> {testimonial?.loction} </p>
     </div>
      
    </div>
  )
}

export default TestimonialsCard
