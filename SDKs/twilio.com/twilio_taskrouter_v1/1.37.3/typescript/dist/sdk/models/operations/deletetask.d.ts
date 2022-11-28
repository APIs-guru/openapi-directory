import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteTaskServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteTaskPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class DeleteTaskHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteTaskPathParams;
    headers: DeleteTaskHeaders;
    security: DeleteTaskSecurity;
}
export declare class DeleteTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
