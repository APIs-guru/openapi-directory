import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobScheduleDisablePathParams extends SpeakeasyBase {
    jobScheduleId: string;
}
export declare class JobScheduleDisableQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobScheduleDisableHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobScheduleDisableRequest extends SpeakeasyBase {
    pathParams: JobScheduleDisablePathParams;
    queryParams: JobScheduleDisableQueryParams;
    headers: JobScheduleDisableHeaders;
}
export declare class JobScheduleDisableResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
