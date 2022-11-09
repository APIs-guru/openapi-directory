import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWORKFLOWREALTIMESTATISTICS_SERVERS: string[];
export declare class FetchWorkflowRealTimeStatisticsPathParams extends SpeakeasyBase {
    workflowSid: string;
    workspaceSid: string;
}
export declare class FetchWorkflowRealTimeStatisticsQueryParams extends SpeakeasyBase {
    taskChannel?: string;
}
export declare class FetchWorkflowRealTimeStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkflowRealTimeStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkflowRealTimeStatisticsPathParams;
    queryParams: FetchWorkflowRealTimeStatisticsQueryParams;
    security: FetchWorkflowRealTimeStatisticsSecurity;
}
export declare class FetchWorkflowRealTimeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics;
}
