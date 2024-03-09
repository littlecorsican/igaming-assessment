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

export const filterBySite = [
    {
        text: "Product Hunt",
        slug: "producthunt",
        type: chip_type.site,
    },
    {
        text: "Indeed",
        slug: "indeed",
        type: chip_type.site
    },
    {
        text: "Linkedin",
        slug: "linkedin",
        type: chip_type.site
    },
    {
        text: "Eventbrite",
        slug: "eventbrite",
        type: chip_type.site
    },
    {
        text: "Google",
        slug: "google",
        type: chip_type.site
    },
    {
        text: "Amazon",
        slug: "amazon",
        type: chip_type.site
    },
]

export const filterByCategory = [
    {
        text: "SEO",
        type: chip_type.category,
        slug: "seo"
    },
    {
        text: "Competitive Intelligence",
        type: chip_type.category,
        slug: "competitive-intelligence"
    },
]

export const default_chips = [
    { 
        text: "Extract Data",
        type: chip_type.textOnly,
        icon: <TfiExchangeVertical />,
        slug: "scrape",
        selected: false
    },
    { 
        text: "Monitoring",
        type: chip_type.textOnly,
        icon: <PiMonitorBold />,
        slug: "monitor",
        selected: false
    },
    {
        text: "Filter by Site",
        type: chip_type.multiFilter,
        icon: <FaPlus />,
        list: filterBySite
    },
    {
        text: "Filter by Category",
        type: chip_type.singleFilter,
        icon: <FaPlus />,
        list: filterByCategory
    },
]

