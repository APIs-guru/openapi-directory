import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetGroupsFilterEnum {
    Featured = "featured"
}
export declare enum GetGroupsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Relevant = "relevant",
    Videos = "videos"
}
export declare class GetGroupsQueryParams extends SpeakeasyBase {
    direction?: GetGroupsDirectionEnum;
    filter?: GetGroupsFilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetGroupsSortEnum;
}
export declare class GetGroupsRequest extends SpeakeasyBase {
    queryParams: GetGroupsQueryParams;
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    groups?: shared.Group[];
}
