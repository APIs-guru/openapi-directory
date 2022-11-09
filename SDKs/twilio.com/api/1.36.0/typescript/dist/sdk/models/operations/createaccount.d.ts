import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEACCOUNT_SERVERS: string[];
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
