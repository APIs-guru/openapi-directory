import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyListingsDraftsQueryParams extends SpeakeasyBase {
    acceptsGiftCards?: boolean;
    acceptsPaymentPlans?: boolean;
    auctionPriceMax?: number;
    category?: string;
    conditions?: string[];
    currency?: string;
    decade?: string;
    excludeAuctions?: boolean;
    finish?: string;
    handmade?: boolean;
    itemCity?: string;
    itemCountry?: string;
    itemRegion?: string;
    itemState?: string;
    listingType?: string;
    localPickup?: boolean;
    make?: string[];
    model?: string;
    mustNot?: string;
    notIds?: string[];
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
export declare class GetMyListingsDraftsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyListingsDraftsRequest extends SpeakeasyBase {
    queryParams: GetMyListingsDraftsQueryParams;
    security: GetMyListingsDraftsSecurity;
}
export declare class GetMyListingsDraftsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
