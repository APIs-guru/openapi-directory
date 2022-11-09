import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PoolListQueryParams extends SpeakeasyBase {
    dollarExpand?: string;
    dollarFilter?: string;
    dollarSelect?: string;
    apiVersion: string;
    maxresults?: number;
    timeout?: number;
}
export declare class PoolListHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolListRequest extends SpeakeasyBase {
    queryParams: PoolListQueryParams;
    headers: PoolListHeaders;
}
export declare class PoolListResponse extends SpeakeasyBase {
    batchError?: any;
    cloudPoolListResult?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
