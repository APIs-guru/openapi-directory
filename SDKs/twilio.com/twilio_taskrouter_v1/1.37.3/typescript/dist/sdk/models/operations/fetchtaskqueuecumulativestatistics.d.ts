import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTaskQueueCumulativeStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskQueueCumulativeStatisticsPathParams extends SpeakeasyBase {
    taskQueueSid: string;
    workspaceSid: string;
}
export declare class FetchTaskQueueCumulativeStatisticsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    minutes?: number;
    splitByWaitTime?: string;
    startDate?: Date;
    taskChannel?: string;
}
export declare class FetchTaskQueueCumulativeStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskQueueCumulativeStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskQueueCumulativeStatisticsPathParams;
    queryParams: FetchTaskQueueCumulativeStatisticsQueryParams;
    security: FetchTaskQueueCumulativeStatisticsSecurity;
}
export declare class FetchTaskQueueCumulativeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics;
}
