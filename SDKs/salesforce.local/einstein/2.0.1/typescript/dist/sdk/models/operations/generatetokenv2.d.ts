import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GenerateTokenV2RequestBodyGrantTypeEnum {
    UrnIetfParamsOauthGrantTypeJwtBearer = "urn:ietf:params:oauth:grant-type:jwt-bearer",
    RefreshToken = "refresh_token"
}
export declare class GenerateTokenV2RequestBody extends SpeakeasyBase {
    assertion?: string;
    grantType?: GenerateTokenV2RequestBodyGrantTypeEnum;
    refreshToken?: string;
    scope?: string;
    validFor?: number;
}
export declare class GenerateTokenV2Request extends SpeakeasyBase {
    request?: GenerateTokenV2RequestBody;
}
export declare class GenerateTokenV2Response extends SpeakeasyBase {
    contentType: string;
    generateAccessTokenResponse?: shared.GenerateAccessTokenResponse;
    statusCode: number;
}
