import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteActivityServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteActivityPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class DeleteActivitySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteActivityRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteActivityPathParams;
    security: DeleteActivitySecurity;
}
export declare class DeleteActivityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
