import { Link } from 'react-router-dom';
// import logo from '/logo.png';

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-white py-8 items-center border-t border-gray-200">
      <div className="container mx-auto px-6 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-10">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          {/* <a
            href="https://www.facebook.com/share/18FyRGGPNG/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#374350] hover:text-gray-600 transition-colors duration-300"
          >
            <FacebookOutlinedIcon fontSize="large" />
          </a> */}
          <a
            href="mailto:info@basravision.iq"
            className="text-[#374350] hover:text-gray-600 transition-colors duration-300 font-cairo-bold text-xl"
          >
            info@basravision.iq
          </a>
        </div>
     
        {/* Footer Text */}
        <div className="text-center font-cairo-regular text-lg md:text-xl  text-[#374350]">
          <p dir="rtl">
            شركة واحة الجنوب كل الحقوق محفوضة 
          </p>
        </div>
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={logo} alt="Logo" className="h-14 w-auto" /> */}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;