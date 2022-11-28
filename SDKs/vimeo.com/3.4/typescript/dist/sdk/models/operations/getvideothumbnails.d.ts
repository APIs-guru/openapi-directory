import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoThumbnailsPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class GetVideoThumbnailsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVideoThumbnailsRequest extends SpeakeasyBase {
    pathParams: GetVideoThumbnailsPathParams;
    queryParams: GetVideoThumbnailsQueryParams;
}
export declare class GetVideoThumbnailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pictures?: shared.Picture[];
}
