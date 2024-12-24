
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

function Contactus() {
  const Arr = [
    {
      icon: <FaMapMarkerAlt className="  text-4xl text-[#DAB156]" />,
      title: "العنوان",
      dis: "البصرة الجزائر شارع سيد حامد"
   

    },
    {
      icon: <FaPhoneAlt className="text-4xl text-[#DAB156]" />,
      title: "الهاتف",
      dis: (
        <>
          <a
            href="https://wa.me/9647801744544"
            className="text-black hover:bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            07801744544
          </a>
          <br />
          <a
            href="https://wa.me/9647702714858"
            className="text-black hover:bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            07702714858
          </a>
        </>
      )
    },     
    {
      icon: <AiOutlineMail className="  text-4xl text-[#DAB156]" />,
      title: "البريد الالكتروني",
      dis: "info@basravision.iq"

    },
  ]
  return (
    <div className="font-cairo-regular">
      {/* Contact Section */}
      <div className="flex items-center  justify-center min-h-screen  mt-10 md:mt-28   ">
        <section className="w-full px-6 md:px-24     ">
          {/*Contact  */}
          <div className="flex  mb-20 md:flex-row    flex-col gap-6       ">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="   w-full rounded-3xl overflow-hidden" src="/image 118.png" alt="" />
            <div dir="rtl" className="       w-full">
              <p className="text-[#DAB156] font-medium  mb-5 text-2xl">
                لا تتردد

              </p>
              <p className=" text-black mb-6 font-medium text-3xl">في الاتصال بنا</p>
              <p>
                سوف تجدون تجاوبًا سريعًا وفعّالًا من قبل فريقنا المختص. نحن ملتزمون بتلبية توقعاتكم وتقديم الدعم الشامل، لذا لا تترددوا في الاتصال بنا لأي استفسار أو مساعدة. نحن هنا لضمان رضاكم التام وتحقيق تجربة إيجابية مع شركتنا.
              </p>
              {
                Arr.map((e, i) => {
                  return (

                    <motion.div variants={FadeUp(0.2)}
                      initial="initial"
                      whileInView={"animate"}
                      viewport={{ once: true }} key={i} className="  flex items-center gap-8 mt-8">
                      {e.icon}
                      <div  >
                        <p className=" font-medium text-2xl py-2">
                          {e.title}
                        </p>
                        <p>
                          {e.dis}
                        </p>
                      </div>

                    </motion.div>
                  )
                })
              }
            </div>
          </div>
          {/* Map */}
          <div className="w-full my-20 h-[500px] rounded-lg overflow-hidden shadow-xl relative bg-white">
            {/* Google Maps Embed */}
            <iframe
              className="w-full h-full rounded-lg border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.0306685987557!2d47.8295526!3d30.5062589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc4971cc34d81d5%3A0xaedeae577744c817!2sNaruto%20Center!5e0!3m2!1sen!2siq!4v1717945600000!5m2!1sen!2siq"
              loading="lazy"
              title="Google Map"
            />

            {/* Button to Open Location in Google Maps */}
            <a
              href="https://www.google.com/maps/place/Naruto+Center/@30.5062589,47.8295526,56m/data=!3m1!1e3!4m6!3m5!1s0x3fc4971cc34d81d5:0xaedeae577744c817!8m2!3d30.5064285!4d47.8293227!16s%2Fg%2F11nfphbyp0?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-5 bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              موقعنا
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Contactus