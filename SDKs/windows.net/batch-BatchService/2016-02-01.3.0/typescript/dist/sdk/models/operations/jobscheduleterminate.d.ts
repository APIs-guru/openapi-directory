import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobScheduleTerminatePathParams extends SpeakeasyBase {
    jobScheduleId: string;
}
export declare class JobScheduleTerminateQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobScheduleTerminateHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobScheduleTerminateRequest extends SpeakeasyBase {
    pathParams: JobScheduleTerminatePathParams;
    queryParams: JobScheduleTerminateQueryParams;
    headers: JobScheduleTerminateHeaders;
}
export declare class JobScheduleTerminateResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
