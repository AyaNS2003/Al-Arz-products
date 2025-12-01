import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 px-48 h-24" dir="rtl">
            <div>
                <img src="../assets/logo.png" alt="" />
            </div>
            <div>
                <ul className="flex gap-5 items-center">
                    <li className="text-md text-blue-900 hover:text-yellow-500 cursor-pointer">الرئيسية</li>
                    <li>
                        <select className="text-md text-blue-900 hover:text-yellow-500 hover:bg-blue-900 bg-transparent border-none outline-none cursor-pointer">
                            <option>من نحن</option>
                            <option>قصتنا</option>
                            <option>الصحة والجودة</option>
                            <option>الموزعين</option>
                            <option>الشهادات</option>
                        </select>
                    </li>
                    <li>
                        <select className="text-md text-blue-900 hover:text-yellow-500 hover:bg-blue-900 bg-transparent border-none outline-none cursor-pointer">
                            <option>منتجاتنا</option>
                            <option>حصة واحدة</option>
                            <option>عبوات عائلية</option>
                            <option>عبوات للمناسبات</option>
                        </select>
                    </li>
                    <li className="text-md text-blue-900 hover:text-yellow-500 cursor-pointer">الأخبار</li>
                    <li className="text-md text-blue-900 hover:text-yellow-500 cursor-pointer">اتصل بنا</li>
                </ul>
            </div>
            <div className="flex gap-5">
                <button><FaFacebook className="text-4xl ml-5 text-blue-800 border-blue-800 rounded-full hover:text-white hover:bg-blue-800 hover:p-1 hover:border-white hover:border-2 hover:rounded-full hover:cursor-pointer"/></button>
                <button><ImInstagram className="text-4xl ml-5 text-red-600 hover:text-white hover:bg-red-600 hover:p-1 hover:border-white hover:border-2 hover:rounded-full hover:cursor-pointer"/></button>
                <button><a href="" className="text-md text-blue-900 hover:underline cursor-pointer">English</a></button>
            </div>
        </div>
    );
};

export default Navbar;