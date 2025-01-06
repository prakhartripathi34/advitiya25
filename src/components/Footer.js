import { User, Mail, Phone, X } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import {
  TbBrandInstagramFilled,
  TbBrandTiktokFilled,
  TbBrandYoutubeFilled,
} from "react-icons/tb";

export default function Footer() {
  return (
    <div className="md:h-[185vh] relative w-full z-0 h-[120vh]">
      <div
        className="h-full w-full absolute bottom-0 shadow-2xl shadow-[#10171D] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/signin/bg4.png')" }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full gap-1 md:gap-4 font-serif">
          <section className="w-full md:h-2/5 h-1/5"></section>

          <section className="text-white text-5xl md:text-8xl font-bold font-sans z-50">TECHFEST</section>
          <section className="text-white max-w-lg md:max-w-3xl text-center text-lg md:text-xl font-sans mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</section>
          <div className="w-2/5 h-[1px] bg-gradient-to-r from-[#40EC7B00] via-[#FFFFFF] to-[#40EC7B00]"></div>

          <section className="text-white h-16 justify-center items-center text-xs md:text-sm flex font-normal"><User strokeWidth={1.75} color="white" className="md:text-sm text-xs" /> <pre>  kenzinlawson  </pre> <pre className="text-white/50 text-xs md:text-sm">|  </pre> <Mail color="white" strokeWidth={1.75} /> <pre>  kenzi.lawson@example.com  </pre>
            <pre className="text-white/50 text-xs md:text-sm hidden md:block">|  </pre> <Phone color="white" strokeWidth={1.75} className="hidden md:block text-xs md:text-sm"/> <pre className="hidden md:block text-xs md:text-sm">  +91 9855630374 </pre>
          </section>
          <section className="flex text-white text-sm">
          <Phone color="white" strokeWidth={1.75} className="block md:hidden"/> <pre className="block md:hidden">  +91 9855630374 </pre>
          </section>
          <section className="text-white h-16 justify-center items-center text-xs md:text-sm flex font-normal"><User strokeWidth={1.75} color="white" className="md:text-sm text-xs" /> <pre>  kenzinlawson  </pre> <pre className="text-white/50 text-xs md:text-sm">|  </pre> <Mail color="white" strokeWidth={1.75} /> <pre>  kenzi.lawson@example.com  </pre>
            <pre className="text-white/50 text-xs md:text-sm hidden md:block">|  </pre> <Phone color="white" strokeWidth={1.75} className="hidden md:block text-xs md:text-sm"/> <pre className="hidden md:block text-xs md:text-sm">  +91 9855630374 </pre>
          </section>
          <section className="flex text-white text-sm">
          <Phone color="white" strokeWidth={1.75} className="block md:hidden"/> <pre className="block md:hidden">  +91 9855630374 </pre>
          </section>
          <section className="max-w-6xl h-16 flex gap-3 md:gap-6 mt-12 z-10">
            <button className="md:h-16 md:w-16 md:p-5 h-12 w-12 p-3.5 text-xl rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center"><FaFacebookF color="white" fill="white" /></button>
            <button className="md:h-16 md:w-16 md:p-5 h-12 w-12 p-3.5 md:text-2xl text-xl rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center"><TbBrandInstagramFilled className="md:text-2xl text-xl" color="white" fill="white" /></button>
            <button className="md:h-16 md:w-16 md:p-5 h-12 w-12 p-3.5  text-lg md:text-xl rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center"><X color="white" fill="white" className="md:text-2xl text-xl"/></button>
            <button className="md:h-16 md:w-16 md:p-5 h-12 w-12 p-3.5 rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center"><TbBrandYoutubeFilled className="md:text-2xl text-xl" color="white" fill="white" /></button>
            <button className="md:h-16 md:w-16 md:p-5 h-12 w-12 p-3.5 rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center"><TbBrandTiktokFilled className="md:text-2xl text-xl" color="white" fill="white" /></button>
          </section>
        </div>
      </div>

      <img src="/signin/bg4br.png" alt="background image" className="pointer-events-none absolute bottom-0 right-0 md:h-auto h-1/3" />
      <img src="/signin/bg4bl.png" alt="background image" className="pointer-events-none absolute bottom-0 left-0 hidden md:block" />
      <img src="/signin/bg4line.png" alt="background image" className="pointer-events-none absolute bottom-3/4 right-0 w-1/2" />
    </div>
  );
}
