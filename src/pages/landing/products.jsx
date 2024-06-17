import { useState } from 'react';
import { FruitLoader } from '../../shared/fruitLoader';
import { ProductCard } from '../../shared/product-card';
import productData from '../../data/products-items.json';
import { ArrowIcon } from '../../shared/icons/arrowIcon';

export const ProductsLanding = () => {
    const [visibleItems, setVisibleItems] = useState(8); 
    const [isShowLoader, setIsShowLoader] = useState(false);
    const productList = productData.slice(0, visibleItems); 

    const showMoreItems = () => {
      setIsShowLoader(true); 
      setTimeout (() => {
        setIsShowLoader(false);
        setVisibleItems(prevVisibleItems => prevVisibleItems + 8);
      }, 1500);
    };

    return (
        <div className='products'>
          <p className='products__uptitle'>Categories</p>
          <h2>Our Products</h2>
          <div className='products__container'>
            {productList.map((item, index) => (
                <ProductCard key={item.id || index} item={item} />
            ))}
          </div>
          {(visibleItems < productData.length) && !isShowLoader && (  
              <button className='products__button' onClick={showMoreItems}>Load more <span><ArrowIcon /></span></button>
            )}
            {isShowLoader && <FruitLoader />}
        </div>
    );
  }