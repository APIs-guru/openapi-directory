import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobScheduleEnablePathParams extends SpeakeasyBase {
    jobScheduleId: string;
}
export declare class JobScheduleEnableQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobScheduleEnableHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobScheduleEnableRequest extends SpeakeasyBase {
    pathParams: JobScheduleEnablePathParams;
    queryParams: JobScheduleEnableQueryParams;
    headers: JobScheduleEnableHeaders;
}
export declare class JobScheduleEnableResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
