import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWorkspaceCumulativeStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkspaceCumulativeStatisticsPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class FetchWorkspaceCumulativeStatisticsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    minutes?: number;
    splitByWaitTime?: string;
    startDate?: Date;
    taskChannel?: string;
}
export declare class FetchWorkspaceCumulativeStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkspaceCumulativeStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkspaceCumulativeStatisticsPathParams;
    queryParams: FetchWorkspaceCumulativeStatisticsQueryParams;
    security: FetchWorkspaceCumulativeStatisticsSecurity;
}
export declare class FetchWorkspaceCumulativeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkspaceCumulativeStatistics?: shared.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics;
}
