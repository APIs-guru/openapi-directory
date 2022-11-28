import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePicturePathParams extends SpeakeasyBase {
    userId: number;
}
export declare class CreatePictureSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreatePictureRequest extends SpeakeasyBase {
    pathParams: CreatePicturePathParams;
    security: CreatePictureSecurity;
}
export declare class CreatePictureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
