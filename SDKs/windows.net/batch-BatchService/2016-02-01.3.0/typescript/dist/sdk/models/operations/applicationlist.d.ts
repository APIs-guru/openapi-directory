import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApplicationListQueryParams extends SpeakeasyBase {
    apiVersion: string;
    maxresults?: number;
    timeout?: number;
}
export declare class ApplicationListHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ApplicationListRequest extends SpeakeasyBase {
    queryParams: ApplicationListQueryParams;
    headers: ApplicationListHeaders;
}
export declare class ApplicationListResponse extends SpeakeasyBase {
    applicationListResult?: any;
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
