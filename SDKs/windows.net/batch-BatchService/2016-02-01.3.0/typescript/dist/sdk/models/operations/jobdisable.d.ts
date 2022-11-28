import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobDisablePathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class JobDisableQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobDisableHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobDisableRequest extends SpeakeasyBase {
    pathParams: JobDisablePathParams;
    queryParams: JobDisableQueryParams;
    headers: JobDisableHeaders;
    request: any;
}
export declare class JobDisableResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
