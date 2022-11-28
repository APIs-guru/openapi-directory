import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditVideoThumbnailPathParams extends SpeakeasyBase {
    pictureId: number;
    videoId: number;
}
export declare class EditVideoThumbnailRequestBody extends SpeakeasyBase {
    active?: boolean;
}
export declare class EditVideoThumbnailSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditVideoThumbnailRequest extends SpeakeasyBase {
    pathParams: EditVideoThumbnailPathParams;
    request?: EditVideoThumbnailRequestBody;
    security: EditVideoThumbnailSecurity;
}
export declare class EditVideoThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
