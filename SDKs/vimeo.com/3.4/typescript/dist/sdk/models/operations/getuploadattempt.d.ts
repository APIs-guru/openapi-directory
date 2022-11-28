import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUploadAttemptPathParams extends SpeakeasyBase {
    upload: number;
    userId: number;
}
export declare class GetUploadAttemptSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetUploadAttemptRequest extends SpeakeasyBase {
    pathParams: GetUploadAttemptPathParams;
    security: GetUploadAttemptSecurity;
}
export declare class GetUploadAttemptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadAttempt?: shared.UploadAttempt;
}
