import { motion } from "framer-motion";
import BannerPng from "/basraservis.jpeg";
import { FaLaptopCode, FaHeadset, FaBuilding, FaNetworkWired, FaSmile, FaUsers } from 'react-icons/fa';
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";

const About = () => {
  const servicesData = [
    {
      image: BannerPng,
      title: "استيراد الفحم المخصص للشواء",
      description: "استيراد الفحم المخصص للشواء وتقديم استشارات فنية متخصصة في مشاريع الري ",
      icon: <FaLaptopCode size={40} />,
    },
    {
      image: BannerPng,
      title: "التركيب والصيانة",
      description: "تركيب وصيانة منظومات الري بالتنقيط و إنشاء محطات تحلية المياه  ",
      icon: <FaHeadset size={40} />,
    },
    {
      image: BannerPng,
      title: "توفير كافة الملحقات والاحتياجات",
      description: "توفير كافة ملحقات التوصيل من عواكس، صمامات، ومقسمات.",
      icon: <FaBuilding size={40} />,
    },
    {
      image: BannerPng,
      title: "استيراد الانابيب بانواعها",
      description: "استيراد وتوريد أنابيب بلاستيكية بأنواعها المختلفة (PE, PVC, PPR).",
      icon: <FaNetworkWired size={40} />,
    },
  ];
 
  return (
    <div className="bg-white text-gray-800 mt-16 font-cairo-regular">
      {/* About Us Section */}
      <div className="container mx-auto px-4 py-16 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          dir="rtl"
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl font-cairo-regular text-orange-600 mb-4">من نحن</h1>
          <p className="text-gray-700 leading-relaxed mb-4 font-cairo-regular">
      تأسست شركة وطن الجنوب للتجارة العامة لتكون واحدة من الشركات الرائدة في مجال استيراد المواد الزراعية عالية الجودة. ونختص في

              </p>

          {/* Core Values */}
          <div className="space-y-3 font-cairo-regular">
            {[
             "بتوفير مجموعة واسعة من الأنابيب البلاستيكية: بجميع أحجامها وأنواعها، بما في ذلك أنابيب البولي إيثيلين (PE)، الـ PVC، والـ PPR، بالإضافة إلى كافة ملحقات التوصيل مثل العواكس، الصمامات، المقسمات.",
           "كما نوفر البلاستيك الزراعي: الغاطسات الكهربائية، المضخات الكهربائية، ومضخات المياه التي تعمل بالبنزين والديزل. نتميز أيضًا بتقديم منظومات الري بالتنقيط والفلاتر الخاصة بتصفية المياه، وإنشاء محطات تحلية المياه بتقنية (R.O).",
             "إضافةً إلى ذلك، نستورد الفحم المخصص للشواء بجودة عالية، لنوفر لعملائنا حلولًا متكاملة تلبي احتياجاتهم بكفاءة وموثوقية.",
             "في وطن الجنوب، نضع رضا عملائنا في مقدمة أولوياتنا ونسعى دائمًا لتقديم منتجات مبتكرة تساهم في تعزيز الإنتاجية وتحقيق الاستدامة الزراعية",
            ].map((value, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckIcon className="text-orange-600" />
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={BannerPng}
            alt="About Us"
            className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">إنجازاتنا الرقمية</h2>
            <p className="text-black  max-w-2xl mx-auto font-cairo-regular">
              نفخر بتقديم خدمات تكنولوجية متميزة ودعم فني شامل للمؤسسات الحكومية والخاصة
            </p>
          </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-16 font-cairo-regular">
            {[
              {
                value: "500+",
                label: "مشروع   منجز",
                icon: <FaLaptopCode className="mx-auto text-4xl text-blue-400 mb-3" />
              },
              {
                value: "95%",
                label: "رضا العملاء",
                icon: <FaSmile className="mx-auto text-4xl text-green-400 mb-3" />
              },
              {
                value: "24/7",
                label: "دعم فني متواصل",
                icon: <FaHeadset className="mx-auto text-4xl text-red-400 mb-3" />
              },
              {
                value: "50+",
                label: "مهندس وفني متخصص",
                icon: <FaUsers className="mx-auto text-4xl text-purple-400 mb-3" />
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#2C3E50] p-6 rounded-xl transition-transform hover:scale-105 hover:shadow-xl"
              >
                {stat.icon}
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>

       












 





      {/* Services Section */}
      <div className=" px-14 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">خدماتنا المتميزة</h2>
          <p className="text-gray-600 max-w-2xl font-cairo-regular mx-auto">
            نقدم مجموعة متكاملة من الخدمات المصممة لتلبية احتياجات عملائنا بأعلى معايير الجودة والابتكار
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="mb-4 flex justify-center text-orange-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-cairo-regular mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 font-cairo-regular mb-4">{service.description}</p>
              <Link
                to="#"
                className="text-orange-500 hover:text-orange-600 transition-colors flex items-center justify-center"
              >
                المزيد من التفاصيل
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default About;