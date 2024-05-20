import { ProductCard } from "../../shared/product-card";
import productData from '../../data/products-items.json';

export const ShopItemAdditional = () => {
  const productList = productData.slice(0, 4);

    return (
      <section className="shop">
        <h2>Related Products</h2>
          <div className="shop__container">
            {productList.map((item, index) => (
                <ProductCard key={item.id || index} item={item} />
            ))}
          </div>
      </section>
    )
  }