import { SpeakeasyBase } from "../../../internal/utils";
export declare class CollectNowPathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class CollectNowQueryParams extends SpeakeasyBase {
    monitorClass: string;
}
export declare class CollectNowRequest extends SpeakeasyBase {
    pathParams: CollectNowPathParams;
    queryParams: CollectNowQueryParams;
}
export declare class CollectNowResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
