import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWORKERSTATISTICS_SERVERS: string[];
export declare class FetchWorkerStatisticsPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class FetchWorkerStatisticsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    friendlyName?: string;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    taskQueueName?: string;
    taskQueueSid?: string;
}
export declare class FetchWorkerStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkerStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkerStatisticsPathParams;
    queryParams: FetchWorkerStatisticsQueryParams;
    security: FetchWorkerStatisticsSecurity;
}
export declare class FetchWorkerStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkerWorkerStatistics?: shared.TaskrouterV1WorkspaceWorkerWorkerStatistics;
}
