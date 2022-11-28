import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobUpdatePathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class JobUpdateQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobUpdateHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobUpdateRequest extends SpeakeasyBase {
    pathParams: JobUpdatePathParams;
    queryParams: JobUpdateQueryParams;
    headers: JobUpdateHeaders;
    request: any;
}
export declare class JobUpdateResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
