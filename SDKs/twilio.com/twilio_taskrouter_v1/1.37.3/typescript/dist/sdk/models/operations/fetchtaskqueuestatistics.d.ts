import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTaskQueueStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskQueueStatisticsPathParams extends SpeakeasyBase {
    taskQueueSid: string;
    workspaceSid: string;
}
export declare class FetchTaskQueueStatisticsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    minutes?: number;
    splitByWaitTime?: string;
    startDate?: Date;
    taskChannel?: string;
}
export declare class FetchTaskQueueStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskQueueStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskQueueStatisticsPathParams;
    queryParams: FetchTaskQueueStatisticsQueryParams;
    security: FetchTaskQueueStatisticsSecurity;
}
export declare class FetchTaskQueueStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskQueueTaskQueueStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics;
}
