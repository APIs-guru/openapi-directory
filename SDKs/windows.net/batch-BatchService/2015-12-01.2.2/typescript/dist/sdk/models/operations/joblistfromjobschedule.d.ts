import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobListFromJobSchedulePathParams extends SpeakeasyBase {
    jobScheduleId: string;
}
export declare class JobListFromJobScheduleQueryParams extends SpeakeasyBase {
    dollarExpand?: string;
    dollarFilter?: string;
    dollarSelect?: string;
    apiVersion: string;
    maxresults?: number;
    timeout?: number;
}
export declare class JobListFromJobScheduleHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobListFromJobScheduleRequest extends SpeakeasyBase {
    pathParams: JobListFromJobSchedulePathParams;
    queryParams: JobListFromJobScheduleQueryParams;
    headers: JobListFromJobScheduleHeaders;
}
export declare class JobListFromJobScheduleResponse extends SpeakeasyBase {
    batchError?: any;
    cloudJobListResult?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
