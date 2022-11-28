import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFollowersPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetFollowersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetFollowersSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetFollowersQueryParams extends SpeakeasyBase {
    direction?: GetFollowersDirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetFollowersSortEnum;
}
export declare class GetFollowersRequest extends SpeakeasyBase {
    pathParams: GetFollowersPathParams;
    queryParams: GetFollowersQueryParams;
}
export declare class GetFollowersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
