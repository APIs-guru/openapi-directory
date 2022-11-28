import { SpeakeasyBase } from "../../../internal/utils";
export declare class PicoLoadmanagementSetDynamicCurrentPostPathParams extends SpeakeasyBase {
    serial: number;
}
export declare class PicoLoadmanagementSetDynamicCurrentPostQueryParams extends SpeakeasyBase {
    current: number;
}
export declare class PicoLoadmanagementSetDynamicCurrentPostRequest extends SpeakeasyBase {
    pathParams: PicoLoadmanagementSetDynamicCurrentPostPathParams;
    queryParams: PicoLoadmanagementSetDynamicCurrentPostQueryParams;
}
export declare class PicoLoadmanagementSetDynamicCurrentPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
