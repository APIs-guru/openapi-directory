import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategorySubscriptionsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetCategorySubscriptionsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetCategorySubscriptionsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name"
}
export declare class GetCategorySubscriptionsQueryParams extends SpeakeasyBase {
    direction?: GetCategorySubscriptionsDirectionEnum;
    page?: number;
    perPage?: number;
    sort?: GetCategorySubscriptionsSortEnum;
}
export declare class GetCategorySubscriptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetCategorySubscriptionsRequest extends SpeakeasyBase {
    pathParams: GetCategorySubscriptionsPathParams;
    queryParams: GetCategorySubscriptionsQueryParams;
    security: GetCategorySubscriptionsSecurity;
}
export declare class GetCategorySubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    categories?: shared.Category[];
    error?: shared.Error;
}
