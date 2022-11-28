import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostMyFollowsSearchRequestBodyCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN",
    Dkk = "DKK",
    Sek = "SEK",
    Chf = "CHF",
    Ars = "ARS",
    Brl = "BRL",
    Hkd = "HKD",
    Nok = "NOK",
    Php = "PHP",
    Pln = "PLN",
    Rub = "RUB"
}
export declare enum PostMyFollowsSearchRequestBodyListingTypeEnum {
    Auctions = "auctions",
    Offers = "offers"
}
export declare class PostMyFollowsSearchRequestBody extends SpeakeasyBase {
    acceptsGiftCards?: boolean;
    acceptsPaymentPlans?: boolean;
    auctionPriceMax?: number;
    category?: string;
    conditions?: string[];
    currency?: PostMyFollowsSearchRequestBodyCurrencyEnum;
    decade?: string;
    excludeAuctions?: boolean;
    finish?: string;
    handmade?: boolean;
    itemCity?: string;
    itemCountry?: string;
    itemRegion?: string;
    itemState?: string;
    listingType?: PostMyFollowsSearchRequestBodyListingTypeEnum;
    localPickup?: boolean;
    make?: string[];
    model?: string;
    mustNot?: string;
    notIds?: number[];
    preferredSeller?: boolean;
    priceMax?: number;
    priceMin?: number;
    productType?: string;
    query?: string;
    shipsTo?: string;
    shop?: string;
    shopId?: string;
    watchersCountMin?: number;
    yearMax?: number;
    yearMin?: number;
}
export declare class PostMyFollowsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyFollowsSearchRequest extends SpeakeasyBase {
    request?: PostMyFollowsSearchRequestBody;
    security: PostMyFollowsSearchSecurity;
}
export declare class PostMyFollowsSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
