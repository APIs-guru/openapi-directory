import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PoolAddQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolAddHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolAddRequest extends SpeakeasyBase {
    queryParams: PoolAddQueryParams;
    headers: PoolAddHeaders;
    request: any;
}
export declare class PoolAddResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
