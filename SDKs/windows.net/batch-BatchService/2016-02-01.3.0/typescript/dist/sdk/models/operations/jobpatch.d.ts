import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobPatchPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class JobPatchQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobPatchHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobPatchRequest extends SpeakeasyBase {
    pathParams: JobPatchPathParams;
    queryParams: JobPatchQueryParams;
    headers: JobPatchHeaders;
    request: any;
}
export declare class JobPatchResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
