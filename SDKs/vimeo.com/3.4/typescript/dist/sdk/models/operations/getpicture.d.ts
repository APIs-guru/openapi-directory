import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPicturePathParams extends SpeakeasyBase {
    portraitsetId: number;
    userId: number;
}
export declare class GetPictureRequest extends SpeakeasyBase {
    pathParams: GetPicturePathParams;
}
export declare class GetPictureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
