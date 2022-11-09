import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESECONDARYAUTHTOKEN_SERVERS: string[];
export declare class CreateSecondaryAuthTokenSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSecondaryAuthTokenRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: CreateSecondaryAuthTokenSecurity;
}
export declare class CreateSecondaryAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accountsV1SecondaryAuthToken?: shared.AccountsV1SecondaryAuthToken;
}
