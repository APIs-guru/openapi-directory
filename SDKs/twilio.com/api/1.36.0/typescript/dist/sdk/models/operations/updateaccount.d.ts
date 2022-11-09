import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEACCOUNT_SERVERS: string[];
export declare class UpdateAccountPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateAccountUpdateAccountRequest extends SpeakeasyBase {
    friendlyName?: string;
    status?: shared.AccountEnumStatusEnum;
}
export declare class UpdateAccountSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateAccountRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateAccountPathParams;
    request?: UpdateAccountUpdateAccountRequest;
    security: UpdateAccountSecurity;
}
export declare class UpdateAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010Account?: shared.ApiV2010Account;
}
