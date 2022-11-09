import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWORKERSCUMULATIVESTATISTICS_SERVERS: string[];
export declare class FetchWorkersCumulativeStatisticsPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class FetchWorkersCumulativeStatisticsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
}
export declare class FetchWorkersCumulativeStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkersCumulativeStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkersCumulativeStatisticsPathParams;
    queryParams: FetchWorkersCumulativeStatisticsQueryParams;
    security: FetchWorkersCumulativeStatisticsSecurity;
}
export declare class FetchWorkersCumulativeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics?: shared.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics;
}
