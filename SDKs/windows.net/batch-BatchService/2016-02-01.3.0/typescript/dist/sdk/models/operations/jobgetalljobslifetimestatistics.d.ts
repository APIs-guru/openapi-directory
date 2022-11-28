import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobGetAllJobsLifetimeStatisticsQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobGetAllJobsLifetimeStatisticsHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobGetAllJobsLifetimeStatisticsRequest extends SpeakeasyBase {
    queryParams: JobGetAllJobsLifetimeStatisticsQueryParams;
    headers: JobGetAllJobsLifetimeStatisticsHeaders;
}
export declare class JobGetAllJobsLifetimeStatisticsResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    jobStatistics?: any;
    statusCode: number;
}
