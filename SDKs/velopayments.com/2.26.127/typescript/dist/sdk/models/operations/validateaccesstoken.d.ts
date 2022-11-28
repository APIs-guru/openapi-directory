import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidateAccessTokenHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class ValidateAccessTokenRequest extends SpeakeasyBase {
    headers: ValidateAccessTokenHeaders;
    request: shared.AccessTokenValidationRequest;
}
export declare class ValidateAccessTokenResponse extends SpeakeasyBase {
    accessTokenResponse?: shared.AccessTokenResponse;
    contentType: string;
    statusCode: number;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
