import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetListingsAllQueryParams extends SpeakeasyBase {
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
    offset?: number;
    page?: number;
    perPage?: number;
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
export declare class GetListingsAllRequest extends SpeakeasyBase {
    queryParams: GetListingsAllQueryParams;
}
export declare class GetListingsAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
