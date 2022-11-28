import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRelatedVideosPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare enum GetRelatedVideosFilterEnum {
    Related = "related"
}
export declare class GetRelatedVideosQueryParams extends SpeakeasyBase {
    filter?: GetRelatedVideosFilterEnum;
    page?: number;
    perPage?: number;
}
export declare class GetRelatedVideosRequest extends SpeakeasyBase {
    pathParams: GetRelatedVideosPathParams;
    queryParams: GetRelatedVideosQueryParams;
}
export declare class GetRelatedVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    videos?: shared.Video[];
}
