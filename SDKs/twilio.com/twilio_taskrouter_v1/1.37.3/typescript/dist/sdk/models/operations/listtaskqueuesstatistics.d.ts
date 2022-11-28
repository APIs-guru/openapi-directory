import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListTaskQueuesStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListTaskQueuesStatisticsPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class ListTaskQueuesStatisticsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    friendlyName?: string;
    minutes?: number;
    pageSize?: number;
    splitByWaitTime?: string;
    startDate?: Date;
    taskChannel?: string;
}
export declare class ListTaskQueuesStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse extends SpeakeasyBase {
    meta?: ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta;
    taskQueuesStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics[];
}
export declare class ListTaskQueuesStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListTaskQueuesStatisticsPathParams;
    queryParams: ListTaskQueuesStatisticsQueryParams;
    security: ListTaskQueuesStatisticsSecurity;
}
export declare class ListTaskQueuesStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    listTaskQueuesStatisticsResponse?: ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse;
    statusCode: number;
}
