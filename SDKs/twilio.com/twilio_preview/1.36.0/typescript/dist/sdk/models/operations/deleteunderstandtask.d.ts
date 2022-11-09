import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEUNDERSTANDTASK_SERVERS: string[];
export declare class DeleteUnderstandTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteUnderstandTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandTaskPathParams;
    security: DeleteUnderstandTaskSecurity;
}
export declare class DeleteUnderstandTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
