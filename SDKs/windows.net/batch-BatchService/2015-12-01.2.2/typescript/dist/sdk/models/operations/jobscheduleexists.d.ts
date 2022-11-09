import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobScheduleExistsPathParams extends SpeakeasyBase {
    jobScheduleId: string;
}
export declare class JobScheduleExistsQueryParams extends SpeakeasyBase {
    dollarSelect?: string;
    apiVersion: string;
    timeout?: number;
}
export declare class JobScheduleExistsHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: string;
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobScheduleExistsRequest extends SpeakeasyBase {
    pathParams: JobScheduleExistsPathParams;
    queryParams: JobScheduleExistsQueryParams;
    headers: JobScheduleExistsHeaders;
}
export declare class JobScheduleExistsResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
