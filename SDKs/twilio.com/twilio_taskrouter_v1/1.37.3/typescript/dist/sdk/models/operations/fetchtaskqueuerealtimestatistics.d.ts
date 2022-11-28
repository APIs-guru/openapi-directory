import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTaskQueueRealTimeStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskQueueRealTimeStatisticsPathParams extends SpeakeasyBase {
    taskQueueSid: string;
    workspaceSid: string;
}
export declare class FetchTaskQueueRealTimeStatisticsQueryParams extends SpeakeasyBase {
    taskChannel?: string;
}
export declare class FetchTaskQueueRealTimeStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskQueueRealTimeStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskQueueRealTimeStatisticsPathParams;
    queryParams: FetchTaskQueueRealTimeStatisticsQueryParams;
    security: FetchTaskQueueRealTimeStatisticsSecurity;
}
export declare class FetchTaskQueueRealTimeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics;
}
