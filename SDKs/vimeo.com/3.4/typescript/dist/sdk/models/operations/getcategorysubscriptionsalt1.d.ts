import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCategorySubscriptionsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetCategorySubscriptionsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name"
}
export declare class GetCategorySubscriptionsAlt1QueryParams extends SpeakeasyBase {
    direction?: GetCategorySubscriptionsAlt1DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: GetCategorySubscriptionsAlt1SortEnum;
}
export declare class GetCategorySubscriptionsAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetCategorySubscriptionsAlt1Request extends SpeakeasyBase {
    queryParams: GetCategorySubscriptionsAlt1QueryParams;
    security: GetCategorySubscriptionsAlt1Security;
}
export declare class GetCategorySubscriptionsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    categories?: shared.Category[];
    error?: shared.Error;
}
