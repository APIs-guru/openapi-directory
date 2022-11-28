import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSimServerList: readonly ["https://wireless.twilio.com"];
export declare class DeleteSimPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteSimSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSimRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSimPathParams;
    security: DeleteSimSecurity;
}
export declare class DeleteSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
