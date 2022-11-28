import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompleteStreamingUploadPathParams extends SpeakeasyBase {
    upload: number;
    userId: number;
}
export declare class CompleteStreamingUploadQueryParams extends SpeakeasyBase {
    signature: string;
    videoFileId: number;
}
export declare class CompleteStreamingUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CompleteStreamingUploadRequest extends SpeakeasyBase {
    pathParams: CompleteStreamingUploadPathParams;
    queryParams: CompleteStreamingUploadQueryParams;
    security: CompleteStreamingUploadSecurity;
}
export declare class CompleteStreamingUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
