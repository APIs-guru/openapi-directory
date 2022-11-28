import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePicturePathParams extends SpeakeasyBase {
    portraitsetId: number;
    userId: number;
}
export declare class DeletePictureSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeletePictureRequest extends SpeakeasyBase {
    pathParams: DeletePicturePathParams;
    security: DeletePictureSecurity;
}
export declare class DeletePictureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
