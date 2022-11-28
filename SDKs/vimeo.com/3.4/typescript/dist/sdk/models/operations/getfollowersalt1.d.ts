import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFollowersAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetFollowersAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetFollowersAlt1QueryParams extends SpeakeasyBase {
    direction?: GetFollowersAlt1DirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetFollowersAlt1SortEnum;
}
export declare class GetFollowersAlt1Request extends SpeakeasyBase {
    queryParams: GetFollowersAlt1QueryParams;
}
export declare class GetFollowersAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
