import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVideoThumbnailPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class CreateVideoThumbnailRequestBody extends SpeakeasyBase {
    active?: boolean;
    time?: number;
}
export declare class CreateVideoThumbnailSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateVideoThumbnailRequest extends SpeakeasyBase {
    pathParams: CreateVideoThumbnailPathParams;
    request?: CreateVideoThumbnailRequestBody;
    security: CreateVideoThumbnailSecurity;
}
export declare class CreateVideoThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
