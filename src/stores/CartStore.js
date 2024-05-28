import { makeAutoObservable } from "mobx";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
    try {
      this.items = JSON.parse(localStorage.getItem("cartItems")) || [];
    } catch (error) {
      this.items = [];
    }
  }

  addItem(item, quantity = 1) {
    const existingItem = this.items.find(i => i.id === item.id);
    console.log(quantity);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...item, quantity });
    }
    this.saveCart();
  }

  removeItem(itemId) {
    const itemIndex = this.items.findIndex(i => i.id === itemId);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
   // Сохраняем изменения после удаления
    }
    this.saveCart();
  }

  minusItem(itemId) {
    const itemIndex = this.items.findIndex(i => i.id === itemId);
    if (itemIndex !== -1) {
      if (this.items[itemIndex].quantity > 1) {
        this.items[itemIndex].quantity -= 1;
      } else {
        this.items.splice(itemIndex, 1);
      }
      this.saveCart(); // Сохраняем изменения после удаления
    }
  }

  plusItem(itemId) {
    const itemIndex = this.items.findIndex(i => i.id === itemId);
    if (itemIndex !== -1) {
      console.log(`Increasing quantity for item: ${itemId}`);
      console.log(`Current quantity: ${typeof this.items[itemIndex].quantity}`);
      this.items[itemIndex].quantity += 1;
      console.log(`New quantity: ${this.items[itemIndex].quantity}`);
    }
    this.saveCart();
  }

  clearCart() {
    this.items = [];
    this.saveCart(); // Сохраняем изменения после очистки корзины
  }

  getTotalPriceForItem(itemId) {
    const item = this.items.find(i => i.id === itemId);
    if (item) {
      return item.price.discountprice * item.quantity;
    } else {
      return 0;
    }
  }

  get totalItems() {
    return this.items.reduce((sum, item) => sum + Number(item.quantity), 0);
  }

  get uniqueItemsAmount() {
    return this.items.length;
  }

  get totalPrice() {
    return this.items.reduce((sum, item) => sum + this.getTotalPriceForItem(item.id), 0);
  }

  saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(this.items));
  }
}

const cartStore = new CartStore();
export default cartStore;

