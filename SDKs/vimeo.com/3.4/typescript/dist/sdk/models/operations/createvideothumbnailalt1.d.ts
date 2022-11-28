import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVideoThumbnailAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare class CreateVideoThumbnailAlt1RequestBody extends SpeakeasyBase {
    active?: boolean;
    time?: number;
}
export declare class CreateVideoThumbnailAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateVideoThumbnailAlt1Request extends SpeakeasyBase {
    pathParams: CreateVideoThumbnailAlt1PathParams;
    request?: CreateVideoThumbnailAlt1RequestBody;
    security: CreateVideoThumbnailAlt1Security;
}
export declare class CreateVideoThumbnailAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
