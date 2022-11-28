import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserGroupsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetUserGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetUserGroupsFilterEnum {
    Moderated = "moderated"
}
export declare enum GetUserGroupsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Members = "members",
    Videos = "videos"
}
export declare class GetUserGroupsQueryParams extends SpeakeasyBase {
    direction?: GetUserGroupsDirectionEnum;
    filter?: GetUserGroupsFilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetUserGroupsSortEnum;
}
export declare class GetUserGroupsRequest extends SpeakeasyBase {
    pathParams: GetUserGroupsPathParams;
    queryParams: GetUserGroupsQueryParams;
}
export declare class GetUserGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    groups?: shared.Group[];
}
