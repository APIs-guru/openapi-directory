import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobScheduleUpdatePathParams extends SpeakeasyBase {
    jobScheduleId: string;
}
export declare class JobScheduleUpdateQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobScheduleUpdateHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobScheduleUpdateRequest extends SpeakeasyBase {
    pathParams: JobScheduleUpdatePathParams;
    queryParams: JobScheduleUpdateQueryParams;
    headers: JobScheduleUpdateHeaders;
    request: any;
}
export declare class JobScheduleUpdateResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
