import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWORKSPACESTATISTICS_SERVERS: string[];
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
