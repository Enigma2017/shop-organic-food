import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import cartStore from '../../stores/CartStore';

export const Cart = observer(() => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    cartStore.clearCart()
  };

  if (isSubmitted) {
    return (
      <section className='cart'>
        <div className='cart-container'>
          <h3>Thank you for your order!</h3>
          <p className='cart__message'>You will receive an email confirmation shortly.</p>
        </div>
      </section>
    );
  } else {
      return (
        <section className='cart'>
          <div className='cart-container'>
            <h2 className='products__uptitle'>Shopping Cart</h2>
            <ul className='cart-item__list'>
              {cartStore.items.map(item => (
                <li className='cart-item__item' key={item.id}>
                  <img src={item['image-card'].src} alt={item['image-card'].alt} />
                  <button className='cart-item__remove' onClick={() => cartStore.removeItem(item.id)}>X</button>
                  <div className='cart-item__calc'>
                    <div className='cart-item__quant'>
                      <button className='cart-item__plus' onClick={() => cartStore.plusItem(item.id)}>+</button>
                      <span className='cart-item__quantity'>{item.quantity}</span>
                      <button className='cart-item__minus' onClick={() => cartStore.minusItem(item.id)}>-</button>
                    </div>
                    <div className='cart-item__price'>
                      <span>x</span>
                      <span>{`$${item.price.discountprice}`}</span>
                    </div>
                    <div className='cart-item__devide'></div>    
                    <p className='cart-item__total'>{`$${cartStore.getTotalPriceForItem(item.id)}`}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className='cart-total__items'>Total Items: {cartStore.totalItems}</div>
            <div className='cart-total__price'>Total Price: {`$${cartStore.totalPrice}`}</div>
            <div></div>
            <button className='cart-total__btn' onClick={() => handleSubmit()}>Confirmation</button>
          </div>
        </section>
      );
  }
});
