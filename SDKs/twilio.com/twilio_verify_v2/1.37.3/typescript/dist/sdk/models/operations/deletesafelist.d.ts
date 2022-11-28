import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSafelistServerList: readonly ["https://verify.twilio.com"];
export declare class DeleteSafelistPathParams extends SpeakeasyBase {
    phoneNumber: string;
}
export declare class DeleteSafelistSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSafelistRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSafelistPathParams;
    security: DeleteSafelistSecurity;
}
export declare class DeleteSafelistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
