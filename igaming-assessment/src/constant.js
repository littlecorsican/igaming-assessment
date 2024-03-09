import { TfiExchangeVertical } from "react-icons/tfi";
import { PiMonitorBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";

export const chip_type = {
    textOnly: "text-only",
    singleFilter: "single-filter",
    multiFilter: "multi-filter",
    site: "site",
    category: "category",
}

// export const filterBySite = [
//     "Product Hunt",
//     "Indeed",
//     "Linkedin",
//     "Eventbrite"
// ]

export const filterBySite = [
    {
        text: "Product Hunt",
        type: chip_type.site
    },
    {
        text: "Indeed",
        type: chip_type.site
    },
    {
        text: "Linkedin",
        type: chip_type.site
    },
    {
        text: "Eventbrite",
        type: chip_type.site
    },
]

export const filterByCategory = [
    {
        text: "SEO",
        type: chip_type.category,
    },
    {
        text: "Competitive Intelligence",
        type: chip_type.category
    },
]

// export const filterByCategory = [
//     "SEO",
//     "Competitive Intelligence"
// ]


export const chips = [
    { 
        text: "Extract Data",
        type: chip_type.textOnly,
        icon: <TfiExchangeVertical />
    },
    { 
        text: "Monitoring",
        type: chip_type.textOnly,
        icon: <PiMonitorBold />
    },
    {
        text: "Filter by Site",
        type: chip_type.singleFilter,
        icon: <FaPlus />,
        list: filterBySite
    },
    {
        text: "Filter by Category",
        type: chip_type.multiFilter,
        icon: <FaPlus />,
        list: filterByCategory
    },
]

