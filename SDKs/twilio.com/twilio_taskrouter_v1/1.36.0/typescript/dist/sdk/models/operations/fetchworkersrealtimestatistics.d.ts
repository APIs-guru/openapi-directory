import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWORKERSREALTIMESTATISTICS_SERVERS: string[];
export declare class FetchWorkersRealTimeStatisticsPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class FetchWorkersRealTimeStatisticsQueryParams extends SpeakeasyBase {
    taskChannel?: string;
}
export declare class FetchWorkersRealTimeStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkersRealTimeStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkersRealTimeStatisticsPathParams;
    queryParams: FetchWorkersRealTimeStatisticsQueryParams;
    security: FetchWorkersRealTimeStatisticsSecurity;
}
export declare class FetchWorkersRealTimeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics;
}
