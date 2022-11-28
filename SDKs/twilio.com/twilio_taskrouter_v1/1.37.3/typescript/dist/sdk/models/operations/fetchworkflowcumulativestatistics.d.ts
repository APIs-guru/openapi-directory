import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWorkflowCumulativeStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkflowCumulativeStatisticsPathParams extends SpeakeasyBase {
    workflowSid: string;
    workspaceSid: string;
}
export declare class FetchWorkflowCumulativeStatisticsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    minutes?: number;
    splitByWaitTime?: string;
    startDate?: Date;
    taskChannel?: string;
}
export declare class FetchWorkflowCumulativeStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkflowCumulativeStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkflowCumulativeStatisticsPathParams;
    queryParams: FetchWorkflowCumulativeStatisticsQueryParams;
    security: FetchWorkflowCumulativeStatisticsSecurity;
}
export declare class FetchWorkflowCumulativeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics?: shared.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics;
}
