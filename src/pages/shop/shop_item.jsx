import { ShopItemCard } from './shop_item_card';
import { ShopItemAdditional } from './shop_item_additional';
import { CommonBanner } from "../../shared/banner"
import ShopSingleBanner from "/banners/shop-single-bg.jpg"

export const ShopItem = () => {

    return(
        <div>
            <CommonBanner imgSrc={ShopSingleBanner} altText={'ShopSingleBanner'}/>
            <ShopItemCard />
            <ShopItemAdditional />
        </div>
    )
}