
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * - Header
 *  --logo
 *  --Nav items.
 */
//--------- app name: FOODIX ----------
//---------------header --------------
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
//--------- Body --------- -

const stylecolor = {}
// const ResturantCard = (props) => {
//destructure on fly------->
const ResturantCard = (props) => {
    // console.log(props);
    //props is now a js object
    const { resData } = props
    //Destructuring the code for better n clean code
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "pink", }}>
            <img className="res-logo"
                alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3> {name} </h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4> {costForTwo} </h4>
            <h4> {avgRating} rating </h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}
const resList = [
    {
        "info": {
            "id": "722841",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Viraj Khand",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "61955",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-04 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹169"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-c9b48b37-f6b7-46c6-b364-a83883937747"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chinese-wok-viraj-khand-gomti-nagar-lucknow-722841",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "126280",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "y7ovuizmflfatfpozsgm",
            "locality": "Riverside Mall",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "10804",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-03 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-c9b48b37-f6b7-46c6-b364-a83883937747"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-riverside-mall-gomti-nagar-lucknow-126280",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "579633",
            "name": "Wow! Momo",
            "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
            "locality": "Vibhuti Khand",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "1776",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-04 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Chinese.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-c9b48b37-f6b7-46c6-b364-a83883937747"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-vibhuti-khand-gomti-nagar-lucknow-579633",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "625181",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Ahmad Kidwai Nagar",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.3,
            "parentId": "721",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-04 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-c9b48b37-f6b7-46c6-b364-a83883937747"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-ahmad-kidwai-nagar-gomti-nagar-lucknow-625181",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "59253",
            "name": "The Manish Eating Point",
            "cloudinaryImageId": "h5hlchpdzdjqf6yvtshq",
            "locality": "Viram Khand",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "Chinese",
                "Mughlai",
                "Thalis",
                "Continental",
                "Tandoor",
                "Kebabs",
                "Desserts",
                "North Indian"
            ],
            "avgRating": 4.2,
            "parentId": "211220",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-03 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-c9b48b37-f6b7-46c6-b364-a83883937747"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-manish-eating-point-viram-khand-gomti-nagar-lucknow-59253",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "65396",
            "name": "Neelkanth Green",
            "cloudinaryImageId": "smxvzr5zsorzfhe2somr",
            "locality": "Gomti Nagar",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Chinese",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "314633",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-03 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-c9b48b37-f6b7-46c6-b364-a83883937747"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/neelkanth-green-gomti-nagar-lucknow-65396",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "162345",
            "name": "Raj Bhojnalya & Fast Food Center",
            "cloudinaryImageId": "icusi1mwtfq4rffn7dls",
            "locality": "Gomti Nagar",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "South Indian",
                "Chinese"
            ],
            "avgRating": 4.4,
            "parentId": "471661",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-04 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-c9b48b37-f6b7-46c6-b364-a83883937747"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/raj-bhojnalya-and-fast-food-center-gomti-nagar-lucknow-162345",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "110440",
            "name": "Billu Tandooria",
            "cloudinaryImageId": "xcd4oi7iqnitnb5oycjg",
            "locality": "Ashiyana",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Mughlai",
                "Indian"
            ],
            "avgRating": 4.4,
            "parentId": "7843",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-03 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹700",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-c9b48b37-f6b7-46c6-b364-a83883937747"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/billu-tandooria-ashiyana-gomti-nagar-lucknow-110440",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "860312",
            "name": "Khadak Singh Da Dhaba",
            "cloudinaryImageId": "4af4938efe3128c09a0bda39c23bf3fb",
            "locality": "Sant Birbal Das Chauraha",
            "areaName": "Indira Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Mughlai"
            ],
            "avgRating": 4.6,
            "parentId": "13170",
            "avgRatingString": "4.6",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 5.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-04 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-c9b48b37-f6b7-46c6-b364-a83883937747"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/khadak-singh-da-dhaba-sant-birbal-das-chauraha-indira-nagar-lucknow-860312",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];


const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
                {/* //Resturent card
                before map we where using 
                <  ResturantCard resData={resList[0]}  />
                 */}

                {/* map the data */}

                {
                    resList.map(res => <ResturantCard resData={res} />)
                }
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);