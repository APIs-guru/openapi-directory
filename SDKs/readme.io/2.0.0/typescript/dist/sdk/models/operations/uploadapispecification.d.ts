import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UploadApiSpecificationHeaders extends SpeakeasyBase {
    xReadmeVersion: string;
}
export declare class UploadApiSpecificationRequestBodySpec extends SpeakeasyBase {
    content: Uint8Array;
    spec: string;
}
export declare class UploadApiSpecificationRequestBody extends SpeakeasyBase {
    spec?: UploadApiSpecificationRequestBodySpec;
}
export declare class UploadApiSpecificationSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UploadApiSpecificationRequest extends SpeakeasyBase {
    headers: UploadApiSpecificationHeaders;
    request: UploadApiSpecificationRequestBody;
    security: UploadApiSpecificationSecurity;
}
export declare class UploadApiSpecificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
