import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobListQueryParams extends SpeakeasyBase {
    dollarExpand?: string;
    dollarFilter?: string;
    dollarSelect?: string;
    apiVersion: string;
    maxresults?: number;
    timeout?: number;
}
export declare class JobListHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobListRequest extends SpeakeasyBase {
    queryParams: JobListQueryParams;
    headers: JobListHeaders;
}
export declare class JobListResponse extends SpeakeasyBase {
    batchError?: any;
    cloudJobListResult?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
