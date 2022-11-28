import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateAccountServerList: readonly ["https://api.twilio.com"];
export declare class CreateAccountCreateAccountRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class CreateAccountSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateAccountRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateAccountCreateAccountRequest;
    security: CreateAccountSecurity;
}
export declare class CreateAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010Account?: shared.ApiV2010Account;
}
