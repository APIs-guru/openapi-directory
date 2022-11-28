import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserGroupsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetUserGroupsAlt1FilterEnum {
    Moderated = "moderated"
}
export declare enum GetUserGroupsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Members = "members",
    Videos = "videos"
}
export declare class GetUserGroupsAlt1QueryParams extends SpeakeasyBase {
    direction?: GetUserGroupsAlt1DirectionEnum;
    filter?: GetUserGroupsAlt1FilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetUserGroupsAlt1SortEnum;
}
export declare class GetUserGroupsAlt1Request extends SpeakeasyBase {
    queryParams: GetUserGroupsAlt1QueryParams;
}
export declare class GetUserGroupsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    groups?: shared.Group[];
}
