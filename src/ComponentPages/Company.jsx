
import { Company1, Company2, Company3, Company4, Company5 } from "../ImportImages/ImportImages"
import CompanyImage from "./CompanyImage"

const Company = () => {
  return (
    <div className="container mt-[140px] mb-[124px]">
     <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
    <a href="http://www.axonaviation.com/"> <CompanyImage src={Company1} /> </a>
    <a href="https://www.jetstar.com/au/en/home?adults=1&flight-type=2&origin=MEL"> <CompanyImage src={Company2} /> </a>
    <a href="https://www.expedia.com/?locale=en_US&siteid=1&semcid=US.B.GOOGLE.BT-c-EN.GT&semdtl=a118255096950.b1143063384553.g1kwd-12670071.e1c.m1Cj0KCQjwrc7GBhCfARIsAHGcW5Vi9FUU4o_ON9GNhsvDsh5wk_rycIlsrY1Z4qYRej8EkQWhpeX8asQaAkRlEALw_wcB.r186c5ceb1813f82e09a3d77e1d04605e5d07dc63d3419b29b7e84c18818d0c03e.c1.j11001441.k1.d1720994358040.h1e.i1.l1.n1.o1.p1.q1.s1expedia.t1.x1.f1.u1.v1.w1&gad_source=1&gad_campaignid=18255096950&gbraid=0AAAAACTxZ9bW28U8Bw9WmrCVz3fWuejSs&gclid=Cj0KCQjwrc7GBhCfARIsAHGcW5Vi9FUU4o_ON9GNhsvDsh5wk_rycIlsrY1Z4qYRej8EkQWhpeX8asQaAkRlEALw_wcB"> <CompanyImage src={Company3} /> </a>
    <a href="https://www.qantas.com/au/en.html"> <CompanyImage src={Company4} /> </a>
    <a href="https://www.ita-airways.com/en_en"> <CompanyImage src={Company5} /> </a>
     </div>
    </div>
  )
}


export default Company