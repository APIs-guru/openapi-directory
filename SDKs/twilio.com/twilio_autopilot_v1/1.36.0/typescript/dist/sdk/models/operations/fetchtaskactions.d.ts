import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHTASKACTIONS_SERVERS: string[];
export declare class FetchTaskActionsPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class FetchTaskActionsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskActionsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskActionsPathParams;
    security: FetchTaskActionsSecurity;
}
export declare class FetchTaskActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTaskTaskActions?: shared.AutopilotV1AssistantTaskTaskActions;
}
