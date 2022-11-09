import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWORKFLOWSTATISTICS_SERVERS: string[];
export declare class FetchWorkflowStatisticsPathParams extends SpeakeasyBase {
    workflowSid: string;
    workspaceSid: string;
}
export declare class FetchWorkflowStatisticsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    minutes?: number;
    splitByWaitTime?: string;
    startDate?: Date;
    taskChannel?: string;
}
export declare class FetchWorkflowStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkflowStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkflowStatisticsPathParams;
    queryParams: FetchWorkflowStatisticsQueryParams;
    security: FetchWorkflowStatisticsSecurity;
}
export declare class FetchWorkflowStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkflowWorkflowStatistics?: shared.TaskrouterV1WorkspaceWorkflowWorkflowStatistics;
}
