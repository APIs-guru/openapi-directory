import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWorkspaceRealTimeStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkspaceRealTimeStatisticsPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class FetchWorkspaceRealTimeStatisticsQueryParams extends SpeakeasyBase {
    taskChannel?: string;
}
export declare class FetchWorkspaceRealTimeStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkspaceRealTimeStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkspaceRealTimeStatisticsPathParams;
    queryParams: FetchWorkspaceRealTimeStatisticsQueryParams;
    security: FetchWorkspaceRealTimeStatisticsSecurity;
}
export declare class FetchWorkspaceRealTimeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkspaceRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics;
}
