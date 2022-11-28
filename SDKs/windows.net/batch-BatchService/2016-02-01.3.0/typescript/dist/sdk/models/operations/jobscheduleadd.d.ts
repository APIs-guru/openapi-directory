import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobScheduleAddQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobScheduleAddHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobScheduleAddRequest extends SpeakeasyBase {
    queryParams: JobScheduleAddQueryParams;
    headers: JobScheduleAddHeaders;
    request: any;
}
export declare class JobScheduleAddResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
