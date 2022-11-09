import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETETASK_SERVERS: string[];
export declare class DeleteTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteTaskPathParams;
    security: DeleteTaskSecurity;
}
export declare class DeleteTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
