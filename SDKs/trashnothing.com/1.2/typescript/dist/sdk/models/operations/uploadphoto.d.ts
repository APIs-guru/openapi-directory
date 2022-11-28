import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadPhotoRequestBodyPhoto extends SpeakeasyBase {
    content: Uint8Array;
    photo: string;
}
export declare class UploadPhotoRequestBody extends SpeakeasyBase {
    devicePixelRatio?: number;
    photo: UploadPhotoRequestBodyPhoto;
}
export declare class UploadPhotoRequest extends SpeakeasyBase {
    request: UploadPhotoRequestBody;
}
export declare class UploadPhotoResponse extends SpeakeasyBase {
    contentType: string;
    photoResult?: shared.PhotoResult;
    statusCode: number;
}
