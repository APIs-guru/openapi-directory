import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostListingsRequestBodyCategories extends SpeakeasyBase {
    uuid?: string;
}
export declare enum PostListingsRequestBodyConditionUuidEnum {
    Fbf3566896a04baaBcdeAb18d6b1b329 = "fbf35668-96a0-4baa-bcde-ab18d6b1b329",
    Sixa9dfcad600b46c89e08Ce6e5057921e = "6a9dfcad-600b-46c8-9e08-ce6e5057921e",
    NinetyEightMillionSevenHundredAndSeventySevenThousandEightHundredAndEightySix76d044c8865eBb40e669e934 = "98777886-76d0-44c8-865e-bb40e669e934",
    F7a3f48c972a44c6B01a0cd27488d3f6 = "f7a3f48c-972a-44c6-b01a-0cd27488d3f6",
    Ae4d91141bd74ec5A4ba6653af5ac84d = "ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d",
    Df268ad1C4624ba6B6dbE007e23922ea = "df268ad1-c462-4ba6-b6db-e007e23922ea",
    Ac5b9c1eDc78466dB0b37cf712967a48 = "ac5b9c1e-dc78-466d-b0b3-7cf712967a48",
    Sixdb7df88293b4017A1c1Cdb5e599fa1a = "6db7df88-293b-4017-a1c1-cdb5e599fa1a",
    NineMillionTwoHundredAndTwentyFiveThousandTwoHundredAndEightyThreef60c24413Ad181f5eba7a856f = "9225283f-60c2-4413-ad18-1f5eba7a856f",
    Sevenc3f45de2ae04c818400Fdb6b1d74890 = "7c3f45de-2ae0-4c81-8400-fdb6b1d74890"
}
/**
 * Condition
**/
export declare class PostListingsRequestBodyCondition extends SpeakeasyBase {
    uuid: PostListingsRequestBodyConditionUuidEnum;
}
export declare enum PostListingsRequestBodyExclusiveChannelEnum {
    SellerSite = "seller_site",
    Reverb = "reverb",
    None = "none"
}
export declare class PostListingsRequestBodyLocation extends SpeakeasyBase {
    countryCode?: string;
    locality?: string;
    region?: string;
}
export declare enum PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum {
    Days = "days",
    Weeks = "weeks"
}
/**
 * Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.
**/
export declare class PostListingsRequestBodyPreorderInfo extends SpeakeasyBase {
    leadTime?: number;
    leadTimeUnit: PostListingsRequestBodyPreorderInfoLeadTimeUnitEnum;
    shipDate?: string;
}
export declare enum PostListingsRequestBodyPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}
export declare class PostListingsRequestBodyPrice extends SpeakeasyBase {
    amount: string;
    currency: PostListingsRequestBodyPriceCurrencyEnum;
}
export declare class PostListingsRequestBodySeller extends SpeakeasyBase {
    paypalEmail?: string;
}
export declare enum PostListingsRequestBodyShippingRatesRateCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}
export declare class PostListingsRequestBodyShippingRatesRate extends SpeakeasyBase {
    amount: string;
    currency: PostListingsRequestBodyShippingRatesRateCurrencyEnum;
}
export declare class PostListingsRequestBodyShippingRates extends SpeakeasyBase {
    rate?: PostListingsRequestBodyShippingRatesRate;
    regionCode?: string;
}
export declare class PostListingsRequestBodyShipping extends SpeakeasyBase {
    local?: boolean;
    rates?: PostListingsRequestBodyShippingRates[];
}
export declare class PostListingsRequestBodyVideos extends SpeakeasyBase {
    link: string;
}
export declare class PostListingsRequestBody extends SpeakeasyBase {
    categories?: PostListingsRequestBodyCategories[];
    condition?: PostListingsRequestBodyCondition;
    description?: string;
    exclusiveChannel?: PostListingsRequestBodyExclusiveChannelEnum;
    finish?: string;
    hasInventory?: boolean;
    inventory?: number;
    location?: PostListingsRequestBodyLocation;
    make?: string;
    model?: string;
    multiItem?: boolean;
    offersEnabled?: boolean;
    originCountryCode?: string;
    photos?: string[];
    preorderInfo?: PostListingsRequestBodyPreorderInfo;
    price?: PostListingsRequestBodyPrice;
    prop65Warning?: string;
    publish?: boolean;
    seller?: PostListingsRequestBodySeller;
    sellerCost?: string;
    shipping?: PostListingsRequestBodyShipping;
    shippingProfileId?: string;
    shippingProfileName?: string;
    sku?: string;
    soldAsIs?: boolean;
    storageLocation?: string;
    taxExempt?: boolean;
    title?: string;
    upc?: string;
    upcDoesNotApply?: boolean;
    videos?: PostListingsRequestBodyVideos[];
    year?: string;
}
export declare class PostListingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostListingsRequest extends SpeakeasyBase {
    request?: PostListingsRequestBody;
    security: PostListingsSecurity;
}
export declare class PostListingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
