import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RotatePhotoPathParams extends SpeakeasyBase {
    photoId: string;
}
export declare class RotatePhotoQueryParams extends SpeakeasyBase {
    degrees: number;
    devicePixelRatio?: number;
}
export declare class RotatePhotoRequest extends SpeakeasyBase {
    pathParams: RotatePhotoPathParams;
    queryParams: RotatePhotoQueryParams;
}
export declare class RotatePhotoResponse extends SpeakeasyBase {
    contentType: string;
    photoResult?: shared.PhotoResult;
    statusCode: number;
}
