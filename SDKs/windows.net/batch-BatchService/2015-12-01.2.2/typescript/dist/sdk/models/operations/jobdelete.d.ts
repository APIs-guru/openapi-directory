import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobDeletePathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class JobDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobDeleteHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobDeleteRequest extends SpeakeasyBase {
    pathParams: JobDeletePathParams;
    queryParams: JobDeleteQueryParams;
    headers: JobDeleteHeaders;
}
export declare class JobDeleteResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
