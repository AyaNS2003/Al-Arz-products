import data from '../../data.json'
import { useState } from 'react'
import ProductInfo from './ProductInfo'

const Single = () => {
    const [product, setProduct] = useState(null)
    
    const handleClose = () => {
        setProduct(null)
    }
    
    return (
        <div className="flex flex-col align-center justify-center px-48">
            <h1 className="text-4xl text-blue-900 text-center m-10">حصة واحدة</h1>
            <div className="flex flex-row justify-between flex-wrap">
                {
                    data.single.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex flex-col align-center justify-center cursor-pointer" 
                            onClick={() => setProduct(item)}
                        >
                            <img src={item.image} alt={item.name} className="hover:scale-125 transition-all duration-200" />
                            <h1 className="text-center text-xl text-blue-900">{item.name}</h1>
                            <p className="text-center text-blue-900">{item.flavor}</p>
                        </div>
                    ))
                }
            </div>
            {product && <ProductInfo product={product} onClose={handleClose} />}
        </div>
    );
};

export default Single;