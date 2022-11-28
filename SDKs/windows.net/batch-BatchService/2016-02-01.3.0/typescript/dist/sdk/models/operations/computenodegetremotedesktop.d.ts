import { SpeakeasyBase } from "../../../internal/utils";
export declare class ComputeNodeGetRemoteDesktopPathParams extends SpeakeasyBase {
    nodeId: string;
    poolId: string;
}
export declare class ComputeNodeGetRemoteDesktopQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class ComputeNodeGetRemoteDesktopHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ComputeNodeGetRemoteDesktopRequest extends SpeakeasyBase {
    pathParams: ComputeNodeGetRemoteDesktopPathParams;
    queryParams: ComputeNodeGetRemoteDesktopQueryParams;
    headers: ComputeNodeGetRemoteDesktopHeaders;
}
export declare class ComputeNodeGetRemoteDesktopResponse extends SpeakeasyBase {
    batchError?: any;
    computeNodeGetRemoteDesktop200ApplicationJsonBinaryString?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
