import { observer } from 'mobx-react-lite';
import cartStore from '../../stores/CartStore';

export const Cart = observer(() => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartStore.items.map(item => (
          <li key={item.id}>
            {item.id}
            <button onClick={() => cartStore.removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>Total Items: {cartStore.totalItems}</div>
      <div>Total Price: ${cartStore.totalPrice.toFixed(2)}</div>
      <button onClick={() => cartStore.clearCart()}>Clear Cart</button>
    </div>
  );
});
