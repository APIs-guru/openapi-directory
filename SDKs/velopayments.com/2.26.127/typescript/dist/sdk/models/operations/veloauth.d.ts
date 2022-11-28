import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VeloAuthQueryParams extends SpeakeasyBase {
    grantType?: string;
}
export declare class VeloAuthSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class VeloAuthRequest extends SpeakeasyBase {
    queryParams: VeloAuthQueryParams;
    security: VeloAuthSecurity;
}
export declare class VeloAuthResponse extends SpeakeasyBase {
    authResponse?: shared.AuthResponse;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
