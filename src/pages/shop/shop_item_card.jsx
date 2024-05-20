import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RatingStar } from '../../shared/rating';
import { ArrowIcon } from '../../shared/icons/arrowIcon';
import productData from '../../data/products-items.json';

export const ShopItemCard = () => {
    const [activeContent, setActiveContent] = useState('info.info');
    const addInfo = 'We have good discounts for regular customers!';

    const { id } = useParams();
    const product = productData.find((item) => item.id === id);

    const describeInfo = () => {
        setActiveContent('info.info');
    };

    const additionalInfo = () => {
        setActiveContent(addInfo);
    };

    const toggleContent = () => {
        if (activeContent === 'info.info') {
            return <div className='shop__item_desc-info'>
                        <p className='shop__item_desc-title'>{product.item.name}</p>
                        <p className='shop__item_desc-text'>{product.info.info}</p>
                    </div>;
        } else if (activeContent === addInfo) {
            return <p className='shop__item_add-info'>{addInfo}</p>;
        }
    };

    return(
        <div className='shop__items'>
            <div className='shop__items-container'>
                <div className='shop__items-block1' style={{backgroundImage: `url(${product['image-card'].src})`}}>
                    <label>{product.item.type}</label>
                </div>
                <div className='shop__items-block2'>
                    <p className='shop__items-title'>{product.item.name}</p>
                    <p><RatingStar length={5} count={product.item.rating} /></p>
                    <div className='card__panel-price'>
                        <span className='card__fullprice'>{product.price.fullprice}</span>
                        <span className='card__discountprice'>{product.price.discountprice}</span>
                    </div>
                    <div className='shop__item-desc'>{product.info.description}</div>
                    <form>
                        <div className='shop__item-form'>
                            <div>
                                <label>Quantity :</label>
                                <input className='shop__form-input' type='number' placeholder='1' min='1' max='100' />
                            </div>
                            <div>
                                <button className='shop__item-button'>Add To Cart<span><ArrowIcon /></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='shop__item-info'>
                <div>
                    <button className='shop__item_info-btn1' onClick={describeInfo}>Product Description</button>
                    <button className='shop__item_info-btn2' onClick={additionalInfo}>Additional Info</button>
                </div>
                <div>{toggleContent()}</div>
            </div>
        </div>
        
    )
}