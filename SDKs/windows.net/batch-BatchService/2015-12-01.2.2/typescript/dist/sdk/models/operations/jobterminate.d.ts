import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobTerminatePathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class JobTerminateQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobTerminateHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobTerminateRequest extends SpeakeasyBase {
    pathParams: JobTerminatePathParams;
    queryParams: JobTerminateQueryParams;
    headers: JobTerminateHeaders;
    request?: any;
}
export declare class JobTerminateResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
