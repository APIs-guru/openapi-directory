import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteWorkerServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteWorkerPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class DeleteWorkerHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteWorkerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteWorkerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteWorkerPathParams;
    headers: DeleteWorkerHeaders;
    security: DeleteWorkerSecurity;
}
export declare class DeleteWorkerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
