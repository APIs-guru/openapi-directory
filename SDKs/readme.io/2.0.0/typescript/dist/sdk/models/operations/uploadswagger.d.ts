import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UploadSwaggerRequestBodySwagger extends SpeakeasyBase {
    content: Uint8Array;
    swagger: string;
}
export declare class UploadSwaggerRequestBody extends SpeakeasyBase {
    swagger?: UploadSwaggerRequestBodySwagger;
}
export declare class UploadSwaggerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UploadSwaggerRequest extends SpeakeasyBase {
    request: UploadSwaggerRequestBody;
    security: UploadSwaggerSecurity;
}
export declare class UploadSwaggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
