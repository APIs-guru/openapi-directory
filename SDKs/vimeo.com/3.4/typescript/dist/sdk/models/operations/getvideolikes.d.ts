import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoLikesPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare enum GetVideoLikesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVideoLikesSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetVideoLikesQueryParams extends SpeakeasyBase {
    direction?: GetVideoLikesDirectionEnum;
    page?: number;
    perPage?: number;
    sort?: GetVideoLikesSortEnum;
}
export declare class GetVideoLikesRequest extends SpeakeasyBase {
    pathParams: GetVideoLikesPathParams;
    queryParams: GetVideoLikesQueryParams;
}
export declare class GetVideoLikesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
