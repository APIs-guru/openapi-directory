import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchUsersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum SearchUsersSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Relevant = "relevant",
    Videos = "videos"
}
export declare class SearchUsersQueryParams extends SpeakeasyBase {
    direction?: SearchUsersDirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: SearchUsersSortEnum;
}
export declare class SearchUsersRequest extends SpeakeasyBase {
    queryParams: SearchUsersQueryParams;
}
export declare class SearchUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    users?: shared.User[];
}
