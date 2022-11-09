import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PoolUpdatePropertiesPathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PoolUpdatePropertiesQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class PoolUpdatePropertiesHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class PoolUpdatePropertiesRequest extends SpeakeasyBase {
    pathParams: PoolUpdatePropertiesPathParams;
    queryParams: PoolUpdatePropertiesQueryParams;
    headers: PoolUpdatePropertiesHeaders;
    request: any;
}
export declare class PoolUpdatePropertiesResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
