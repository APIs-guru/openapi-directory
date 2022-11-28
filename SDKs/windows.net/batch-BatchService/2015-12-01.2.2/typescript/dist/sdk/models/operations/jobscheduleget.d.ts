import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobScheduleGetPathParams extends SpeakeasyBase {
    jobScheduleId: string;
}
export declare class JobScheduleGetQueryParams extends SpeakeasyBase {
    dollarExpand?: string;
    dollarSelect?: string;
    apiVersion: string;
    timeout?: number;
}
export declare class JobScheduleGetHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobScheduleGetRequest extends SpeakeasyBase {
    pathParams: JobScheduleGetPathParams;
    queryParams: JobScheduleGetQueryParams;
    headers: JobScheduleGetHeaders;
}
export declare class JobScheduleGetResponse extends SpeakeasyBase {
    batchError?: any;
    cloudJobSchedule?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
