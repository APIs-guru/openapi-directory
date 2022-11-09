import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobSchedulePatchPathParams extends SpeakeasyBase {
    jobScheduleId: string;
}
export declare class JobSchedulePatchQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobSchedulePatchHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobSchedulePatchRequest extends SpeakeasyBase {
    pathParams: JobSchedulePatchPathParams;
    queryParams: JobSchedulePatchQueryParams;
    headers: JobSchedulePatchHeaders;
    request: any;
}
export declare class JobSchedulePatchResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
