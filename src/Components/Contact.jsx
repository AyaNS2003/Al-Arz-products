import { IoLocationSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaFax, FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import factoryImg from "../../assets/factory.png";

const Contact = () => {
    return (
        <div className="relative text-white flex flex-col items-center justify-center px-48 py-16 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: `url(${factoryImg})` }}>
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 30, 126, 0.85)' }}></div>
            <div className="relative z-10 w-full">
                <h1 className="text-2xl text-center m-7">تواصل معنا</h1>
                <div className="flex flex-wrap justify-center gap-10 w-full" dir="rtl">
                    <div className="flex flex-col items-center flex-1 min-w-[250px] text-center">
                        <IoLocationSharp className="text-5xl bg-yellow-500 text-white p-2 rounded-full mb-4"/>
                        <p className="text-sm">شركة الأرز للآيس كريم المحدودة</p>
                        <p className="text-sm">P.O.Box: 20</p>
                        <p className="text-sm">المنطقة الصناعية الشرقية</p>
                        <p className="text-sm">نابلس، فلسطين</p>
                    </div>
                    <div className="flex flex-col items-center flex-1 min-w-[200px] text-center">
                        <CiMail className="text-5xl bg-yellow-500 text-white p-2 rounded-full mb-4"/>
                        <p className="text-sm">info@alrez.ps</p>
                    </div>
                    <div className="flex flex-col items-center flex-1 min-w-[250px] text-center">
                        <FaPhoneAlt className="text-5xl bg-yellow-500 text-white p-2 rounded-full mb-4"/>
                        <div className="flex gap-2 items-center text-sm" dir="ltr">
                            <FaPhoneAlt className="text-xs" /> +970 9 2322777
                        </div>
                        <div className="flex gap-2 items-center text-sm" dir="ltr">
                            <FaFax className="text-xs" /> +970 9 23262222
                        </div>
                        <div className="text-xs mt-2" dir="rtl">
                            اطلب الرقم 972 بدلا من 970 عند الاتصال من الدول غير العربية
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 mt-10 justify-center items-center">
                    <a href="">
                        <FaFacebookSquare className="text-yellow-500 text-5xl hover:text-yellow-400"/>
                    </a>
                    <a href="">
                        <ImInstagram className="text-yellow-500 text-5xl hover:text-yellow-400"/>
                    </a>
                </div>
            </div>
            <div className="text-center mt-10 text-white z-50">© Al Arz</div>
        </div>
    );
};

export default Contact;
