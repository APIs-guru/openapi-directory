import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESECONDARYAUTHTOKEN_SERVERS: string[];
export declare class DeleteSecondaryAuthTokenSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSecondaryAuthTokenRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: DeleteSecondaryAuthTokenSecurity;
}
export declare class DeleteSecondaryAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
