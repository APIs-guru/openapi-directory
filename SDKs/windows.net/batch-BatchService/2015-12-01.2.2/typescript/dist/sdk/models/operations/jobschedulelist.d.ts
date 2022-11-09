import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobScheduleListQueryParams extends SpeakeasyBase {
    dollarExpand?: string;
    dollarFilter?: string;
    dollarSelect?: string;
    apiVersion: string;
    maxresults?: number;
    timeout?: number;
}
export declare class JobScheduleListHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobScheduleListRequest extends SpeakeasyBase {
    queryParams: JobScheduleListQueryParams;
    headers: JobScheduleListHeaders;
}
export declare class JobScheduleListResponse extends SpeakeasyBase {
    batchError?: any;
    cloudJobScheduleListResult?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
