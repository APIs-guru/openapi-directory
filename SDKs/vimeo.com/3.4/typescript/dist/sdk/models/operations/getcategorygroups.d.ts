import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoryGroupsPathParams extends SpeakeasyBase {
    category: string;
}
export declare enum GetCategoryGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetCategoryGroupsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Members = "members",
    Videos = "videos"
}
export declare class GetCategoryGroupsQueryParams extends SpeakeasyBase {
    direction?: GetCategoryGroupsDirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetCategoryGroupsSortEnum;
}
export declare class GetCategoryGroupsRequest extends SpeakeasyBase {
    pathParams: GetCategoryGroupsPathParams;
    queryParams: GetCategoryGroupsQueryParams;
}
export declare class GetCategoryGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    groups?: shared.Group[];
    legacyError?: shared.LegacyError;
}
