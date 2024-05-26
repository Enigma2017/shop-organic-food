// src/stores/CartStore.js
import { makeAutoObservable } from "mobx";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
    try {
      this.items = JSON.parse(localStorage.getItem("cartItems")) || [];
      
    } catch (error) {
      return this.items = [];
    }
  }

  addItem(item, quantity = 1) {
    
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...item, quantity });
    }
    localStorage.setItem("cartItems", JSON.stringify(this.items));

  }

  removeItem(itemId) {
    const itemIndex = this.items.findIndex(i => i.id === itemId);
    if (itemIndex !== -1) {
      if (this.items[itemIndex].quantity > 1) {
        this.items[itemIndex].quantity -= 1;
      } else {
        this.items.splice(itemIndex, 1);
      }
    }
  }

  clearCart() {
    this.items = [];
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
}

const cartStore = new CartStore();
export default cartStore;
