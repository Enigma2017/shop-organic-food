import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import cartStore from '../../stores/CartStore';
import { RatingStar } from '../../shared/rating';
import { ArrowIcon } from '../../shared/icons/arrowIcon';
import productData from '../../data/products-items.json';

export const ShopItemCard = () => {
    const buttonRef = useRef(null);
    const { id } = useParams();
    const product = productData.find((item) => item.id === id);
    const animatePlus = () => {
        const button = buttonRef.current;
        const plus = document.createElement('div');
        plus.textContent = '+';
        plus.className = 'plus-animation';
        button.appendChild(plus);

        setTimeout(() => {
            plus.classList.add('animate');
        }, 10);

        plus.addEventListener('animationend', () => {
            plus.remove();
        });
    };
    
    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const quantity = +formData.get('quantity') || 1;

        cartStore.addItem(product, quantity);
        animatePlus();
        e.target.reset();
    }

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
                        <span className='card__fullprice'>{`$${product.price.fullprice}`}</span>
                        <span className='card__discountprice'>{`$${product.price.discountprice}`}</span>
                    </div>
                    <div className='shop__item-desc'>{product.info.description}</div>
                    <form onSubmit = {submitForm}>
                        <div className='shop__item-form'>
                            <div>
                                <label>Quantity :</label>
                                <input className='shop__form-input' name='quantity' type='number' placeholder='1' min='1' max='100' />
                            </div>
                            <div>
                                <button className='shop__item-button' ref={buttonRef}>Add To Cart<span><ArrowIcon /></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}