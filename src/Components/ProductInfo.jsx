import { IoMdClose } from "react-icons/io";

const ProductInfo = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative" onClick={(e) => e.stopPropagation()} dir="rtl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-blue-900">our products</h2>
                    <button onClick={onClose} className="text-3xl text-gray-600">
                        <IoMdClose />
                    </button>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src={product.image} alt={product.name} className="w-96 h-96 object-contain" />
                    <p className="text-gray-700 text-center">{product.description}</p>
                    {product.weight && (
                        <p className="text-lg text-blue-900 font-medium">الوزن: {product.weight}</p>
                    )}
                    {product.volume && (
                        <p className="text-lg text-blue-900 font-medium">الحجم: {product.volume}</p>
                    )}
                </div>
                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">التالي</button>
            </div>
        </div>
    );
};

export default ProductInfo;