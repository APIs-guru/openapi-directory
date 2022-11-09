import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateSwaggerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateSwaggerRequestBodySwagger extends SpeakeasyBase {
    content: Uint8Array;
    swagger: string;
}
export declare class UpdateSwaggerRequestBody extends SpeakeasyBase {
    swagger?: UpdateSwaggerRequestBodySwagger;
}
export declare class UpdateSwaggerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UpdateSwaggerRequest extends SpeakeasyBase {
    pathParams: UpdateSwaggerPathParams;
    request: UpdateSwaggerRequestBody;
    security: UpdateSwaggerSecurity;
}
export declare class UpdateSwaggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
