import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWORKERINSTANCESTATISTICS_SERVERS: string[];
export declare class FetchWorkerInstanceStatisticsPathParams extends SpeakeasyBase {
    workerSid: string;
    workspaceSid: string;
}
export declare class FetchWorkerInstanceStatisticsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
}
export declare class FetchWorkerInstanceStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkerInstanceStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkerInstanceStatisticsPathParams;
    queryParams: FetchWorkerInstanceStatisticsQueryParams;
    security: FetchWorkerInstanceStatisticsSecurity;
}
export declare class FetchWorkerInstanceStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkerWorkerInstanceStatistics?: shared.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics;
}
