import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodLikesPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare enum GetVodLikesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVodLikesFilterEnum {
    Extra = "extra",
    Main = "main",
    Trailer = "trailer"
}
export declare enum GetVodLikesSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetVodLikesQueryParams extends SpeakeasyBase {
    direction?: GetVodLikesDirectionEnum;
    filter?: GetVodLikesFilterEnum;
    page?: number;
    perPage?: number;
    sort?: GetVodLikesSortEnum;
}
export declare class GetVodLikesRequest extends SpeakeasyBase {
    pathParams: GetVodLikesPathParams;
    queryParams: GetVodLikesQueryParams;
}
export declare class GetVodLikesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
