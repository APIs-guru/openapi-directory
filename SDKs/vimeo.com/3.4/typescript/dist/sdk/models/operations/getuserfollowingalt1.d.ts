import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserFollowingAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetUserFollowingAlt1FilterEnum {
    Online = "online"
}
export declare enum GetUserFollowingAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetUserFollowingAlt1QueryParams extends SpeakeasyBase {
    direction?: GetUserFollowingAlt1DirectionEnum;
    filter?: GetUserFollowingAlt1FilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetUserFollowingAlt1SortEnum;
}
export declare class GetUserFollowingAlt1Request extends SpeakeasyBase {
    queryParams: GetUserFollowingAlt1QueryParams;
}
export declare class GetUserFollowingAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
