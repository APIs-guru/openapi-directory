import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobGetPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class JobGetQueryParams extends SpeakeasyBase {
    dollarExpand?: string;
    dollarSelect?: string;
    apiVersion: string;
    timeout?: number;
}
export declare class JobGetHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobGetRequest extends SpeakeasyBase {
    pathParams: JobGetPathParams;
    queryParams: JobGetQueryParams;
    headers: JobGetHeaders;
}
export declare class JobGetResponse extends SpeakeasyBase {
    batchError?: any;
    cloudJob?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
