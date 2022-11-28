import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideosWithTagPathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetVideosWithTagDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVideosWithTagSortEnum {
    CreatedTime = "created_time",
    Duration = "duration",
    Name = "name"
}
export declare class GetVideosWithTagQueryParams extends SpeakeasyBase {
    direction?: GetVideosWithTagDirectionEnum;
    page?: number;
    perPage?: number;
    sort?: GetVideosWithTagSortEnum;
}
export declare class GetVideosWithTagRequest extends SpeakeasyBase {
    pathParams: GetVideosWithTagPathParams;
    queryParams: GetVideosWithTagQueryParams;
}
export declare class GetVideosWithTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    videos?: shared.Video[];
}
