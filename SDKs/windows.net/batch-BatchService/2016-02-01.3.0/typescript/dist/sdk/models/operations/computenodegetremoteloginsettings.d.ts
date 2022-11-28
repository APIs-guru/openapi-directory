import { SpeakeasyBase } from "../../../internal/utils";
export declare class ComputeNodeGetRemoteLoginSettingsPathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
}
export declare class ComputeNodeGetRemoteLoginSettingsQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class ComputeNodeGetRemoteLoginSettingsHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeGetRemoteLoginSettingsRequest extends SpeakeasyBase {
    pathParams: ComputeNodeGetRemoteLoginSettingsPathParams;
    queryParams: ComputeNodeGetRemoteLoginSettingsQueryParams;
    headers: ComputeNodeGetRemoteLoginSettingsHeaders;
}
export declare class ComputeNodeGetRemoteLoginSettingsResponse extends SpeakeasyBase {
    batchError?: any;
    computeNodeGetRemoteLoginSettingsResult?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
