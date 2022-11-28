import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthTokenRequest extends SpeakeasyBase {
    request?: shared.TokenRequest;
}
export declare class AuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tokenResponse?: shared.TokenResponse;
}
