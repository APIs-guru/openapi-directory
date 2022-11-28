import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserFollowingPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetUserFollowingDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetUserFollowingFilterEnum {
    Online = "online"
}
export declare enum GetUserFollowingSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetUserFollowingQueryParams extends SpeakeasyBase {
    direction?: GetUserFollowingDirectionEnum;
    filter?: GetUserFollowingFilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetUserFollowingSortEnum;
}
export declare class GetUserFollowingRequest extends SpeakeasyBase {
    pathParams: GetUserFollowingPathParams;
    queryParams: GetUserFollowingQueryParams;
}
export declare class GetUserFollowingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
