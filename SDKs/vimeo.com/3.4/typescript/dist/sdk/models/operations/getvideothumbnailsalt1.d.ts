import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoThumbnailsAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare class GetVideoThumbnailsAlt1QueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVideoThumbnailsAlt1Request extends SpeakeasyBase {
    pathParams: GetVideoThumbnailsAlt1PathParams;
    queryParams: GetVideoThumbnailsAlt1QueryParams;
}
export declare class GetVideoThumbnailsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pictures?: shared.Picture[];
}
