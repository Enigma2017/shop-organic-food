import productData from '../../data/products-items.json';
import { CommonBanner } from "../../shared/banner"
import ShopSingleBanner from "/banners/shop-single-bg.jpg"

export const ShopItem = () => {
    return(
        <div>
            <CommonBanner imgSrc={ShopSingleBanner} altText={'ShopSingleBanner'}/>
            Shop Item
        </div>
    )
}