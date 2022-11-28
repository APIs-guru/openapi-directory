import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditPicturePathParams extends SpeakeasyBase {
    portraitsetId: number;
    userId: number;
}
export declare class EditPictureRequestBody extends SpeakeasyBase {
    active?: boolean;
}
export declare class EditPictureSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditPictureRequest extends SpeakeasyBase {
    pathParams: EditPicturePathParams;
    request?: EditPictureRequestBody;
    security: EditPictureSecurity;
}
export declare class EditPictureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
