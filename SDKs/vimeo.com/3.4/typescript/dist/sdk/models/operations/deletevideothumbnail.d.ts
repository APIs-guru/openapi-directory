import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoThumbnailPathParams extends SpeakeasyBase {
    pictureId: number;
    videoId: number;
}
export declare class DeleteVideoThumbnailSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoThumbnailRequest extends SpeakeasyBase {
    pathParams: DeleteVideoThumbnailPathParams;
    security: DeleteVideoThumbnailSecurity;
}
export declare class DeleteVideoThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
