import { observer } from 'mobx-react-lite';
import cartStore from '../../stores/CartStore';

export const Cart = observer(() => {
  return (
    <section className='cart'>
      <div className='cart-container'>
        <h2>Shopping Cart</h2>
        <ul>
          {cartStore.items.map(item => (
            <li key={item.id}>
              <img src={item['image-card'].src} alt={item['image-card'].alt} />
              <span>{item.quantity}</span>
              <span>x</span>
              <span>{`$${item.price.discountprice}`}</span>
              <span>=</span>

              <span>{`$${cartStore.getTotalPriceForItem(item.id)}`}</span>
              <button onClick={() => cartStore.plusItem(item.id)}>+</button>
              <button onClick={() => cartStore.removeItem(item.id)}>-</button>
            </li>
          ))}
        </ul>
        <div>Total Items: {cartStore.totalItems}</div>
        <div>Total Price: {`$${cartStore.totalPrice}`}</div>
        <div></div>
        <button onClick={() => cartStore.clearCart()}>Clear Cart</button>
      </div>
    </section>
  );
});
