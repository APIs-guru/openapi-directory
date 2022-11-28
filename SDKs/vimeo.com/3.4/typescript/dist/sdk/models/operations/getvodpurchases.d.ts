import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetVodPurchasesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVodPurchasesFilterEnum {
    All = "all",
    ExpiringSoon = "expiring_soon",
    Film = "film",
    Important = "important",
    Purchased = "purchased",
    Rented = "rented",
    Series = "series",
    Subscription = "subscription",
    Unwatched = "unwatched",
    Watched = "watched"
}
export declare enum GetVodPurchasesSortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name",
    PurchaseTime = "purchase_time",
    Rating = "rating",
    ReleaseDate = "release_date"
}
export declare class GetVodPurchasesQueryParams extends SpeakeasyBase {
    direction?: GetVodPurchasesDirectionEnum;
    filter?: GetVodPurchasesFilterEnum;
    page?: number;
    perPage?: number;
    sort?: GetVodPurchasesSortEnum;
}
export declare class GetVodPurchasesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetVodPurchasesRequest extends SpeakeasyBase {
    queryParams: GetVodPurchasesQueryParams;
    security: GetVodPurchasesSecurity;
}
export declare class GetVodPurchasesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPages?: shared.OnDemandPage[];
}
