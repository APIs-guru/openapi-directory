import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSecurityCsrfTokenSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetSecurityCsrfToken200ApplicationJson extends SpeakeasyBase {
    result?: string;
}
export declare class GetSecurityCsrfToken401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSecurityCsrfToken500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSecurityCsrfTokenRequest extends SpeakeasyBase {
    security: GetSecurityCsrfTokenSecurity;
}
export declare class GetSecurityCsrfTokenResponse extends SpeakeasyBase {
    contentType: string;
    getSecurityCsrfToken200ApplicationJsonObject?: GetSecurityCsrfToken200ApplicationJson;
    getSecurityCsrfToken401ApplicationJsonObject?: GetSecurityCsrfToken401ApplicationJson;
    getSecurityCsrfToken500ApplicationJsonObject?: GetSecurityCsrfToken500ApplicationJson;
    statusCode: number;
}
