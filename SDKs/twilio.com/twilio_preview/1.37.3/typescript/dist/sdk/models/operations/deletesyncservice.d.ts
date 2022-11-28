import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSyncServiceServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteSyncServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncServicePathParams;
    security: DeleteSyncServiceSecurity;
}
export declare class DeleteSyncServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
