import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSecondaryAuthTokenServerList: readonly ["https://accounts.twilio.com"];
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
