import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetProfileImageRequestBodyPhoto extends SpeakeasyBase {
    content: Uint8Array;
    photo: string;
}
export declare class SetProfileImageRequestBody extends SpeakeasyBase {
    crop?: string;
    devicePixelRatio?: number;
    photo?: SetProfileImageRequestBodyPhoto;
    photoId?: string;
    setDefault?: number;
}
export declare class SetProfileImage200ApplicationJson extends SpeakeasyBase {
    photo?: shared.PhotoResult;
    user?: shared.CurrentUser;
}
export declare class SetProfileImageRequest extends SpeakeasyBase {
    request?: SetProfileImageRequestBody;
}
export declare class SetProfileImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setProfileImage200ApplicationJsonObject?: SetProfileImage200ApplicationJson;
}
