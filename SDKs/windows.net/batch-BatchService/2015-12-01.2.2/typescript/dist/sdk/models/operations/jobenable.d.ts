import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobEnablePathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class JobEnableQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobEnableHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobEnableRequest extends SpeakeasyBase {
    pathParams: JobEnablePathParams;
    queryParams: JobEnableQueryParams;
    headers: JobEnableHeaders;
}
export declare class JobEnableResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
