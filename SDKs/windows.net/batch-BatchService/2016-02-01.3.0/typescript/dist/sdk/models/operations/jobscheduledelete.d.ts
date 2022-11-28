import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobScheduleDeletePathParams extends SpeakeasyBase {
    jobScheduleId: string;
}
export declare class JobScheduleDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobScheduleDeleteHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobScheduleDeleteRequest extends SpeakeasyBase {
    pathParams: JobScheduleDeletePathParams;
    queryParams: JobScheduleDeleteQueryParams;
    headers: JobScheduleDeleteHeaders;
}
export declare class JobScheduleDeleteResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
