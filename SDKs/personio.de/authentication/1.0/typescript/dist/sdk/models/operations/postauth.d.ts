import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAuthQueryParams extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
}
export declare class PostAuthRequest extends SpeakeasyBase {
    queryParams: PostAuthQueryParams;
}
export declare class PostAuthResponse extends SpeakeasyBase {
    authenticationTokenResponse?: shared.AuthenticationTokenResponse;
    contentType: string;
    statusCode: number;
}
