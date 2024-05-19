import { WhatGrowService } from "./what_grow"
import { OrganicService } from "./organic_only"

export const ServicePage = () => {
  return (
    <div className="service_page">
        <WhatGrowService/>
        <OrganicService/>
    </div>
  )
}
