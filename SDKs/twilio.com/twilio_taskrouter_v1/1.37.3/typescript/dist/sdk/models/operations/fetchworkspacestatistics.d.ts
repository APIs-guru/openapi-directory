import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWorkspaceStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkspaceStatisticsPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class FetchWorkspaceStatisticsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    minutes?: number;
    splitByWaitTime?: string;
    startDate?: Date;
    taskChannel?: string;
}
export declare class FetchWorkspaceStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkspaceStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkspaceStatisticsPathParams;
    queryParams: FetchWorkspaceStatisticsQueryParams;
    security: FetchWorkspaceStatisticsSecurity;
}
export declare class FetchWorkspaceStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkspaceStatistics?: shared.TaskrouterV1WorkspaceWorkspaceStatistics;
}
