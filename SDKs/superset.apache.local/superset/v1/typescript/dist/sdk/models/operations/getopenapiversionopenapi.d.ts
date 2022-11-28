import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOpenapiVersionOpenapiPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetOpenapiVersionOpenapiSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetOpenapiVersionOpenapi404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetOpenapiVersionOpenapi500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetOpenapiVersionOpenapiRequest extends SpeakeasyBase {
    pathParams: GetOpenapiVersionOpenapiPathParams;
    security: GetOpenapiVersionOpenapiSecurity;
}
export declare class GetOpenapiVersionOpenapiResponse extends SpeakeasyBase {
    contentType: string;
    getOpenapiVersionOpenapi200ApplicationJsonObject?: Map<string, any>;
    getOpenapiVersionOpenapi404ApplicationJsonObject?: GetOpenapiVersionOpenapi404ApplicationJson;
    getOpenapiVersionOpenapi500ApplicationJsonObject?: GetOpenapiVersionOpenapi500ApplicationJson;
    statusCode: number;
}
